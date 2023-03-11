import { useState } from "react";
import { fetchWeatherData } from "../../Api/FetchWeatherData";
import { WeatherDataType } from "../../types";
import { Input } from "../Shared/Input";
import "./controls.scss";

type ControlsProps = {
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherDataType | null>>;
};

function Controls({ setWeatherData }: ControlsProps) {
  const [city, setCity] = useState<string>("");

  const handleGetWeather = () => {
    fetchWeatherData(city).then((data) => {
      setWeatherData(data);
    });
  };

  return (
    <div className="controls">
      <Input
        type="text"
        value={city}
        onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
          setCity(target.value)
        }
        placeholder="Write your city"
      />
      <button onClick={handleGetWeather}>Get weather</button>
    </div>
  );
}

export default Controls;
