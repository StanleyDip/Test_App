import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);
  const [amount, setAmount]=useState(props.amount);

  const clickHandler = () => {
    //function clickHandler(){}
    setTitle('Updated!');
    setAmount('XXX.XX');
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Change the title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
