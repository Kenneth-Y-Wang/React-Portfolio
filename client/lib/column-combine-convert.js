import * as React from 'react';
import arryExtend from './array-extend';
import strToArr from './string-to-array';

const dataOne = 'mobile:12,tablet:1,desktop:3';
const dataTwo = 'mobile:12,tablet:8';

const columnCombine = (dataOne, dataTwo) => {

  let offsetClassArr = [];
  let spanClassArr = [];
  const columnClassArr = [];

  if (!dataOne.includes(':') && !dataOne.includes(',')) {
    offsetClassArr.push('mobile', dataOne, 'tablet', dataOne, 'desktop', dataOne);
  }

  if (!dataTwo.includes(':') && !dataTwo.includes(',')) {
    spanClassArr.push('mobile', dataTwo, 'tablet', dataTwo, 'desktop', dataTwo);
  }

  if (dataOne.includes(':') && !dataOne.includes(',')) {
    const data = dataOne.split(':');
    offsetClassArr.push('mobile', data[1], 'tablet', data[1], 'desktop', data[1]);
  }

  if (dataTwo.includes(':') && !dataTwo.includes(',')) {
    const data = dataTwo.split(':');
    spanClassArr.push('mobile', data[1], 'tablet', data[1], 'desktop', data[1]);
  }

  if (dataOne.includes(',')) {
    offsetClassArr = strToArr(dataOne);
  }

  if (dataTwo.includes(',')) {
    spanClassArr = strToArr(dataTwo);
  }

  const offsetArr = arryExtend(offsetClassArr);
  const spanArr = arryExtend(spanClassArr);

  const classMap = new Map();

  for (let i = 0; i < offsetArr.length; i++) {
    if (offsetArr[i] === 'mobile') {
      classMap.set('mobile', Number(offsetArr[i + 1]));
    }
    if (offsetArr[i] === 'tablet') {
      classMap.set('tablet', Number(offsetArr[i + 1]));
    }
    if (offsetArr[i] === 'desktop') {
      classMap.set('desktop', Number(offsetArr[i + 1]));
    }
  }

  for (let i = 0; i < spanArr.length; i++) {
    if (spanArr[i] === 'mobile') {
      classMap.set('mobile', classMap.get('mobile') + Number(spanArr[i + 1]));
    }
    if (spanArr[i] === 'tablet') {
      classMap.set('tablet', classMap.get('tablet') + Number(spanArr[i + 1]));
    }
    if (spanArr[i] === 'desktop') {
      classMap.set('desktop', classMap.get('desktop') + Number(spanArr[i + 1]));
    }
  }

  classMap.forEach((value, key) => {
    if (value >= 12) {
      columnClassArr;
    }
  });

};
