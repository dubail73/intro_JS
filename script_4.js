const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// 1. Filtrer les entrepreneurs nés dans les années 70
console.log("Entrepreneurs nés dans les années 70 :");
const entrepreneurs70s = entrepreneurs.filter(entrepreneur => entrepreneur.year >= 1970 && entrepreneur.year < 1980);
console.log(entrepreneurs70s);

// 2. Récupérer une array avec prénom et nom des entrepreneurs
console.log("Liste des prénoms et noms des entrepreneurs :");
const entrepreneursNames = entrepreneurs.map(entrepreneur => `${entrepreneur.first} ${entrepreneur.last}`);
console.log(entrepreneursNames);

// 3. Calculer l'âge actuel de chaque entrepreneur
console.log("Âge actuel de chaque entrepreneur :");
const currentYear = new Date().getFullYear();
const entrepreneursAges = entrepreneurs.map(entrepreneur => {
  const age = currentYear - entrepreneur.year;
  return { name: `${entrepreneur.first} ${entrepreneur.last}`, age };
});
console.log(entrepreneursAges);

// 4. Trier les entrepreneurs par ordre alphabétique du nom de famille
console.log("Entrepreneurs triés par nom de famille :");
const entrepreneursSorted = entrepreneurs.slice().sort((a, b) => a.last.localeCompare(b.last));
console.log(entrepreneursSorted);
