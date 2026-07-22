exports.calculateGap = (
    current,
    required
  ) => {
    return required - current;
  };
  
  exports.calculateReadiness = (
    current,
    required
  ) => {
    return Math.round(
      (current / required) * 100
    );
  };