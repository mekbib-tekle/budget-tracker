import React, { useContext, useState } from "react";
import { v1 as uuidv1 } from "uuid";
import { ExpenseContext } from "./ExpenseContext";

type PropType = {
	budgetItemId: string;
}

const AddExpense: React.FC<PropType> = ({budgetItemId}) => {
  const { addExpense } = useContext(ExpenseContext);
	const [expense, setExpense] = useState("");
	const [amount, setAmount] = useState(0);

	return (
		<div className="add-expense d-flex mb-4">
			<input
				type="text"
				placeholder="Expense description"
				onChange={(e) => setExpense(e.target.value) }
			/>
			<input
				type="text"
				placeholder="Amount"
				onChange={(e) => setAmount(parseInt(e.target.value, 10)) }
			/>
			<button 
				onClick={() => addExpense({amount, expense, uuid: uuidv1()}, budgetItemId) }
				className="btn btn-outline-primary"
			>
					Add Expense
			</button>
		</div>
	);
}

export default AddExpense;
