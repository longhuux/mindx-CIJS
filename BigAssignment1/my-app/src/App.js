import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [yearFilter, setYearFilter] = useState('all');

  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
    setShowForm(false); // Hide the form after adding an expense
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  const handleYearFilterChange = (year) => {
    setYearFilter(year);
  };

  const filteredExpenses = yearFilter === 'all' ? expenses : expenses.filter(expense => expense.date.startsWith(yearFilter));

  return (
    <div className="App">
        <button className="add-btn" onClick={() => setShowForm(true)}>ADD NEW EXPENSE</button>
      {showForm && <ExpenseForm onAddExpense={handleAddExpense} onCancel={handleCancel} />}
      <div className="button-container">
        <button onClick={() => handleYearFilterChange('all')}>All</button>
        <button onClick={() => handleYearFilterChange('2021')}>2021</button>
        <button onClick={() => handleYearFilterChange('2022')}>2022</button>
        <button onClick={() => handleYearFilterChange('2023')}>2023</button>
        <button onClick={() => handleYearFilterChange('2024')}>2024</button>
      </div>
      <ExpenseList expenses={filteredExpenses} />
    </div>
  );
};

export default App;
