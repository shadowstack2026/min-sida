import { useState } from 'react';
import './Kontakt.css';

function Kontakt() {
  const [namn, setNamn] = useState('');
  const [epost, setEpost] = useState('');
  const [meddelande, setMeddelande] = useState('');
  const [fel, setFel] = useState('');
  const [skickat, setSkickat] = useState(false);
  const [skickar, setSkickar] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (namn.trim() === '' || epost.trim() === '' || meddelande.trim() === '') {
      setFel('Fyll i alla fält.');
      return;
    }

    if (!epost.includes('@')) {
      setFel('E-postadressen ser inte rätt ut.');
      return;
    }

    setFel('');
    setSkickar(true); // knappen visar "Skickar..."

    try {
      const svar = await fetch('https://formspree.io/f/xzeekljl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ namn, email: epost, meddelande }),
      });

      if (svar.ok) {
        setSkickat(true);
      } else {
        setFel('Något gick fel. Försök igen om en stund.');
      }
    } catch {
      // hit kommer vi om internet är nere
      setFel('Kunde inte skicka. Kolla din internetanslutning.');
    } finally {
      setSkickar(false); // körs alltid, oavsett hur det gick
    }
  }

  return (
    <section className="kontakt" id="kontakt">
      {/* Vänster kolumn: text */}
      <div className="kontakt-info">
        <h2>Kontakta mig</h2>
        <p>Har du en fråga? Skriv ett meddelande!</p>
      </div>

      {/* Höger kolumn: formuläret */}
      {skickat ? (
        <p>Tack för ditt meddelande, {namn}!</p>
      ) : (
        <form className="kontakt-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="namn">Namn</label>
          <input
            type="text"
            id="namn"
            placeholder="Ditt namn"
            value={namn}
            onChange={(e) => setNamn(e.target.value)}
          />

          <label htmlFor="epost">E-post</label>
          <input
            type="email"
            id="epost"
            placeholder="namn@exempel.se"
            value={epost}
            onChange={(e) => setEpost(e.target.value)}
          />

          <label htmlFor="meddelande">Meddelande</label>
          <textarea
            id="meddelande"
            rows="5"
            value={meddelande}
            onChange={(e) => setMeddelande(e.target.value)}
          />

          {fel && <p role="alert">{fel}</p>}

          <button type="submit" disabled={skickar}>
            {skickar ? 'Skickar...' : 'Skicka'}
          </button>
        </form>
      )}
    </section>
  );
}

export default Kontakt;
