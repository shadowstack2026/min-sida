import "./Header.css";
import Knapp from "./Knapp";

function Header({ namn }) {
  return (
    <header className="header">
      <h1>{namn}</h1>
      <h1>Välkommen till min sida!</h1>

      <div className="header-knappar">
        <Knapp text="Se mina projekt" lank="#projekt" />
        <Knapp text="Kontakta mig" lank="#kontakt" />
      </div>
    </header>
  );
}

export default Header;