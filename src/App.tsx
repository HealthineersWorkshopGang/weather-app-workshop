import "./App.css";
import { AdditionalData } from "./components/AdditionalData/";
import { Controls } from "./components/Controls";
import { Header } from "./components/Header";
import { WeatherData } from "./components/WeatherData";

function App() {
  return (
    <div className="App">
      <Header title="Bratislava, region of Bratislava | Slovakia" />
      <Controls />
      <WeatherData />
      <AdditionalData />
    </div>
  );
}

export default App;
