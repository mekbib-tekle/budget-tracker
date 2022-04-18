const BudgetListItem = () => {
	return (
		<div className="budget-item">
			<div className="budget-expense">
				<p>100€</p>
				<p>-50€</p>
			</div>
			<div>
				<p>Groceries</p>
				<p>50€ remaining</p>
			</div>
			<div className="expand-expense">
				Expenses &#9660;
			</div>
		</div>
	);
}

export default BudgetListItem;