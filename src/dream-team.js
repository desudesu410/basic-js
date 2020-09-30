module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) 
    return false;

  let result = '';
  members.forEach(member => {
  if (typeof(member) === 'string')
    result += member[member.search(/\w/)].toUpperCase();
  });
return result.split('').sort().join('');
};
