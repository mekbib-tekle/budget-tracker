import { BudgetItem } from "../../types/types";
import AddExpense from "./AddExpense";
import ExpenseItem from "./ExpenseItem";

type PropType = {
  budgetItem: BudgetItem;
}

const ExpenseList: React.FC<PropType>  = ({budgetItem}) => {
  const expenseItems = budgetItem.expenses;

	return (
		<div className="expense-list">
      {expenseItems && expenseItems.map((item) => {
        return (
          <ExpenseItem expenseItem={item} key={item.expense} budgetItemId={budgetItem.uuid}/>
        );
      })}
      <AddExpense budgetItemId={budgetItem.uuid} />
    </div>
	);
}

export default ExpenseList;
