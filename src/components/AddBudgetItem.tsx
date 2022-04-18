const AddBudgetItem = () => {
	return (
		<div className="add-budget-item">
			<h6>Add Budget Entry</h6>
			<hr></hr>

			<label className="form-label">Budget Description</label>
			<div className="col-md-12 mb-4">
				<input className="form-contorl" type="text" placeholder="e.g. Groceries"/>
			</div>

			<label className="form-label">Amount</label>
			<div className="col-md-12 mb-4">
				<input className="form-contorl" type="text" />
			</div>
			<button className="btn btn-secondary">Add Budget Entry</button>
		</div>
	);
}

export default AddBudgetItem;