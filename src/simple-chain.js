const chainMaker = {
  values:[],
  getLength() {
    return this.values.length;
  },
  addLink(value) {
      this.values.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof(position) !== 'number' || position > (this.values.length - 1) || !Number.isInteger(position)) {
       this.values = [];
       throw new Error('Error');
    }
    this.values.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.values.reverse();
    return this;
  },
  finishChain() {
    let result = this.values.join('~~');
    this.values = [];
    return result;
  }
};

module.exports = chainMaker;
