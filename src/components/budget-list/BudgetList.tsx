import BudgetListItem from "./BudgetListItem";
import { BudgetItem } from "../../types/types";

type PropTypes = {
	budgetItems: BudgetItem[];
	deleteBudgetItem: (uuid: string) => void;
}

const BudgetList: React.FC<PropTypes> = ({ budgetItems, deleteBudgetItem }) => {
	return (
		<div className="budget-list mt-4">
			{ budgetItems && budgetItems.map((item) => {
				return (<BudgetListItem key={item.description} budgetItem={item} deleteBudgetItem={deleteBudgetItem}/>)
			})}
		</div>
	);
}

export default BudgetList;
