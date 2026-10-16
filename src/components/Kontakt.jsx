import Knapp from './Knapp';

function Kontakt() {
  return (
    <section id="kontakt">
      <h2>Kontakta mig</h2>
      <p>Vill du veta mer? Skicka ett mejl så hör jag av mig!</p>
      <Knapp text="Skicka mejl" lank="mailto:hasan.hamzi312@hotmail.com" />
    </section>
  );
}

export default Kontakt;