const arryExtend = arry => {
  if (arry.length === 2) {
    arry.push('tablet', arry[1], 'desktop', arry[1]);
  } else if (arry.length === 4) {
    arry.push('desktop', arry[3]);
  } else {
    return arry;
  }
  return arry;
};

export default arryExtend;
