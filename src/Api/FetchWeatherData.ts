import axios from "axios";
import { WeatherDataResponse, WeatherDataType } from "../types";
import { API_KEY } from "./secrets";

export const fetchWeatherData = async (
  city: string
): Promise<WeatherDataType> => {
  const response = await axios.get(buildUrl(city).toString());
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

function buildUrl(city: string): URL {
  const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  url.searchParams.set("q", city);
  url.searchParams.set("appid", API_KEY);
  return url;
}
