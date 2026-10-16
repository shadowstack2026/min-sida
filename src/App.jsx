import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header"; 
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Projekt from "./components/Projekt";
import Kontakt from "./components/Kontakt";

function App() {
  return (
    <>

      <Navbar />
      <Header namn="Hej" />
      <Hero namn="Hasan" />
      <Projekt />
      <Kontakt />
      <Footer />
    </>
  );
}

export default App;
