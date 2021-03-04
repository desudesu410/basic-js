module.exports = class DepthCalculator {
  calculateDepth(array, depth = 1) {
    let currentDepth = depth;
      array.forEach(element => {
        if (Array.isArray(element)) {
          let depthCheck = this.calculateDepth(element, currentDepth + 1);
          if (depthCheck > depth)
            depth = depthCheck;
        }
      });
    return  depth;
  }
};