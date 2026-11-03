import './Navbar.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [oppen, setOppen] = useState(false);

  return (
    <nav className="navbar">
      <span className="logo">Tech School</span>
      <button
        className="hamburgare"
        aria-label="Meny"
        aria-expanded={oppen}
        onClick={() => setOppen(!oppen)}
      >
        ☰
      </button>
      <div className={oppen ? 'lankar oppen' : 'lankar'} onClick={() => setOppen(false)}>
        <NavLink to="/" end>Hem</NavLink>
        <NavLink to="/om-mig">Om mig</NavLink>
        <NavLink to="/projekt">Projekt</NavLink>
        <NavLink to="/kontakt">Kontakt</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
