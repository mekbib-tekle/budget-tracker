import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AddTotalBudget from './components/AddTotalBudget';
import AddBudgetItem from './components/AddBudgetItem';
import Summary from './components/Summary';
import BudgetList from "./components/BudgetList";
import { BudgetItem, Expense } from "./types/BudgetItem";
import { ExpenseContext } from "./components/ExpenseContext";

function App() {
  const [budget, setBudget] = useState(0);
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([])
  

  const handleAddBugetItem = (item: BudgetItem) => {
    setBudgetItems(prevItems => [...prevItems, item]);
  };

  const addExpense = (expense: Expense, budgetItemId: string) => {
    const budgetItem = budgetItems.find((item) => item.uuid === budgetItemId);
    if (!budgetItem || !budgetItem.expenses) {
      return;
    }

    budgetItem.expenses.push(expense);

    const filteredList = budgetItems.filter((item) => item.uuid !== budgetItemId);
    setBudgetItems([...filteredList, budgetItem]);
  };

  return (
    <div className="w-100 p-4 row d-flex justify-content-center">
      <header className="App-header">
        <h1>Budget Tracker</h1>
      </header>
      <div className="col-12">
        <div className="row g-0">
          <div className="col-lg-6">
            <AddTotalBudget onClick={setBudget}/>
            <AddBudgetItem onClick={handleAddBugetItem}/>
          </div>
          <div className="col-lg-6">
            <Summary budget={budget} budgetItems={budgetItems}/>
            <ExpenseContext.Provider value={{addExpense, budgetItems}}>
              <BudgetList budgetItems={budgetItems} />
            </ExpenseContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
