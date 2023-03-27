import { Input } from "../Shared/Input";
import "./controls.scss";

type ControlsProps = {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
};

function Controls({ setCity, city }: ControlsProps) {
  return (
    <div className="controls">
      <form>
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
