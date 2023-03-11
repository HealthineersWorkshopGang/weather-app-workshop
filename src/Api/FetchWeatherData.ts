import axios from "axios";
import { WeatherDataResponse, WeatherDataType } from "../types";

export const fetchWeatherData = async (
  city: string
): Promise<WeatherDataType> => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e47c276a846941e96f7f565c1cc00411`
  );
  const data: WeatherDataResponse = await response.data;

  return {
    hummidity: data.main.humidity,
    icon: data.weather[0].icon,
    temperature: data.main.temp,
    pressure: data.main.pressure,
    wind: data.wind.speed,
    name: data.name,
  } as WeatherDataType;
};
