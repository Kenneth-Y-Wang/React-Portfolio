import * as React from 'react';

export default function JumpLinks({
  ref,
  children
}) {

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}
