import "./NewCost.css";
import CostForm from "./CostForm";
import React, { useState } from "react";

function NewCost(props) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
  };
  const buttonAddCostHandler = () => {
    setIsFormVisible(true);
  };
  const cancelAddCostHandler = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="new-cost">
      {isFormVisible ? (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancelHandler={cancelAddCostHandler}
        />
      ) : (
        <button onClick={buttonAddCostHandler}>Добавить новый расход</button>
      )}
    </div>
  );
}

export default NewCost;
