import React, { useState } from "react";

export const AddTransaction = ({ addTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [Message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "" || amount === 0) {
      setMessage("Empty Fields");
      setTimeout(() => {
        setMessage("");
      }, 2000);
      return;
    }

    // Call addTransaction function from App.js
    addTransaction(text, amount);

    // Clear the form
    setText("");
    setAmount(0);
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <h2 className="message">{Message}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            placeholder="Enter text..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            placeholder="Enter amount..."
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn" type="submit">
          Add transaction
        </button>
      </form>
    </div>
  );
};
