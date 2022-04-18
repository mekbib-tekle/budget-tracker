import { BudgetItem } from "../types/BudgetItem";

type PropType = {
	budgetItem: BudgetItem
}

const BudgetListItem = ({ budgetItem }: PropType) => {
	return (
		<div className="budget-item">
			<div className="budget-expense">
				<p>{budgetItem.amount}</p>
				<p>-50€</p>
			</div>
			<div>
				<p>{budgetItem.description}</p>
				<p>50€ remaining</p>
			</div>
			<div className="expand-expense">
				Expenses &#9660;
			</div>
		</div>
	);
}

export default BudgetListItem;