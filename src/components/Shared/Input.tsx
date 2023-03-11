import "./input.scss";
export const Input = (props: React.HTMLProps<HTMLInputElement>) => {
  return (
    <div className="input-wrapper">
      <input type="text" {...props} />
      <span className="bar"></span>
    </div>
  );
};
