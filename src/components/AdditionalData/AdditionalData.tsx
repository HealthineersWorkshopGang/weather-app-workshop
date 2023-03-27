import { WeatherDataType } from "../../types";
import "./additionaldata.scss";
import Widget, { WidgetProps } from "./Widget";

const createData = (weatherData: WeatherDataType | null) => {
  return [
    {
      value: weatherData?.hummidity || 50,
      unit: "%",
      text: "Humidity",
    },
    {
      value: weatherData?.wind || 21,
      unit: "km/h",
      text: "Wind Speed",
    },
    {
      value: weatherData?.pressure || 1010,
      unit: "kPa",
      text: "Pressure",
    },
  ] as WidgetProps[];
};

type AdditionalDataProps = {
  weatherData: WeatherDataType | null;
};

function AdditionalData({ weatherData }: AdditionalDataProps) {
  return (
    <div className="additional-data">
      {createData(weatherData).map((props) => (
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
