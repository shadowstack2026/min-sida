import Header from "../components/Header";
import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import Raknare from "../components/Raknare";


function Hem() {
  return (
    <>
      <Header namn="Hej" />
      <Hero namn="Hasan" />
     <Raknare />
      <Projekt />
    </>
  );
}

export default Hem;