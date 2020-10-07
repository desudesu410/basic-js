class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type 
  }

  newKey(key, str) {
    key = key.toUpperCase();
    let newKey='';
    for(let i = 0, j=0; i < str.length; i++) {
      if (str[i].match(/[A-Z]/)){
        newKey += key[j]
        j = (j !== key.length - 1) ? j+1: 0;
      } else {
        newKey += str[i];
      }
    }
    key = newKey;
    return key;
  }

  vigenereSquare(alphabet) {
    const table = [];
    let tableRow =  alphabet;
    for (let i = 0; i < alphabet.length; i++) {
      table.push(tableRow.split(''))
      tableRow =  tableRow.slice(1, alphabet.length) + tableRow[0]; 
    }
    return table;
  }

  encrypt(str, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const table = this.vigenereSquare(alphabet);
    let result = '';
    str = str.toUpperCase();
    key = this.newKey(key, str);
    
    for (let i = 0; i < str.length; i++){
      if (str[i].match(/[A-Z]/)){
        result += table[alphabet.indexOf(str[i])][alphabet.indexOf(key[i])];
      } else {
        result += str[i];
      }
    }
  
    return this.type ? result : result.split('').reverse().join('');
  }

  decrypt(str, key) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const table = this.vigenereSquare(alphabet);
    let result = '';
    str = str.toUpperCase();
    key = this.newKey(key, str);

    for (let i = 0; i < str.length; i++){
      if (str[i].match(/[A-Z]/)){
      result += alphabet[table[alphabet.indexOf(key[i])].indexOf(str[i])]
      } else {
        result += str[i];
      }
    }

    return this.type ?  result : result.split('').reverse().join('');
  }
}
module.exports = VigenereCipheringMachine;
