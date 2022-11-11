export interface Props {
  title: string;
}

const Header = (props: Props) => {
  return (
    <header id="top-o-page" className="container">
      <h2>
        <a href="/">{props.title}</a>
      </h2>
    </header>
  );
};

Header.defaultProps = {
  title: "Med Sec News",
};

export default Header;
