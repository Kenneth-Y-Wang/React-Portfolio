const strToArr = str => {
  const arr = [];
  const data = str.split(',');

  for (const pair of data) {
    const pairSet = pair.split(':');
    arr.push(pairSet[0], pairSet[1]);
  }

  return arr;
};

export default strToArr;
