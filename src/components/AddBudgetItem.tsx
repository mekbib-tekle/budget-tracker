import { useState } from "react";
import { v1 as uuidv1 } from "uuid";
import { BudgetItem } from "../types/types";

type PropType = {
	onClick: (budget: BudgetItem) => void;
}

const AddBudgetItem: React.FC<PropType>  = ({ onClick }) => {
	const [description, setDescription] = useState("");
	const [amount, setAmount] = useState(0);

	return (
		<div className="add-budget-item">
			<h6>Add Budget Entry</h6>
			<hr></hr>

			<label className="form-label">Budget Description</label>
			<div className="col-md-12 mb-4">
				<input
					className="form-contorl"
					type="text"
					placeholder="e.g. Groceries"
					onChange={(e) => setDescription(e.target.value)}
				/>
			</div>

			<label className="form-label">Amount</label>
			<div className="col-md-12 mb-4">
				<input
					className="form-contorl"
					type="text"
					onChange={(e) => setAmount(parseInt(e.target.value, 10))}
				/>
			</div>
			<button
				className="btn btn-secondary"
				onClick={() => onClick({description, amount, uuid: uuidv1(), expenses: []})}
			>
				Add Budget Entry
			</button>
		</div>
	);
}

export default AddBudgetItem;