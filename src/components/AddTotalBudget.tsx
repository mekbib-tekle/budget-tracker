const AddTotalBudget = () => {
	return (
		<div className="add-total-budget">
			<h6>Insert Your Total Budget</h6>
			<hr></hr>
			<label className="form-label">Total Budget</label>
			<div className="col-md-12 mb-4">
				<input className="form-contorl" type="text" placeholder="e.g. 1500"/>
			</div>
			<button className="btn btn-secondary">Save</button>
		</div>
	);
}

export default AddTotalBudget;