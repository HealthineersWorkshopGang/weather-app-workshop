import axios from "axios";
import { useEffect, useState } from "react";
import { Location } from "../types";
import { API_KEY } from "./secrets";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setLocations } from "../features/weather/locationsSlice";

export const useLocation = () => {
  const city = useSelector((state: RootState) => state.locations.city);
  const dispatch = useDispatch();


  useEffect(() => {
    if (!city) {
      return;
    }

    (async () => {
      const response = await axios.get(buildLocationUrl(city).toString());
      const data: Location[] = await response.data;
      dispatch(setLocations(data));
    })();
  }, [city]);

};

function buildLocationUrl(city: string): URL {
  const url = new URL("http://api.openweathermap.org/geo/1.0/direct");
  url.searchParams.set("q", city);
  url.searchParams.set("appid", API_KEY);
  url.searchParams.set("limit", "5");
  return url;
}

// http://api.openweathermap.org/geo/1.0/direct?q=Brat&limit=15&appid=34e438dc5b370c540424b507096617a2
