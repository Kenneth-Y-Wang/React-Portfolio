import * as React from 'react';
import useMediaQuery from '../hooks/use-media-query';
import valueConvert from '../lib/mobile-tablet-value-convert';

export default function BackgroundImage({
  url,
  imagePositionX,
  imagePositionY,
  imageSize,
  width,
  height,
  paddingRight,
  paddingLeft,
  paddingTop,
  paddingBottom,
  marginRight,
  marginLeft,
  marginTop,
  marginBottom,
  className,
  children
}) {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const [urlMobile, urlTablet] = valueConvert(url);
  const [positionXMobile, positionXTablet] = valueConvert(imagePositionX);
  const [positionYMobile, positionYTablet] = valueConvert(imagePositionY);
  const [sizeMobile, sizeTablet] = valueConvert(imageSize);
  const [widthMobile, widthTablet] = valueConvert(width);
  const [heightMobile, heightTablet] = valueConvert(height);
  const [paddingRightMobile, paddingRightTablet] = valueConvert(paddingRight);
  const [paddingLeftMobile, paddingLeftTablet] = valueConvert(paddingLeft);
  const [paddingTopMobile, paddingTopTablet] = valueConvert(paddingTop);
  const [paddingBottomMobile, paddingBottomTablet] = valueConvert(paddingBottom);
  const [marginRightMobile, marginRightTablet] = valueConvert(marginRight);
  const [marginLeftMobile, marginLeftTablet] = valueConvert(marginLeft);
  const [marginTopMobile, margainTopTablet] = valueConvert(marginTop);
  const [marginBottomMobile, marginBottomTablet] = valueConvert(marginBottom);

  const backgroundStyle = {
    box: isTablet => ({
      backgroundImage: isTablet ? urlTablet : urlMobile,
      backgroundPositionX: isTablet ? positionXTablet : positionXMobile,
      backgroundPositionY: isTablet ? positionYTablet : positionYMobile,
      backgroundSize: isTablet ? sizeTablet : sizeMobile,
      height: isTablet ? heightTablet : heightMobile,
      width: isTablet ? widthTablet : widthMobile,
      paddingRight: isTablet ? paddingRightTablet : paddingRightMobile,
      paddingLeft: isTablet ? paddingLeftTablet : paddingLeftMobile,
      paddingTop: isTablet ? paddingTopTablet : paddingTopMobile,
      paddingBottom: isTablet ? paddingBottomTablet : paddingBottomMobile,
      marginRight: isTablet ? marginRightTablet : marginRightMobile,
      marginLeft: isTablet ? marginLeftTablet : marginLeftMobile,
      marginTop: isTablet ? margainTopTablet : marginTopMobile,
      marginBottom: isTablet ? marginBottomTablet : marginBottomMobile
    })
  };

  return (
   <div style={backgroundStyle.box(isTablet)} className = {className} >
     {children}
   </div>
  );

}
