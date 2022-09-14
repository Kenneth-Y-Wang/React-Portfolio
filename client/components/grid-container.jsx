import * as React from 'react';

export default function GridContainer({
  horizontalPadding,
  verticalPadding,
  children,
  style,
  classes

}) {
  const hasHorizontalPadding = ifPadding => ifPadding ? 'container-horizontal-padding' : '';

  const hasVerticalWrapping = ifWrapping => ifWrapping ? 'container-vertical-padding' : '';

  const containerClass = `container ${classes} ${hasHorizontalPadding(horizontalPadding)} ${hasVerticalWrapping(verticalPadding)}`;

  return (
    <div className={containerClass} style={style}>
      {children}
    </div>
  );
}
