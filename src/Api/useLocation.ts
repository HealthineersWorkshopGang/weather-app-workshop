import axios from "axios";
import { useEffect, useState } from "react";
import { Location } from "../types";
import { API_KEY } from "./secrets";

export const useLocation = () => {
  const [city, setCity] = useState<string>("");
  const [locations, setLocations] = useState<Location[]>([]);

  useEffect(() => {
    if (!city) {
      return;
    }

    (async () => {
      const response = await axios.get(buildLocationUrl(city).toString());
      const data: Location[] = await response.data;
      setLocations(data);
    })();
  }, [city]);

  return {
    city,
    setCity,
    locations,
  };
};

function buildLocationUrl(city: string): URL {
  const url = new URL("http://api.openweathermap.org/geo/1.0/direct");
  url.searchParams.set("q", city);
  url.searchParams.set("appid", API_KEY);
  return url;
}

// http://api.openweathermap.org/geo/1.0/direct?q=Brat&limit=15&appid=34e438dc5b370c540424b507096617a2
