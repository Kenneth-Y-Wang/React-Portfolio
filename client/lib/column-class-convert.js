const classConvert = str => {
  const classHolder = [];
  const data = str.split(',');

  for (const set of data) {
    const setPair = set.split(':');
    classHolder.push(`${setPair[0]}-col-${setPair[1]}`);
  }

  const className = classHolder.join(' ');
  return className;
};

export default classConvert;
