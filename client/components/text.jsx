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
  const [colorMobile, colorTablet] = valueConvert(color);
  const [fontMobile, fontTablet] = valueConvert(font);
  const [sizeMobile, sizeTablet] = valueConvert(size);
  const [textAlignMobile, textAlignTablet] = valueConvert(textAlign);
  const [weightMobile, weightTablet] = valueConvert(weight);

  const textStyle = {
    box: isTablet => ({
      color: isTablet ? colorTablet : colorMobile,
      fontFamily: isTablet ? fontTablet : fontMobile,
      fontSize: isTablet ? sizeTablet : sizeMobile,
      textAlign: isTablet ? textAlignTablet : textAlignMobile,
      fontWeight: isTablet ? weightTablet : weightMobile
    })
  };

  return (
    <div className={classes} style={textStyle.box(isTablet)}>
      {children}
    </div>
  );

}
