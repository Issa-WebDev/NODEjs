const moyen = (notes) => {
  return notes.reduce((acc, note) => acc + note / notes.length, 0);
};

const a = 10;

module.exports = { a, moyen };
