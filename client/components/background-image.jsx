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

  const backgroundStyle = {
    box: isTablet => ({
      backgroundImage: isTablet ? urlTablet : urlMobile,
      backgroundPositionX: isTablet ? positionXTablet : positionXMobile,
      backgroundPositionY: isTablet ? positionYTablet : positionYMobile,
      backgroundSize: isTablet ? sizeTablet : sizeMobile,
      height: isTablet ? heightTablet : heightMobile,
      width: isTablet ? widthTablet : widthMobile
    })
  };

  return (
   <div style={backgroundStyle.box(isTablet)} className = {className} >
     {children}
   </div>
  );

}
