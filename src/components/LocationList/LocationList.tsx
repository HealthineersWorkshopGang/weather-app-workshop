import { GeoData, Location } from "../../types";
import "./LocationList.scss";

type LocationListProps = {
  locations: Location[];
  setGeoData: React.Dispatch<React.SetStateAction<GeoData>>;
};

function prettyLocationName(location: Location) {
  return `${location.name} | ${location.state} - ${location.country}`;
}

export const LocationList = ({ locations, setGeoData }: LocationListProps) => {
  function onHandleLocationSelect(location: Location) {
    console.log(location.lat, location.lon);
    setGeoData({
      lat: location.lat,
      lon: location.lon,
    });
  }

  return (
    <div className="location-list">
      <ul>
        {locations.map((location: Location, index) => (
          <li key={index}>
            <button onClick={() => onHandleLocationSelect(location)}>
              {prettyLocationName(location)}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
