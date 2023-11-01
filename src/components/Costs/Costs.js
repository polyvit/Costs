import "./Costs.css";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostList from "./CostList";
import CostsDiagram from "./CostsDiagram";

function Costs(props) {
  const [year, setYear] = useState("2023");
  const changeYearHandler = (yearValue) => {
    setYear(yearValue);
  };
  const filteredCosts = props.data.filter((cost) => {
    return cost.date.getFullYear().toString() === year;
  });

  return (
    <Card className="costs">
      <CostsFilter onChangeYear={changeYearHandler} year={year} />
      <CostsDiagram costs={filteredCosts} />
      <CostList costs={filteredCosts} />
    </Card>
  );
}

export default Costs;
