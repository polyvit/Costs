import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
  {
    id: "c1",
    date: new Date(2023, 5, 26),
    name: "Холодильник",
    amount: 999.99,
  },
  {
    id: "c2",
    date: new Date(2022, 2, 16),
    name: "Макбук",
    amount: 1254.72,
  },
  {
    id: "c3",
    date: new Date(2023, 3, 6),
    name: "Джинсы",
    amount: 49.99,
  },
];

function App() {
  const [costs, setCosts] = useState(INITIAL_COSTS);
  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };
  return (
    <div className="App">
      <NewCost onAddCost={addCostHandler} />
      <Costs data={costs} />
    </div>
  );
}

export default App;
