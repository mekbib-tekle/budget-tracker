import { useContext } from "react";
import { Expense } from "../../types/types";
import { ExpenseContext } from "./ExpenseContext";

type PropType = {
	expenseItem: Expense;
  budgetItemId: string;
}

const ExpenseItem: React.FC<PropType>  = ({expenseItem, budgetItemId}) => {
  const { deleteExpense } = useContext(ExpenseContext);

	return (
		<div className="expense-item">
			<div>{expenseItem.expense}</div>
			<div>{expenseItem.amount}</div>
			<button
        className="btn btn-link text-warning"
        onClick={() => deleteExpense(expenseItem.uuid, budgetItemId)}>
          delete
      </button>
		</div>
	);
};

export default ExpenseItem;

