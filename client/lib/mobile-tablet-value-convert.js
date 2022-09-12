const valueConvert = str => {
  const valueHolder = [];
  if (!str) {
    return valueHolder;
  }
  if (str.includes(',')) {
    const data = str.split(',');

    for (const set of data) {
      const setPair = set.split(':');
      valueHolder.push(setPair[1]);
    }
  } else {
    valueHolder.push(str, str);
  }

  return valueHolder;

};

export default valueConvert;
