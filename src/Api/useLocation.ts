import axios from "axios";
import { useEffect, useState } from "react";
import { Location } from "../types";

export const useLocation = () => {
    const [city, setCity] = useState<string>("");
    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
        if (!city) {
            return;
        }

        (async () => {
            const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=15&appid=34e438dc5b370c540424b507096617a2`)
            const data: Location[] = await response.data;
            setLocations(data);
        })()
    }, [city]);

    return {
        city, setCity, locations
    }

}

// http://api.openweathermap.org/geo/1.0/direct?q=Brat&limit=15&appid=34e438dc5b370c540424b507096617a2