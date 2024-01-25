// IncomeExpense.js
import React from "react";

export const IncomeExpense = ({ income, expense }) => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+Rs. {income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-Rs. {expense}</p>
      </div>
    </div>
  );
};
