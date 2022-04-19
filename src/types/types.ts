export type Expense = {
  uuid: string;
  amount: number;
  expense: string;
}

export type BudgetItem = {
  uuid: string,
  description: string;
  amount: number;
  expenses: Expense[];
}
