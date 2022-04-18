type propType = {
	budget: number;
}

const Summary = ({ budget }: propType) => {
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
					<p>1250</p>
				</div>
				
				<div className="remaining box">
					<p>Remaining</p>
					<p>250</p>
				</div>
			</div>
		</div>
	);
}

export default Summary;