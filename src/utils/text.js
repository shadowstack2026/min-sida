// Gör om "2026-11-02T09:15:00Z" till "2 nov. 2026"
export const snyggtDatum = (datum) =>
  new Date(datum).toLocaleDateString("sv-SE", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

// Klipper en lång text och lägger till tre punkter
export const kortText = (text, max) => {
  if (text.length <= max) {
    return text;
  }
  return `${text.slice(0, max)}...`;
};

// 9.6 blir "9.6 °C"
export const grader = (temp) => `${temp} °C`;

// "Hasan Hamzi" blir "© 2026 Hasan Hamzi"
export const copyright = (namn) =>
  `© ${new Date().getFullYear()} ${namn}`;

// Ger "Visar 2 av 4 projekt"
export const antalProjekt = (antal, totalt) =>
  `Visar ${antal} av ${totalt} projekt`;

// "Hasan Hamzi" blir "Hasan"
export const fornamn = (namn) => namn.split(" ")[0];

// Ger "Lästid: 2 min" (200 ord per minut, minst 1 min)
export const lasTid = (text) => {
  const ord = text.trim().split(/\s+/).filter(Boolean).length;
  return `Lästid: ${Math.max(1, Math.ceil(ord / 200))} min`;
};

// "Hasan Hamzi" blir "HH"
export const initialer = (namn) =>
  namn
    .split(" ")
    .map((del) => del[0])
    .join("");
