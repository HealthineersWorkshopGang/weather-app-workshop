import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setLocations } from "../features/weather/locationsSlice";
import { Location } from "../types";
import { API_KEY } from "./secrets";

export const useLocation = () => {
  const city = useSelector((state: RootState) => state.locations.city);
  const dispatch = useDispatch();

  const getLocalStorageData = (key: string) => {
    const data = localStorage.getItem(key);
    if (!data) {
      return {};
    }

    return JSON.parse(data);

  }


  useEffect(() => {
    if (!city) {
      return;
    }

    const locationData = localStorage.getItem(city);
    const lData = getLocalStorageData("fetchedGeoData");
    if (lData && lData[city]) {
      const data = JSON.parse(lData[city]);
      dispatch(setLocations(data));
      return;
    }


    (async () => {
      const response = await axios.get(buildLocationUrl(city).toString());
      const data: Location[] = await response.data;
      dispatch(setLocations(data));

      localStorage.setItem("fetchedGeoData", JSON.stringify({
        ...getLocalStorageData("fetchedGeoData"),
        [city]: JSON.stringify(data)
      }))
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
