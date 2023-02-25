import Widget, { WidgetProps } from "./Widget";
import "./additionaldata.css";

const data: WidgetProps[] = [
  {
    value: 50,
    unit: "%",
    text: "Humidity",
  },
  {
    value: 21,
    unit: "km/h",
    text: "Wind Speed",
  },
  {
    value: 1010,
    unit: "kPa",
    text: "Pressure",
  },
];

function AdditionalData() {
  return (
    <>
      {data.map((props) => (
        <Widget
          key={props.text}
          value={props.value}
          text={props.text}
          unit={props.unit}
        />
      ))}
    </>
  );
}

export default AdditionalData;
