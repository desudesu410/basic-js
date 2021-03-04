module.exports = function repeater(str, options) {
  let resultString = [];
  let substring = [];
  let separator;
  let additionSeparator;
  let repeatTimes;
  let additionRepeatTimes;
  
  repeatTimes = typeof(options.repeatTimes) === 'number' ?  options.repeatTimes : 1;
  separator = (options.separator) ?  options.separator : '+';
  additionSeparator = (options.additionSeparator) ? options.additionSeparator : '|';
  if (typeof(options.additionRepeatTimes) === 'number'){
    additionRepeatTimes = options.additionRepeatTimes;
  } else {
    additionRepeatTimes = (options.addition) ? 1 : 0;
  } 

  for (let i = 0; i < additionRepeatTimes; i += 1) {
    substring.push(`${options.addition}`);
  }
  for (let i = 0; i < repeatTimes; i += 1) {
    resultString.push(str+substring.join(`${additionSeparator}`)) ;
  }

  return resultString.join(`${separator}`);
};
  