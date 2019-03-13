import { Core, Model } from 'iridium';
import { User } from '../models/user/user.model';
import { IDailyTransaction, DailyTransaction } from '../models/daily-transaction.model';
import { ICategory, Category } from '../models/category.model';
import { CustomCategory } from '../models/categories/custom-category';
import { IMonthlyExpense, MonthlyExpense } from '../models/monthly-expense.model';
import { CustomSubCategory, ICustomSubCategory } from '../models/subcategory';
import { IncomeSource, IIncomeSource } from '../models/income-source';
import { Friend, IFriend } from '../models/friend.model';
import { Activity, IActivity } from '../models/activity/activity.model';
import { IUser } from '../models/user/iuser';
import { ICustomCategory } from '../models/categories/icustom-category';
import { Book } from '../models/books/books.model';
import { IBook } from '../models/books/ibooks.model';
import { Occupation } from '../models/occupation/occupation.model';
import { IOccupation } from '../models/occupation/ioccupation.model';

export interface MyDatabaseI extends Core {
	Occupation: Model<IOccupation, Occupation>;
	Book: Model<IBook, Book>;
	Activity: Model<IActivity, Activity>;
	Friend: Model<IFriend, Friend>;
	User: Model<IUser, User>;
	DailyTransaction: Model<IDailyTransaction, DailyTransaction>;
	Category: Model<ICategory, Category>;
	CustomCategory: Model<ICustomCategory, CustomCategory>;
	MonthlyExpense: Model<IMonthlyExpense, MonthlyExpense>;
	CustomSubCategory: Model<ICustomSubCategory, CustomSubCategory>;
	IncomeSource: Model<IIncomeSource, IncomeSource>;
}
