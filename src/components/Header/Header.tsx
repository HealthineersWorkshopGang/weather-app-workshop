import "./header.scss";
type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  return <div className="header">{title}</div>;
}

export default Header;
