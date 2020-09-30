const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof(sampleActivity) !== 'string') 
    return false;

  sampleActivity = parseFloat(sampleActivity);
  if (Number.isNaN(sampleActivity) || (sampleActivity <= 0 || sampleActivity >= 15)) 
    return false;

  let result = Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.LN2 / HALF_LIFE_PERIOD);
  return Math.ceil(parseInt(result)) ;
}
