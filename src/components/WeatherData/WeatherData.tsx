import { WeatherDataType } from "../../types";
import "./weatherdata.scss";

type WeatherDataProps = Pick<WeatherDataType, "temperature" | "icon">;

function WeatherData({ icon, temperature }: WeatherDataProps) {
  console.log(temperature);

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
