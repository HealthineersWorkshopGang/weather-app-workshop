import { useState } from "react";
import { fetchWeatherData } from "../../Api/FetchWeatherData";
import { WeatherDataType } from "../../types";
import "./controls.scss";



type ControlsProps = {
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherDataType | null>>
}


function Controls({ setWeatherData }: ControlsProps) {
  const [city, setCity] = useState<string>("");

  const handleGetWeather = () => {
    fetchWeatherData(city).then(data => {
      setWeatherData(data);
    });
  }

  return (<div className="controls">
    <input type="text" value={city} onChange={({ target }) => setCity(target.value)} />
    <button onClick={handleGetWeather}>Get weather</button>
  </div>);
}

export default Controls;
