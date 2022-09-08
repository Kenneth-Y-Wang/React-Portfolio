import * as React from 'react';

export default function Column({
  offset,
  span,
  children
}) {

  return (
    <div className="row">
      <div className=""></div>
      <div className="">
        {children}
      </div>
    </div>
  );
}
