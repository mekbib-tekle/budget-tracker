import { useState } from "react";
import { BudgetItem } from "../types/BudgetItem";
import ExpenseList from "./ExpenseList";

type PropType = {
	budgetItem: BudgetItem
}

const BudgetListItem = ({ budgetItem,  }: PropType) => {

	const [expand, setExpand] = useState(false);

	return (
		<div className="budget-item-wrapper">
			<div className="budget-item">
				<div className="budget-expense">
					<p>{budgetItem.amount}</p>
					<p>-50€</p>
				</div>
				<div>
					<p>{budgetItem.description}</p>
					<p>50€ remaining</p>
				</div>
				<div className="expand-expense" onClick={() => setExpand(!expand)}>
					Expenses &#9660;
				</div>
			</div>
			{expand && (
				<div>
					<ExpenseList />
				</div>
			)}
		</div>
	);
}

export default BudgetListItem;