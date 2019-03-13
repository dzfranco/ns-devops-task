import * as _ from 'lodash';

import { toObjectID, Model } from 'iridium';

import { differenceInCalendarDays, addDays, isSameDay } from 'date-fns';

import { injectable, inject } from 'inversify';

import { IBookPersistence } from '../interfaces/persistence/ibook.persistence';
import { IBookService } from '../interfaces/service/ibook';
import { SERVICE_IDENTIFIER, PERSISTENCE_IDENTIFIERS } from '../../common/constants/identifiers';
import { IDatesHelperService } from '../interfaces/service/helpers/idates-helper';
import { BookDTO } from '../../common/models/books/books.dto';
import { Book } from '../../common/models/books/books.model';
import { IBook } from '../../common/models/books/ibooks.model';

@injectable()
export class BookService implements IBookService {
	private dateHelperService: IDatesHelperService;
	private bookPersistence: IBookPersistence;

	constructor(
		@inject(PERSISTENCE_IDENTIFIERS.BOOK) bookPersistence: IBookPersistence,
		@inject(SERVICE_IDENTIFIER.DATES_HELPER) dateHelperService: IDatesHelperService
	) {
		this.bookPersistence = bookPersistence;
		this.dateHelperService = dateHelperService;
	}
	/**
	 * @description Creates empty book dto
	 * @param userId
	 * @param date
	 */
	public createEmptyBookDTO(userId: string, date: Date): BookDTO {
		const emptyBook = new BookDTO();
		emptyBook._id = null;
		emptyBook.$user = toObjectID(userId);
		emptyBook.$date = date;
		emptyBook.$hasClosedBooks = false;
		emptyBook.$createdAt = new Date();
		emptyBook.$updatedAt = new Date();
		return emptyBook;
	}

	/**
	 * @description Gets all the book records by date range
	 * @param userId
	 * @param start
	 * @param end
	 * @param {string} timezone - Optional timezone
	 * @returns by date range
	 */
	public async booksByDateRange(
		userId: string,
		start: Date,
		end: Date,
		timezone: string,
		page: number,
		limit: number
	): Promise<Book[]> {
		const startDate = this.dateHelperService.toTimeZone(start, timezone);
		const endDate = this.dateHelperService.toTimeZone(end, timezone);
		const books = await this.bookPersistence.booksByDateRange(userId, startDate, endDate, page, limit);
		return books;
	}

	/**
	 * Gets books by day
	 * @param userId
	 * @param day
	 * @param timezone
	 * @returns books by day
	 */
	public async getBookByDay(userId: string, day: Date, timezone: string): Promise<Book> {
		const start = this.dateHelperService.startOfDayWithTimezone(day, timezone);
		const end = this.dateHelperService.endOfDayWithTimezone(day, timezone);
		const book = await this.bookPersistence.getBookByDate(userId, start, end);
		if (_.isNil(book)) {
			return this.bookPersistence.createEmptyBook(userId, day);
		}
		return book;
	}

	/**
	 * Gets books calendar
	 * @param userId
	 * @param type
	 * @param date
	 * @param timeZone
	 */
	public async getBooksCalendar(userId: string, type: string, date: Date, timeZone: string): Promise<BookDTO[]> {
		let start: Date;
		let end: Date;
		let difference;
		switch (type) {
			case 'MONTH':
				start = this.dateHelperService.startOfMonthWithTimeZone(date, timeZone);
				end = this.dateHelperService.endOfMonthWithTimeZone(date, timeZone);
				break;
			default:
				start = this.dateHelperService.startOfMonthWithTimeZone(date, timeZone);
				end = this.dateHelperService.endOfMonthWithTimeZone(date, timeZone);
		}
		let books = await this.bookPersistence.booksByDateRange(userId, start, end);
		difference = Math.abs(differenceInCalendarDays(end, start));
		const calendar: BookDTO[] = [];
		for (let daysToAdd = 0; daysToAdd <= difference; daysToAdd++) {
			let selectedBook: Book = null;
			const day = addDays(start, daysToAdd);
			if (books.length > 0) {
				selectedBook = books[0];
			}
			if (selectedBook !== null) {
				if (isSameDay(selectedBook.$date, day)) {
					calendar.push(selectedBook.toDTO());

					books.shift();
					// Check for duplicate books on the same date
					const newBooks = [];
					books.forEach(book => {
						if (!isSameDay(book.$date, day)) {
							newBooks.push(book);
						}
					});
					books = newBooks;
				} else {
					const bookToPush = this.createEmptyBookDTO(userId, day);
					calendar.push(bookToPush);
				}
			} else {
				const bookToPush = this.createEmptyBookDTO(userId, day);
				calendar.push(bookToPush);
			}
		}
		return calendar;
	}

	/**
	 * @description Adds a book registry to the user
	 * @param {string} userId
	 * @param {Date} date
	 * @param {string} timezone
	 */
	public async addBook(userId: string, date: Date, timezone: string): Promise<Book> {
		const existingBook = await this.getBookByDay(userId, date, timezone);
		if (existingBook.id) {
			return existingBook;
		}
		const newDate = this.dateHelperService.toTimeZone(date, timezone);
		const bookData = new BookDTO();
		bookData.$user = toObjectID(userId);
		bookData.$date = newDate;
		bookData.$hasClosedBooks = true;
		const savedBook = await this.bookPersistence.addBook(bookData);
		return savedBook;
	}

	/**
	 * @description Edits a book info from the Base DTO
	 * @param bookInfo
	 * @returns book
	 */
	public async editBook(bookInfo: IBook): Promise<Book> {
		const foundBook = await this.bookPersistence.getUserBook(bookInfo.$user.toString(), bookInfo._id.toString());
		if (_.isNil(foundBook)) {
			throw new Error('Book not found');
		}
		for (const key in bookInfo) {
			if (bookInfo[key] !== undefined) {
				foundBook[key] = bookInfo[key];
			}
		}
		const savedBook = await this.bookPersistence.saveBook(foundBook);
		return savedBook;
	}
}
