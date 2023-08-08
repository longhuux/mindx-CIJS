import React from 'react';
// import './ExpenseList.css';

const ExpenseList = ({ expenses }) => {
  return (
    <div className="expense-list">
      {expenses.map((expense, index) => (
        <div key={index} className="expense-item">
          <span>{expense.date}</span>
          <span>{expense.name}</span>
          <span>{expense.amount}$</span>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
