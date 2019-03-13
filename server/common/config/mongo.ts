import { Core, Model } from 'iridium';

import { MyDatabaseI } from '../interfaces/imongo';
import { ICategory, Category } from '../models/category.model';
import { DailyTransaction, IDailyTransaction } from '../models/daily-transaction.model';
import { Friend, IFriend } from '../models/friend.model';
import { IncomeSource, IIncomeSource } from '../models/income-source';
import { IMonthlyExpense, MonthlyExpense } from '../models/monthly-expense.model';
import { ICustomSubCategory, CustomSubCategory } from '../models/subcategory';
import { IActivity, Activity } from '../models/activity/activity.model';
import { Book } from '../models/books/books.model';
import { IBook } from '../models/books/ibooks.model';
import { CustomCategory } from '../models/categories/custom-category';
import { ICustomCategory } from '../models/categories/icustom-category';
import { IUser } from '../models/user/iuser';
import { User } from '../models/user/user.model';
import { IOccupation } from '../models/occupation/ioccupation.model';
import { Occupation } from '../models/occupation/occupation.model';

export class MyDatabase extends Core implements MyDatabaseI {
	public Occupation = new Model<IOccupation, Occupation>(this, Occupation);
	public Book = new Model<IBook, Book>(this, Book);
	public User = new Model<IUser, User>(this, User);
	public DailyTransaction = new Model<IDailyTransaction, DailyTransaction>(this, DailyTransaction);
	public Category = new Model<ICategory, Category>(this, Category);
	public CustomCategory = new Model<ICustomCategory, CustomCategory>(this, CustomCategory);
	public MonthlyExpense = new Model<IMonthlyExpense, MonthlyExpense>(this, MonthlyExpense);
	public CustomSubCategory = new Model<ICustomSubCategory, CustomSubCategory>(this, CustomSubCategory);
	public IncomeSource = new Model<IIncomeSource, IncomeSource>(this, IncomeSource);
	public Friend = new Model<IFriend, Friend>(this, Friend);
	public Activity = new Model<IActivity, Activity>(this, Activity);
}
