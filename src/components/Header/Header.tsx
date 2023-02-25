import "./header.scss";
type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
