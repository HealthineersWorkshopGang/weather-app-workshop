import axios from "axios";
import { useEffect, useState } from "react";
import { GeoData, WeatherDataResponse, WeatherDataType } from "../types";

type GeoData2 = {
  lat: number;
  lon: number;
};

export const useWeatherData = () => {
  const [geoData, setGeoData] = useState<GeoData>({} as GeoData);
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);

  useEffect(() => {
    if (!geoData || geoData.lat === undefined) {
      return;
    }

    (async () => {
      //
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${geoData.lat}&lon=${geoData.lon}&appid=34e438dc5b370c540424b507096617a2`
      );
      const data = (await response.data) as WeatherDataResponse;

      setWeatherData({
        hummidity: data.main.humidity,
        icon: data.weather[0].icon,
        temperature: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        name: data.name,
      } as WeatherDataType);
    })();

    return () => {
      console.log("Unmount");
    };
  }, [geoData.lat, geoData.lon]);

  return {
    setGeoData,
    weatherData,
  };
};

// http://api.openweathermap.org/geo/1.0/direct?q=Brat&limit=15&appid=34e438dc5b370c540424b507096617a2
