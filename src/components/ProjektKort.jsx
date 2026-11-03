import "./ProjektKort.css";

function ProjektKort({ titel, text, bild, lank, teknik = [] }) {
  return (
    <article className="projekt-kort">
      <img className="projekt-bild" src={bild} alt="" />
      <div className="projekt-info">
        <h3>{titel}</h3>
        <p>{text}</p>

        <ul className="projekt-taggar">
          {teknik.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <a className ="projekt-knapp" href={lank}>
          Se Projekt
        </a>
      </div>
    </article>
  );
}

export default ProjektKort;