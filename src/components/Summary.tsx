import { BudgetItem } from "../types/BudgetItem";

type propType = {
	budget: number;
	budgetItems: BudgetItem[]
}

const getExpenses = (budgetItems: BudgetItem[]): number => {
	return budgetItems.reduce((total, current)=> {
		return total + current.expenses.reduce((prev, exp) => {
			return prev + exp.amount;
		}, 0);
	}, 0);
}

const Summary = ({ budget, budgetItems }: propType) => {
	const expenses = getExpenses(budgetItems);
	const remaining = budget-expenses;

	return (
		<div className="summary-wrapper">
			<h6>Summary</h6>
			<div className="summary-boxes">
				<div className="total-budget box">
					<p>Budget</p>
					<p>{budget}</p>
				</div>
				<div className="expense box">
					<p>Expense</p>
					<p>{expenses}</p>
				</div>
				
				<div className="remaining box">
					<p>Remaining</p>
					<p>{remaining}</p>
				</div>
			</div>
		</div>
	);
}

export default Summary;