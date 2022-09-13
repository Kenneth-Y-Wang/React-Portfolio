const classConvert = str => {
  const classHolder = [];

  if (!str) {
    return;
  }
  if (str.includes(',')) {
    const data = str.split(',');

    for (const set of data) {
      const setPair = set.split(':');
      classHolder.push(`${setPair[0]}-col-${setPair[1]}`);
    }
  } else {
    classHolder.push(`mobile-col-${str}`);
  }

  const className = classHolder.join(' ');
  return className;
};

export default classConvert;
