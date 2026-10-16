import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  const år = new Date().getFullYear(); 

  return (
    <footer className="footer">
      <p className="mail"> hasan.hamzi312@hotmail.com</p>
      <p className="mail1">© {år} Hasan Hamzi</p>
       <div className="james">
      <Link to="/">Hem</Link>
<Link to="/om-mig">Om mig</Link>
<a href="/#projekt">Projekt</a>
<a href="#kontakt">Kontakt</a>
      </div>
    </footer>
  );
}

export default Footer;
