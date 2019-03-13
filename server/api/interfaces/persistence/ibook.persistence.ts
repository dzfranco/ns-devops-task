import { Book } from '../../../common/models/books/books.model';
import { IBook } from '../../../common/models/books/ibooks.model';

export interface IBookPersistence {
	/**
	 * Creates empty book model, which can be used to manipulate the DB
	 * @param {string} userId - The user's ID
	 * @param {date} date - Date for the book to be created
	 * @returns {Book} - Empty book
	 */
	createEmptyBook(userId: string, date: Date): Book;

	/**
	 * @description Gets a single user book
	 * @param userId
	 * @param bookId
	 */
	getUserBook(userId: string, bookId: string): Promise<Book>;

	/**
	 * @description Saves a book and returns the saved document
	 * @param {Book} book
	 * @returns book
	 */
	saveBook(book: Book): Promise<Book>;

	/**
	 * @description Gets all the book records by date range
	 * @param userId
	 * @param start
	 * @param end
	 * @returns by date range
	 */
	booksByDateRange(userId: string, start: Date, end: Date, page?: number, limit?: number): Promise<Book[]>;

	/**
	 * Gets the first book found for the date range
	 * @param userId
	 * @param startDate
	 * @param endDate
	 */
	getBookByDate(userId: string, startDate: Date, endDate: Date): Promise<Book>;

	/**
	 * @description Adds a book registry to the user
	 * @param userId
	 * @param date
	 * @param timezone
	 */
	addBook(bookData: IBook): Promise<Book>;
}
