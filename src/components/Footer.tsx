export interface Props {
  title: string;
}

const Footer = (props: Props) => {
  return (
    <footer className="container">
      <h3>
        <a href="/">{props.title}</a>
      </h3>
      <small>Made with love by <a href="https://alexe-tech.github.io">Alex Burton</a></small>
    </footer>
  );
};

Footer.defaultProps = {
  title: "Medcrypt News",
};

export default Footer;
