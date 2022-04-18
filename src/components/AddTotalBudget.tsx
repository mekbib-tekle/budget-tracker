import { useState } from "react";

type PropType = {
	onClick: (budget: number) => void;
}

const AddTotalBudget = ({onClick}: PropType) => {
	const [budget, setbudget] = useState(0);
	
	return (
		<div className="add-total-budget">
			<h6>Insert Your Total Budget</h6>
			<hr></hr>
			<label className="form-label">Total Budget</label>
			<div className="col-md-12 mb-4">
				<input 
					className="form-contorl"
					type="text"
					placeholder="e.g. 1500"
					onChange={(e) => setbudget(parseInt(e.target.value, 10))}
				/>
			</div>
			<button className="btn btn-secondary" onClick={() => onClick(budget)}>Save</button>
		</div>
	);
}

export default AddTotalBudget;