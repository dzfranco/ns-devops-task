import { Book } from '../../../common/models/books/books.model';
import { IBook } from '../../../common/models/books/ibooks.model';
import { BookDTO } from '../../../common/models/books/books.dto';
export interface IBookService {
	/**
	 * @description Creates empty book dto
	 * @param userId
	 * @param date
	 */
	createEmptyBookDTO(userId: string, date: Date): BookDTO;

	/**
	 * @description Gets all the book records by date range
	 * @param userId
	 * @param start
	 * @param end
	 * @param {string} timezone - Optional timezone
	 * @returns by date range
	 */
	booksByDateRange(
		userId: string,
		start: Date,
		end: Date,
		timezone: string,
		page: number,
		limit: number
	): Promise<Book[]>;

	/**
	 * @description Gets the day book
	 * @param userId
	 * @param day
	 * @param timezone
	 * @returns books by day
	 */
	getBookByDay(userId: string, day: Date, timezone: string): Promise<Book>;

	/**
	 * Gets books calendar
	 * @param userId
	 * @param type
	 * @param date
	 * @param timeZone
	 */
	getBooksCalendar(userId: string, type: string, date: Date, timeZone: string): Promise<BookDTO[]>;

	/**
	 * @description Adds a book registry to the user
	 * @param userId
	 * @param date
	 * @param timezone
	 */
	addBook(userId: string, date: Date, timezone: string): Promise<Book>;

	/**
	 * @description Edits a book info from the Base DTO
	 * @param bookInfo
	 * @returns book
	 */
	editBook(bookInfo: IBook): Promise<Book>;
}
