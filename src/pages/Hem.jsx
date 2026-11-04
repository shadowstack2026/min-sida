import Header from "../components/Header";
import Hero from "../components/Hero";
import Projekt from "../components/Projekt";
import GitHubRepon from "../components/GitHubRepon";
import Vader from "../components/Vader";
import { NAME } from "../data/Settings";
import { fornamn } from "../utils/text";


function Hem() {
  return (
    <> 
      <Header namn="Hej" />
      <Hero namn={fornamn(NAME)} />
      <Projekt />
      <GitHubRepon />
      <Vader />
    </>
  );
}

export default Hem;