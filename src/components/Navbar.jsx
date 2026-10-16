import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">Tech School</span>
      <div className="lankar">
        <a href="#">Hem</a>
        <a href="#om-mig">Om mig</a>
        <a href="#projekt">Projekt</a>
        <a href="#kontakt">Kontakt</a>
      </div>
    </nav>
  );
}

export default Navbar;