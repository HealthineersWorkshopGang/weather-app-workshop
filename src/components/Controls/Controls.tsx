import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { setCity } from "../../features/weather/locationsSlice";
import { Input } from "../Shared/Input";
import "./controls.scss";



function Controls() {
  const city = useSelector((state: RootState) => state.locations.city);
  const dispatch = useDispatch();

  return (
    <div className="controls">
      <form>
        <Input
          type="text"
          value={city}
          onChange={({ target }: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(setCity(target.value))
          }
          placeholder="Write your city"
        />
      </form>
    </div>
  );
}

export default Controls;
