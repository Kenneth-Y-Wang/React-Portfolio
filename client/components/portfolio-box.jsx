import * as React from 'react';
import useMediaQuery from '../hooks/use-media-query';
import valueConvert from '../lib/mobile-tablet-value-convert';

export default function Box({
  display,
  alignItems,
  justifyContent,
  marginRight,
  marginLeft,
  marginTop,
  marginBottom,
  paddingRight,
  paddingLeft,
  paddingTop,
  paddingBottom,
  backgroundColor,
  width,
  height,
  children,
  className
}) {

  const isTablet = useMediaQuery('(min-width: 768px)');
  const [displayMobile, displayTablet] = valueConvert(display);
  const [alighItemsMobile, alignItemsTablet] = valueConvert(alignItems);
  const [justifyContentMobile, justifyContentTablet] = valueConvert(justifyContent);
  const [marginRightMobile, marginRightTablet] = valueConvert(marginRight);
  const [marginLeftMobile, marginLeftTablet] = valueConvert(marginLeft);
  const [marginTopMobile, margainTopTablet] = valueConvert(marginTop);
  const [marginBottomMobile, marginBottomTablet] = valueConvert(marginBottom);
  const [paddingRightMobile, paddingRightTablet] = valueConvert(paddingRight);
  const [paddingLeftMobile, paddingLeftTablet] = valueConvert(paddingLeft);
  const [paddingTopMobile, paddingTopTablet] = valueConvert(paddingTop);
  const [paddingBottomMobile, paddingBottomTablet] = valueConvert(paddingBottom);
  const [heightMobile, heightTablet] = valueConvert(height);
  const [widthMobile, widthTablet] = valueConvert(width);
  const [backgroundColorMobile, backgroundColorTablet] = valueConvert(backgroundColor);

  const boxStyle = {
    box: isTablet => ({
      display: isTablet ? displayTablet : displayMobile,
      backgroundColor: isTablet ? backgroundColorTablet : backgroundColorMobile,
      width: isTablet ? widthTablet : widthMobile,
      height: isTablet ? heightTablet : heightMobile,
      alignItems: isTablet ? alignItemsTablet : alighItemsMobile,
      justifyContent: isTablet ? justifyContentTablet : justifyContentMobile,
      marginRight: isTablet ? marginRightTablet : marginRightMobile,
      marginLeft: isTablet ? marginLeftTablet : marginLeftMobile,
      marginTop: isTablet ? margainTopTablet : marginTopMobile,
      marginBottom: isTablet ? marginBottomTablet : marginBottomMobile,
      paddingRight: isTablet ? paddingRightTablet : paddingRightMobile,
      paddingLeft: isTablet ? paddingLeftTablet : paddingLeftMobile,
      paddingTop: isTablet ? paddingTopTablet : paddingTopMobile,
      paddingBottom: isTablet ? paddingBottomTablet : paddingBottomMobile
    })
  };

  return (
    <div className={className} style={boxStyle.box(isTablet)}>
      {children}
    </div>
  );
}
