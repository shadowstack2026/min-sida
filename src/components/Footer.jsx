import "./Footer.css";
import { Link } from "react-router-dom";
import { copyright } from "../utils/text";

function Footer() {

  return (
    <footer className="footer">
      <p className="mail"> hasan.hamzi312@hotmail.com</p>
      <p className="mail1">{copyright("Hasan Hamzi")}</p>
       <div className="james">
      <Link to="/">Hem</Link>
<Link to="/om-mig">Om mig</Link>
<a href="/#projekt">Projekt</a>
<Link to="/kontakt">kontakt</Link>
      </div>
    </footer>
  );
}

export default Footer;
