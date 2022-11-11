import { FaHeart } from "react-icons/fa";
export interface Props {
  title: string;
}

const Footer = (props: Props) => {
  return (
    <footer className="container">
      <h3>
        <a href="/">{props.title}</a>
      </h3>
      <small>
        Made with
        {" "}
        <FaHeart style={{color: 'red'}} />
        {" "}
        by{" "}
        <a
          href="https://alexe-tech.github.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alex Burton
        </a>
      </small>
    </footer>
  );
};

Footer.defaultProps = {
  title: "Med Sec News",
};

export default Footer;
