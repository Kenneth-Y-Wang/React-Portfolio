import * as React from 'react';

export default function GridContainer({
  horizontalPadding,
  verticalPadding,
  children,
  style,
  classes

}) {
  const hasHorizontalPadding = ifPadding => ifPadding ? 'container-horizontal-padding' : '';

  const hasVerticalPadding = ifPadding => ifPadding ? 'container-vertical-padding' : '';

  const containerClass = `container ${classes} ${hasHorizontalPadding(horizontalPadding)} ${hasVerticalPadding(verticalPadding)}`;

  return (
    <div className={containerClass} style={style}>
      {children}
    </div>
  );
}
