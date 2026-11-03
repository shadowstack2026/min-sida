import './Navbar.css';
import { NavLink } from 'react-router-dom';



function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">Tech School</span>
      <div className="lankar">
       <NavLink to="/" end>Hem</NavLink>
<NavLink to="/om-mig">Om mig</NavLink>
<NavLink to="/projekt">Projekt</NavLink>
<NavLink to="/kontakt">kontakt</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;