import { useSelector } from "react-redux";
import "./header.scss";
import { RootState } from "../../app/store";


function Header() {
  const { name: title } = useSelector((state: RootState) => state.weatherData)

  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
