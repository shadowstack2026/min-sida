import { useState, useEffect } from "react";
import { CITIES } from "../data/cities";
import { grader } from "../utils/text";

const BAS_URL = "https://api.open-meteo.com/v1/forecast";

function CityWeather() {
  const [selectedCity, setSelectedCity] = useState(CITIES[0].namn);
  const [vader, setVader] = useState(null);
  const [fel, setFel] = useState("");

  useEffect(() => {
    const city = CITIES.find((c) => c.namn === selectedCity);
    async function hamta() {
      try {
        setFel("");
        const url = `${BAS_URL}?latitude=${city.lat}&longitude=${city.lon}&current=temperature_2m,wind_speed_10m`;
        const svar = await fetch(url);
        if (!svar.ok) {
          throw new Error("Kunde inte hämta " + city.namn);
        }
        const data = await svar.json();
        setVader({
          temp: data.current.temperature_2m,
          vind: data.current.wind_speed_10m,
        });
      } catch {
        setFel("Kunde inte hämta vädret just nu.");
      }
    }
    hamta();
  }, [selectedCity]);

  return (
    <section className="vader">
      <h2>Välj stad</h2>
      <select
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        {CITIES.map((c) => (
          <option key={c.namn} value={c.namn}>
            {c.namn}
          </option>
        ))}
      </select>
      {fel && <p role="alert">{fel}</p>}
      {vader && (
        <article className="vader-kort">
          <h3>{selectedCity}</h3>
          <p className="vader-temp">{grader(vader.temp)}</p>
          <p>Vind: {vader.vind} km/h</p>
        </article>
      )}
    </section>
  );
}

export default CityWeather;
