export type WidgetProps = {
  value: number;
  text: string;
  unit: string;
};

function Widget({ value, text, unit }: WidgetProps) {
  return (
    <>
      <div>
        {value} {unit}
      </div>
      <div>{text}</div>
    </>
  );
}

export default Widget;
