import { Expense } from "../../types/types";

type PropType = {
	expenseItem: Expense;
}

const ExpenseItem: React.FC<PropType>  = ({expenseItem}) => {
	return (
		<div className="expense-item">
			<div>{expenseItem.expense}</div>
			<div>{expenseItem.amount}</div>
			<div>delete</div>
		</div>
	);
};

export default ExpenseItem;

