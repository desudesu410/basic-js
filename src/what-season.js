module.exports = function getSeason(date) {
  if (isNaN(date)) return 'Unable to determine the time of year!';
  let month = date.getUTCMonth(); 
  if (month <= 1 || month === 11) 
    return 'winter';
  if (month >= 2 && month <= 4)
    return 'spring';
  if (month >= 5 && month <= 7) 
    return 'summer';
  if (month >= 8 && month <= 10) 
    return 'fall';
}



