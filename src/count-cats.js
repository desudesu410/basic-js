module.exports = function countCats(backyard) {
  let countCats = backyard.flat().filter(e => e === '^^').length;
  return countCats;
}
