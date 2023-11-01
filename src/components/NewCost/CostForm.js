import "./CostForm.css";
import React, { useState } from "react";

function CostForm(props) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   name: "",
  //   amount: "",
  //   date: "",
  // });

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const costData = {
      name: name,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveCostData(costData);
    setName("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" onChange={nameChangeHandler} value={name} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={amount}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            min="2019-01-01"
            step="2024-12-31"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
          <button type="button" onClick={props.onCancelHandler}>
            Отменить
          </button>
        </div>
      </div>
    </form>
  );
}

export default CostForm;
