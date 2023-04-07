import { useSelector } from "react-redux";
import { useLocation } from "./Api/useLocation";
import { useWeatherData } from "./Api/useWeatherData";
import "./App.scss";
import { AdditionalData } from "./components/AdditionalData/";
import { Controls } from "./components/Controls";
import { Header } from "./components/Header";
import { LocationList } from "./components/LocationList";
import { WeatherData } from "./components/WeatherData";
import { isWeatherDataFetched } from "./features/weather/weatherDataSlice";

function App() {
  useLocation();
  useWeatherData();

  const isWeatherDataAvailable = useSelector(isWeatherDataFetched);

  return (
    <div className="App">
      <Header />
      <Controls />
      <LocationList />

      {isWeatherDataAvailable && (
        <>
          <WeatherData />
          <AdditionalData />
        </>
      )}
    </div>
  );
}

export default App;
