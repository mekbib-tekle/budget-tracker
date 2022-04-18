import { BudgetItem } from "../types/BudgetItem";
import AddExpense from "./AddExpense";
import ExpenseItem from "./ExpenseItem";

type PropType = {
  budgetItem: BudgetItem;
}

const ExpenseList = ({budgetItem}: PropType) => {
  const expenseItems = budgetItem.expenses;

	return (
		<div className="expense-list">
      {expenseItems && expenseItems.map((item) => {
        return (<ExpenseItem expenseItem={item}/>);
      })}
      <AddExpense budgetItemId={budgetItem.uuid}/>
    </div>
	);
}

export default ExpenseList;
