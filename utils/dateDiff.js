const dateDiff = (d1, d2) => {
  return parseInt((d2.getTime() - d1.getTime()) / (24 * 3600 * 1000));
};

export default dateDiff;
