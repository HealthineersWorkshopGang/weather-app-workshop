import { useLocation } from "./Api/useLocation";
import { useWeatherData } from "./Api/useWeatherData";
import "./App.scss";
import { AdditionalData } from "./components/AdditionalData/";
import { Controls } from "./components/Controls";
import { Header } from "./components/Header";
import { LocationList } from "./components/LocationList";
import { WeatherData } from "./components/WeatherData";

function App() {
  const { city, setCity, locations } = useLocation();
  const { setGeoData, weatherData } = useWeatherData();

  return (
    <div className="App">
      <Header title={weatherData?.name || "City was not set"} />
      <Controls city={city} setCity={setCity} />
      <LocationList locations={locations} setGeoData={setGeoData} />
      <WeatherData />
      <AdditionalData weatherData={weatherData} />
    </div>
  );
}

export default App;
