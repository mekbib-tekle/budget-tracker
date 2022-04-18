import BudgetListItem from "./BudgetListItem";
import { BudgetItem } from "../types/BudgetItem";

type PropTypes = {
	budgetItems: BudgetItem[];
}

const BudgetList = ({ budgetItems }: PropTypes) => {
	return (
		<div className="budget-list mt-4">
			{ budgetItems && budgetItems.map((item) => {
				return (<BudgetListItem key={item.description} budgetItem={item} />)
			})}
		</div>
	);
}

export default BudgetList;