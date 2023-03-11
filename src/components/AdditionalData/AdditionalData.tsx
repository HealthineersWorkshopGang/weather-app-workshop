import Widget, { WidgetProps } from "./Widget";
import "./additionaldata.scss";



type AdditionalDataProps = {
  data: WidgetProps[]
}

function AdditionalData({ data }: AdditionalDataProps) {
  return (
    <div className="additional-data">
      {data.map((props) => (
        <Widget
          key={props.text}
          value={props.value}
          text={props.text}
          unit={props.unit}
        />
      ))}
    </div>
  );
}

export default AdditionalData;
