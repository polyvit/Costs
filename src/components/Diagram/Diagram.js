import "./Diagram.css";
import DiagramBar from "./DiagramBar";

function Diagram(props) {
  const dataSetsValues = props.dataSets.map((data) => data.value);
  const maxCost = Math.max(...dataSetsValues);
  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxCost}
          label={dataSet.label}
        />
      ))}
    </div>
  );
}

export default Diagram;
