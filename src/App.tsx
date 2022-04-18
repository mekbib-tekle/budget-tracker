import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import AddTotalBudget from './components/AddTotalBudget';
import AddBudgetItem from './components/AddBudgetItem';
import Summary from './components/Summary';
import BudgetList from "./components/BudgetList";
import { BudgetItem } from "./types/BudgetItem";

function App() {
  const [budget, setBudget] = useState(0);
  const [budgetItems, setBudgetItems] = useState<BudgetItem[]>([])
  

  const handleAddBugetItem = (item: BudgetItem) => {
    setBudgetItems(prevItems => [...prevItems, item]);
  }

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
            <Summary budget={budget}/>
            <BudgetList budgetItems={budgetItems}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
