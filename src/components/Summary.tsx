import { BudgetItem } from "../types/types";

type PropType = {
	budgetItems: BudgetItem[]
}

const getExpenses = (budgetItems: BudgetItem[]): number => {
	return budgetItems.reduce((total, current) => {
		return total + current.expenses.reduce((prev, exp) => {
			return prev + exp.amount;
		}, 0);
	}, 0);
}

const getTotalBudget = (budgetItems: BudgetItem[]): number => {
	return budgetItems.reduce((total, current) => {
		return total + current.amount;
	}, 0);
}

const Summary: React.FC<PropType>  = ({ budgetItems }) => {
	const expenses = getExpenses(budgetItems);
	const budget = getTotalBudget(budgetItems);
	const remaining = budget-expenses;

	return (
		<div className="summary-wrapper">
			<div className="summary-boxes">
				<div className="total-budget box">
					<h5>Budget</h5>
					<p className="text-success">{budget}€</p>
				</div>
				<div className="expense box">
					<h5>Expense</h5>
					<p className="text-warning">{expenses}€</p>
				</div>
				
				<div className="remaining box">
					<h5>Remaining</h5>
					{remaining < 0 ? 
						(<p className="text-danger">{Math.abs(remaining)}€ over</p>) : 
						(<p className="text-info">{remaining}€</p>)}
				</div>
			</div>
		</div>
	);
}

export default Summary;
