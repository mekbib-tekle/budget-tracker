export type Expense = {
  amount: number;
  expense: string;
}

export type BudgetItem = {
  uuid: string,
  description: string;
  amount: number;
  expenses: Expense[];
}
