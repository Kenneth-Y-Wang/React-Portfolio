import * as React from 'react';
import classConvert from '../lib/column-class-convert';

export default function Column({
  offset,
  span,
  style,
  children
}) {

  const columnClass = classConvert(span);
  const offsetClass = classConvert(offset);

  return (
    <div className="row">
      <div className={offsetClass}></div>
      <div className={columnClass} style={style}>
        {children}
      </div>
    </div>
  );
}
