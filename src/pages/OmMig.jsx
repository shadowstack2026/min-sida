import { useState } from "react";
import "./OmMig.css";
import bild4 from "../assets/avatar.jpg";
import { lasTid } from "../utils/text";

const INTRO = `Jag heter Hasan och går på Tech School, där jag lär mig att bygga för
webben. Den här sidan är mitt första projekt i React.`;
const MER = `Här lär jag mig att bygga sidor med komponenter och att spara min
kod på GitHub.`;

function OmMig() {
  // false = den extra texten är dold från början
  const [visaMer, setVisaMer] = useState(false);

  return (
    <section className="om-mig" id="om-mig">
      <img
        className="om-mig-bild"
        src={bild4}
        alt="Illustrerat porträtt av Hasan."
      />

      <div className="om-mig-innehall">
        <h2>Om mig</h2>
        <p className="om-mig-lasTid">{lasTid(`${INTRO} ${MER}`)}</p>
        <p className="om-mig-text">{INTRO}</p>

        {/* Syns bara när visaMer är true */}
        {visaMer && <p className="om-mig-text">{MER}</p>}

        <button
          className="las-mer-knapp"
          onClick={() => setVisaMer(!visaMer)}
          aria-expanded={visaMer}
        >
          {visaMer ? "Visa mindre" : "Läs mer om mig"}
        </button>

        <h3>Det här lär jag mig i kursen</h3>
        <ul className="om-mig-lista">
          <li>React</li>
          <li>JavaScript</li>
          <li>REST API</li>
        </ul>
      </div>
    </section>
  );
}

export default OmMig;