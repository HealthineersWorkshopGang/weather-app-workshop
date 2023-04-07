import axios from "axios";
import { useEffect, useState } from "react";
import { GeoData, WeatherDataResponse, WeatherDataType } from "../types";
import { API_KEY } from "./secrets";
import { useDispatch, useSelector } from "react-redux";
import { setWeatherData } from "../features/weather/weatherDataSlice";
import { RootState } from "../app/store";

type GeoData2 = {
  lat: number;
  lon: number;
};

export const useWeatherData = () => {
  const geoData = useSelector((state: RootState) => state.locations.geoData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!geoData || geoData.lat === undefined) {
      return;
    }

    (async () => {
      //
      const response = await axios.get(buildWeatherDataUrl(geoData).toString());
      const data = (await response.data) as WeatherDataResponse;

      dispatch(setWeatherData({
        hummidity: data.main.humidity,
        icon: data.weather[0].icon,
        temperature: data.main.temp,
        pressure: data.main.pressure,
        wind: data.wind.speed,
        name: data.name,
      } as WeatherDataType))
    })();

    return () => {
      console.log("Unmount");
    };
  }, [geoData.lat, geoData.lon]);
};

function buildWeatherDataUrl(geoData: GeoData): URL {
  const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  url.searchParams.set("lat", String(geoData.lat));
  url.searchParams.set("lon", String(geoData.lon));
  url.searchParams.set("units", "metric");
  url.searchParams.set("appid", API_KEY);
  return url;
}

// http://api.openweathermap.org/geo/1.0/direct?q=Brat&limit=15&appid=34e438dc5b370c540424b507096617a2
