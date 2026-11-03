import "./Projekt.css";
import ProjektKort from "./ProjektKort";
import bild1 from "../assets/hero.png";
import bild2 from "../assets/Hero2.jpg";
import bild3 from "../assets/Hero3.jpg";

// Datan – ett objekt per projekt
const projektLista = [
  {
    id: 1,
    titel: "Min portfoliosida",
    text: "Sidan du tittar på nu. Byggd med React och CSS.",
    bild: bild1,
    lank: "https://www.google.se",
    teknik: ["React", "CSS", "Git"],
  },
  {
    id: 2,
    titel: "Projekt 2",
    text: "Kommer snart.",
    bild: bild2,
    lank: "https://www.google.se",
    teknik: ["React", "useState"],
  },
  {
    id: 3,
    titel: "Projekt 3",
    text: "Kommer snart.",
    bild: bild3,
    lank: "https://hamzozi7.github.io/hasan.hamzi/",
    teknik: ["HTML", "CSS"],
  },
  {
    id: 4,
    titel: "Räknaren",
    text: "En enkel räknare byggd med useState.",
    bild: bild2,
    lank: "#",
    teknik: ["React", "useState"],
  },
];

function Projekt() {
  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt</h2>

      <div className="projekt-lista">
        {projektLista.map((p) => (
          <ProjektKort
            key={p.id}
            titel={p.titel}
            text={p.text}
            bild={p.bild}
            lank={p.lank}
            teknik={p.teknik}
          />
        ))}
      </div>
    </section>
  );
}

export default Projekt;
