import * as React from 'react';
import { useState } from 'react';

export default function Row({
  rowPadding,
  isWrapped,
  rowStyle,
  children
}) {

  const hasPadding = ifPadding => ifPadding ? 'row-padding' : '';

  const hasWrapping = ifWrapping => ifWrapping ? 'row-wrapping' : '';

  const rowClass = ` row-100 ${hasPadding(rowPadding)} ${hasWrapping(isWrapped)} `;

  return (
    <div className={rowClass} style={{ rowStyle }}>
      {children}
    </div>
  );

}
