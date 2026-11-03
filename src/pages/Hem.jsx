import Header from "../components/Header";
import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import GitHubRepon from "../components/GitHubRepon";


function Hem() {
  return (
    <> 
      <Header namn="Hej" />
      <Hero namn="Hasan" />
      <Projekt />
      <GitHubRepon />
    </>
  );
}

export default Hem;