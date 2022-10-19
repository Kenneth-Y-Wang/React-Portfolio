import * as React from 'react';
import classConvert from '../lib/column-class-convert';
import columnCombine from '../lib/column-combine-convert';
import strToArr from '../lib/string-to-array';

export default function Column({
  offset,
  span,
  style,
  children
}) {
  let offsetStr;
  let spanStr;
  if (!offset) {
    offsetStr = '0';
    spanStr = '12';
  }

  const columnTotal = offset ? columnCombine(offset, span) : columnCombine(offsetStr, span);
  const columnClass = offset ? classConvert(span) : classConvert(spanStr);
  const offsetClass = classConvert(offset);
  const columnCombineClass = `row ${columnTotal}`;

  return (
    <div className={columnCombineClass}>
      <div className={offsetClass} style={{ height: '100%' }}></div>
      <div className={columnClass} style={style}>
        {children}
      </div>
    </div>
  );
}
