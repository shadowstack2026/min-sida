import projekt from "../data/projekt.json";


const antal = projektLista.reduce((summa, projekt) => {
  for (const teknik of projekt.teknik) {
    summa[teknik] = (summa[teknik] || 0) + 1;
  }
  return summa;
}, {});