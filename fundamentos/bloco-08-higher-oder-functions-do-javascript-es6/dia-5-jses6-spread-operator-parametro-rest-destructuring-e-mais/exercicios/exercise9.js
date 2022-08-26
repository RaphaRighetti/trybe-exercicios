// yearSeasons: estações do ano.
const yearSeasons = {
  spring: ['March', 'April', 'May'],
  summer: ['June', 'July', 'August'],
  autumn: ['September', 'October', 'November'],
  winter: ['December', 'January', 'February'],
};

const putSeasonsInArray = ({ spring, summer, autumn, winter }) => [...winter, ...spring, ...summer, ...autumn];

const yearMonths = putSeasonsInArray(yearSeasons);

yearMonths.sort((a, b) => a === 'December' ? 1 : b === 'December' ? -1 : 0);

console.log(yearMonths);
