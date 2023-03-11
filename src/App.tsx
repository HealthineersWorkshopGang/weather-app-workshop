import { useState } from "react";
import "./App.scss";
import { AdditionalData } from "./components/AdditionalData/";
import { Controls } from "./components/Controls";
import { Header } from "./components/Header";
import { WeatherData } from "./components/WeatherData";
import { WeatherDataType } from "./types";

function App() {
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);

  return (
    <div className="App">
      <Header title={weatherData?.name || "City was not set"} />
      <Controls setWeatherData={setWeatherData} />
      <WeatherData />
      <AdditionalData weatherData={weatherData} />
    </div>
  );
}

export default App;
