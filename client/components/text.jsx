import * as React from 'react';
import useMediaQuery from '../hooks/use-media-query';
import valueConvert from '../lib/mobile-tablet-value-convert';

export default function Text({
  color,
  classes,
  font,
  size,
  textAlign,
  weight,
  children
}) {

  const isTablet = useMediaQuery('(min-width: 768px)');

  return (
    <div className={classes} style={{ color: color, fontFamily: font, textAlign: textAlign }}>{headingType(type)}</div>
  );

}
