import { useState } from "react";
import "./App.scss";
import { AdditionalData } from "./components/AdditionalData/";
import { WidgetProps } from "./components/AdditionalData/Widget";
import { Controls, WeatherDataType } from "./components/Controls";

import { Header } from "./components/Header";
import { WeatherData } from "./components/WeatherData";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);

  const data: WidgetProps[] = [
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
  ];

  return (
    <div className="App">
      <Header title={weatherData?.name || "City was not set"} />
      <Controls setWeatherData={setWeatherData} />
      <WeatherData />
      <AdditionalData data={data} />
    </div>
  );
}

export default App;
