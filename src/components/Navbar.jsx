import './Navbar.css';
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">Tech School</span>
      <div className="lankar">
       <Link to="/">Hem</Link>
<Link to="/om-mig">Om mig</Link>
<a href="/#projekt">Projekt</a>
<a href="#kontakt">Kontakt</a>
      </div>
    </nav>
  );
}

export default Navbar;