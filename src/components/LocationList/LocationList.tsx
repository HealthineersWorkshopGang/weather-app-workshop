import { GeoData, Location } from "../../types";

type LocationListProps = {
    locations: Location[];
    setGeoData: React.Dispatch<React.SetStateAction<GeoData>>
}

function prettyLocationName(location: Location) {
    return `${location.name} | ${location.state} - ${location.country}`;
}

export const LocationList = ({ locations, setGeoData }: LocationListProps) => {

    function onHandleLocationSelect(location: Location) {
        console.log(location.lat, location.lon);
        setGeoData({
            lat: location.lat,
            lon: location.lon
        });
    }

    return (
        <ul>
            {
                locations.map((location: Location, index) => (
                    <li key={index} onClick={() => onHandleLocationSelect(location)}>
                        {
                            prettyLocationName(location)
                        }
                    </li>
                ))
            }
        </ul>
    )
}