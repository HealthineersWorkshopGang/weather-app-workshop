import axios from "axios";
import { useState } from "react";
import { WeatherDataResponse, WeatherDataType } from "../../types";
import "./controls.scss";

const fetchWeatherData = async (city: string): Promise<WeatherDataType> => {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e47c276a846941e96f7f565c1cc00411`)
  const data: WeatherDataResponse = await response.data;

  const weather: WeatherDataType = {
    hummidity: data.main.humidity,
    icon: data.weather[0].icon,
    temperature: data.main.temp,
    pressure: data.main.pressure,
    wind: data.wind.speed,
    name: data.name
  }
  return weather;

}

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
