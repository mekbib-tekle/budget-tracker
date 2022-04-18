import { createContext } from "react";
import { BudgetItem, Expense } from "../types/BudgetItem";

type ExpenseContextType = {
  budgetItems: BudgetItem[];
  addExpense: (expense: Expense, budgetItemId: string) => void;
}

export const ExpenseContext = createContext<ExpenseContextType>({
  budgetItems: [],
  addExpense: (expense: Expense, budgetItemId: string) => {},
});