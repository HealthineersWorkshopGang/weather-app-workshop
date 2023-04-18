import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setGeoData, clearLocations } from "../../features/weather/locationsSlice";
import { Location } from "../../types";
import "./LocationList.scss";


function prettyLocationName(location: Location) {
  return `${location.name} | ${location.state || ""}  ${location.state ? "-" : ""} ${location.country || ""}`;
}

export const LocationList = () => {
  const locations = useSelector((state: RootState) => state.locations.locations);
  const dispatch = useDispatch();

  function onHandleLocationSelect(location: Location) {
    console.log(location.lat, location.lon);
    dispatch(setGeoData({
      lat: location.lat,
      lon: location.lon,
    }));
    dispatch(clearLocations());
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
