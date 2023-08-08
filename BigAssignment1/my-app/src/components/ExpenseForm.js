import React, { useState } from 'react';
// import './ExpenseForm.css';

const ExpenseForm = ({ onAddExpense, onCancel }) => {
  const [expense, setExpense] = useState({ name: '', amount: '', date: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExpense(expense);
    setExpense({ name: '', amount: '', date: '' });
  };

  return (
    <div className="expense-form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Expense name"
          value={expense.name}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={expense.amount}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={expense.date}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Expense</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
