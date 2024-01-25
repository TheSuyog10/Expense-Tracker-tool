// Balance.js
import React from "react";

export const Balance = ({ total }) => {
  return (
    <div className="container">
      <h4>Your Balance</h4>
      <h1 id="balance">Rs. {total}</h1>
    </div>
  );
};
