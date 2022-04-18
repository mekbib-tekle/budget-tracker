import { Expense } from "../../types/types";

type PropType = {
	expenseItem: Expense;
}

const ExpenseItem = ({expenseItem}: PropType) => {
	return (
		<div className="expense-item">
			<div>{expenseItem.expense}</div>
			<div>{expenseItem.amount}</div>
			<div>delete</div>
		</div>
	);
};

export default ExpenseItem;
