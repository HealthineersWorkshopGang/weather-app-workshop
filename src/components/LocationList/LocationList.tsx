import { useSelector } from "react-redux";
import { GeoData, Location } from "../../types";
import "./LocationList.scss";
import { RootState } from "../../app/store";

type LocationListProps = {
  setGeoData: React.Dispatch<React.SetStateAction<GeoData>>;
};

function prettyLocationName(location: Location) {
  return `${location.name} | ${location.state} - ${location.country}`;
}

export const LocationList = ({ setGeoData }: LocationListProps) => {
  const locations = useSelector((state: RootState) => state.locations.locations);

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
