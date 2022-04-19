import { useState } from "react";
import { BudgetItem } from "../../types/types";
import ExpenseList from "../expense/ExpenseList";

type PropType = {
	budgetItem: BudgetItem;
  deleteBudgetItem: (uuid: string) => void;
}

const BudgetListItem: React.FC<PropType> = ({ budgetItem, deleteBudgetItem }) => {

	const [expand, setExpand] = useState(false);

	const totalExpense = budgetItem.expenses.reduce((total, expense) => {
		return total + expense.amount;
	}, 0);

	const remaining = budgetItem.amount - totalExpense;

	return (
		<div className="budget-item-wrapper">
			<div className="budget-item">
				<div className="budget-expense">
					<p className="text-success">{budgetItem.amount}€</p>
					<p className="text-warning">{totalExpense}€ spent</p>
				</div>
				<div>
					<p>{budgetItem.description}</p>
					{remaining < 0 ? 
						(<p className="text-danger">{Math.abs(remaining)}€ over</p>) : 
						(<p className="text-info">{remaining}€ remaining</p>)}
				</div>
				<div className="expand-expense">
				  <button
            className="btn btn-link p-4 text-danger"
            onClick={() => deleteBudgetItem(budgetItem.uuid)}>
              Delete
          </button>
          <button className="btn btn-link p-4"  onClick={() => setExpand(!expand)}>
            Expenses {expand ? <span>&#9650;</span> : <span>&#9660;</span>}
          </button>
				</div>
			</div>
			{expand && (
				<div>
					<ExpenseList budgetItem={budgetItem}/>
				</div>
			)}
		</div>
	);
}

export default BudgetListItem;
