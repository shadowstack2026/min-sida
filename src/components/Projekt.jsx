// FREDAG v43: listor & .map() – projektkorten skapas automatiskt från en lista med data
// TORSDAG v44: datan ligger i en JSON-fil, och listan går att filtrera och söka i
//
// Idén: skilj på DATAN (vad som står på korten) och LAYOUTEN (hur ett kort ser ut).
// Datan ligger i src/data/projekt.json, layouten finns en enda gång i ProjektKort.jsx.

import "./Projekt.css";
import { useState } from "react";
import ProjektKort from "./ProjektKort";
import { antalProjekt } from "../utils/text";
// En JSON-fil importeras precis som en JS-fil – Vite gör om den till en vanlig array
import projektLista from "../data/projekt.json";
// En bild importeras som en variabel – Vite ger oss rätt sökväg till filen
import bild1 from "../assets/hero.png";
import bild2 from "../assets/Hero2.jpg";
import bild3 from "../assets/Hero3.jpg";

// JSON kan bara innehålla data, inte variabler. Därför står bilden som en sträng
// i projekt.json ("hero.png"), och här slår vi upp vilken importerad bild den betyder.
const bilder = {
  "hero.png": bild1,
  "Hero2.jpg": bild2,
  "Hero3.jpg": bild3,
};

// Knapparna ovanför korten – "Alla" visar allt
const filterLista = ["Alla", "React", "CSS", "HTML", "useState", "Git"];

function Projekt() {
  // Vilken filterknapp är vald, och vad står i sökrutan?
  const [vald, setVald] = useState("Alla");
  const [sok, setSok] = useState("");
  const [sortering, setSortering] = useState("standard");

  // .filter() går igenom listan och behåller bara de projekt där vi svarar true.
  // Den nya listan räknas ut på nytt varje gång state ändras – den behöver inget eget state.
  const synligaProjekt = projektLista.filter((p) => {
    const rattTeknik = vald === "Alla" || p.teknik.includes(vald);
    const rattSok = p.titel.toLowerCase().includes(sok.toLowerCase());
    return rattTeknik && rattSok; // båda måste stämma
  });

  const sorteradeProjekt = [...synligaProjekt];

  if (sortering === "titel") {
    sorteradeProjekt.sort((a, b) => a.titel.localeCompare(b.titel, "sv"));
  } else if (sortering === "tekniker") {
    sorteradeProjekt.sort((a, b) => b.teknik.length - a.teknik.length);
  }

  return (
    <section className="projekt" id="projekt">
      <h2>Mina projekt</h2>

      <div className="projekt-filter">
        {filterLista.map((f) => (
          <button
            key={f}
            className={f === vald ? "filter-knapp aktiv" : "filter-knapp"}
            onClick={() => setVald(f)}
            aria-pressed={f === vald}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Samma kontrollerade input som i kontaktformuläret */}
      <label className="projekt-sok">
        Sök projekt
        <input
          type="search"
          value={sok}
          onChange={(e) => setSok(e.target.value)}
          placeholder="t.ex. räknare"
        />
      </label>

      <label className="projekt-sok">
        Sortera
        <select value={sortering} onChange={(e) => setSortering(e.target.value)}>
          <option value="standard">Standard</option>
          <option value="titel">Titel (A–Ö)</option>
          <option value="tekniker">Flest tekniker först</option>
        </select>
      </label>

      <p className="projekt-antal">
        {antalProjekt(synligaProjekt.length, projektLista.length)}
      </p>

      {/* Tom lista? Visa ett meddelande istället för ingenting */}
      {synligaProjekt.length === 0 ? (
        <p className="projekt-tom">Inga projekt matchar. Prova ett annat filter.</p>
      ) : (
        <div className="projekt-lista">
          {/* .map() går igenom listan och gör ett ProjektKort för varje projekt p.
              Läs det som: "för varje projekt p – gör ett kort med p:s titel, text..."
              Vanliga parenteser ( ) efter => returnerar JSX:en automatiskt.
              Med måsvingar { } måste man skriva return – annars syns inga kort! */}
          {sorteradeProjekt.map((p) => (
            <ProjektKort
              // key = Reacts "namnbricka" så den kan hålla isär korten.
              // Den ska vara unik och sitta på det yttersta elementet i map:en.
              key={p.id}
              id={p.id}
              titel={p.titel}
              text={p.text}
              bild={bilder[p.bild]}
              lank={p.lank}
              teknik={p.teknik}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Projekt;
