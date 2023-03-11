import { FormEvent, useState } from "react";
import { fetchWeatherData } from "../../Api/FetchWeatherData";
import { WeatherDataType } from "../../types";
import { Input } from "../Shared/Input";
import "./controls.scss";

type ControlsProps = {
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherDataType | null>>;
};

function Controls({ setWeatherData }: ControlsProps) {
  const [city, setCity] = useState<string>("");

  const handleGetWeather = (event: FormEvent) => {
    event.preventDefault();
    fetchWeatherData(city).then((data) => {
      setWeatherData(data);
    });
  };

  return (
    <div className="controls">
      <form onSubmit={handleGetWeather}>
        <Input
          type="text"
          value={city}
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            setCity(target.value)
          }
          placeholder="Write your city"
        />
      </form>
    </div>
  );
}

export default Controls;
