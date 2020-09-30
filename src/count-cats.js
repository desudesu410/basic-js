module.exports = function countCats(backyard) {
  let cats = 0;
  backyard.forEach (backyardRow => {
    backyardRow.forEach (backyardElement => {
    if (backyardElement === '^^') 
      cats += 1 ;    
    });
  });
  return cats;
};
