import Widget, { WidgetProps } from "./Widget";
import "./additionaldata.scss";

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
    <div className="additional-data">
      {data.map((props) => (
        <Widget
          key={props.text}
          value={props.value}
          text={props.text}
          unit={props.unit}
        />
      ))}
    </div>
  );
}

export default AdditionalData;
