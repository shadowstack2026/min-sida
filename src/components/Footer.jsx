import "./Footer.css";
import { Link } from "react-router-dom";
import { copyright } from "../utils/text";
import { NAME, EMAIL, GITHUB_USER } from "../data/Settings";

function Footer() {

  return (
    <footer className="footer">
      <p className="mail"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
      <p className="mail1">{copyright(NAME)}</p>
       <div className="james">
      <Link to="/">Hem</Link>
<Link to="/om-mig">Om mig</Link>
<a href="/#projekt">Projekt</a>
<Link to="/kontakt">kontakt</Link>
<a href={`https://github.com/${GITHUB_USER}`}>GitHub</a>
      </div>
    </footer>
  );
}

export default Footer;
