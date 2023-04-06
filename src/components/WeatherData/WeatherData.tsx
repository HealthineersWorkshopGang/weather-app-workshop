import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { WeatherDataType } from "../../types";
import "./weatherdata.scss";



function WeatherData() {
  const { icon, temperature } = useSelector((state: RootState) => state.weatherData)

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "3rem" }}>{temperature} °C</p>
      <div>
        {icon && (
          <img
            src={`http://openweathermap.org/img/wn/${icon}@4x.png`}
            alt={`temperature is ${temperature} °C`}
          />
        )}
      </div>
    </div>
  );
}

export default WeatherData;
