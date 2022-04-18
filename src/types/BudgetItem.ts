export type Expense = {
  amount: number;
  expense: string;
}

export type BudgetItem = {
  description: string;
  amount: number;
  expenses?: Expense[];
}