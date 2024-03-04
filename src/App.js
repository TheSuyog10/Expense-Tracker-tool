import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { TransactionList } from "./components/TransactionList";
import { IncomeExpense } from "./components/IncomeExpense";
import { AddTransaction } from "./components/AddTransaction";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    // Retrieve transactions from local storage on component mount
    const storedTransactions = JSON.parse(localStorage.getItem("transactions"));
    if (storedTransactions) {
      setTransactions(storedTransactions);
    }
  }, []); // Empty dependency array ensures this effect runs only once on mount

  useEffect(() => {
    // Store transactions in local storage whenever it changes
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (text, amount) => {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: +amount,
    };

    setTransactions((prevTransactions) => [
      ...prevTransactions,
      newTransaction,
    ]);
  };

  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  };

  const calculateTotal = (type) => {
    return transactions
      .filter((transaction) =>
        type === "income" ? transaction.amount > 0 : transaction.amount < 0
      )
      .reduce((total, transaction) => total + transaction.amount, 0)
      .toFixed(2);
  };
  const calculateBalance = () => {
    const totalIncome = calculateTotal("income");
    const totalExpense = calculateTotal("expense");
    return (totalIncome - -totalExpense).toFixed(2);
  };

  return (
    <div className="App">
      <Header />
      <Balance total={calculateBalance()} />
      <IncomeExpense
        income={calculateTotal("income")}
        expense={calculateTotal("expense")}
      />
      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
      />
      <AddTransaction addTransaction={addTransaction} />
    </div>
  );
}

export default App;
