import "./Hero.css";
import { Link } from "react-router-dom";
import heroBild from "../assets/Hero1.jpg";


function Hero({ namn }) {
  return (
    <section className="hero" aria-labelledby="hero-titel">
      <div className="hero-innehall">
        <p className="hero-intro">Hej, jag heter {namn}!</p>
        <h2 id="hero-titel">Jag lär mig att bygga för webben.</h2>
        <p className="hero-text">
          Välkommen till min portfolio. Här delar jag det jag lär mig och skapar
          med HTML, CSS och React.
        </p>
        <Link className="hero-knapp" to="/projekt">
          Se mina projekt
        </Link>
      </div>
      <img
        className="hero-bild"
        src={heroBild}
        alt="Ett rosa träd över ett fantasilandskap med berg, moln och lava i solnedgången."
        width="2880"
        height="1800"
      />
    </section>
  );
}

export default Hero;
