import AddExpense from "./AddExpense";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
	return (
		<div>
      Expense List
      <ExpenseItem />
      <AddExpense />
    </div>
	);
}

export default ExpenseList;
