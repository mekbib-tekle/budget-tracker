import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AddBudgetItem from './components/AddBudgetItem';
import BudgetList from "./components/budget-list/BudgetList";
import Summary from './components/Summary';
import { BudgetItem, Expense } from "./types/types";
import { ExpenseContext } from "./components/expense/ExpenseContext";

function App() {
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([])
  
  const handleAddBugetItem = (item: BudgetItem) => {
    setBudgetItems(prevItems => [...prevItems, item]);
  };

  const addExpense = (expense: Expense, budgetItemId: string) => {
    setBudgetItems(prevItems => {
      return prevItems.map((item) => {
        if (item.uuid === budgetItemId) {
          item.expenses.push(expense);
        }
        return item;
      })
    });
  };

  const deleteBudgetItem = (uuid: string) => {
    setBudgetItems(prevItems => {
      return prevItems.filter((item) => item.uuid !== uuid)
    });
  }

  return (
    <div className="w-100 p-4 row d-flex justify-content-center">
      <header className="App-header">
        <h1>Budget Tracker</h1>
      </header>
      <div className="col-12">
        <div className="row g-0">
          <div className="col-lg-6">
            <AddBudgetItem onClick={handleAddBugetItem}/>
          </div>
          <div className="col-lg-6">
            <Summary budgetItems={budgetItems}/>
            <ExpenseContext.Provider value={{addExpense, budgetItems}}>
              <BudgetList budgetItems={budgetItems} deleteBudgetItem={deleteBudgetItem}/>
            </ExpenseContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
