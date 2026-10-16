import "./Hero.css";
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
        <a className="hero-knapp" href="#valkommen">
          Läs vidare
        </a>
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
