import * as React from 'react';
import { useEffect, useRef } from 'react';
import Box from '../portfolio-box';
import GridContainer from '../grid-container';
import BackgroundImage from '../background-image';

const HeroPlayground = () => {

  const lineOne = useRef(null);
  const lineTwo = useRef(null);

  const showLineOne = () => {
    lineOne.current.className = 'self-intro self-intro-typing';
  };

  const lineOneStop = () => {
    lineOne.current.className = 'self-intro';
  };
  const showLineTwo = () => {
    lineTwo.current.className = 'self-intro-sub';
  };

  useEffect(() => {
    let isCanceled = false;
    if (!isCanceled) {
      setTimeout(() => showLineOne(), 1000);
      setTimeout(() => lineOneStop(), 6500);
      setTimeout(() => showLineTwo(), 6600);
    }
    return () => { isCanceled = true; };
  }, []);

  return (
    <Box maxWidth={'100vw'} backgroundColor={'#0f1110'} height={'500px'}>
      <GridContainer>
        <BackgroundImage
          width={'100%'}
          url={'url("./images/pexels-photo-234527.jpeg")'}
          imagePositionX={'center'}
          imagePositionY={'center'}
          imageSize={'cover'}
          height={'500px'}
          paddingTop={'3rem'}>
            <Box width={'100%'} display={'flex'} justifyContent={'center'}>
              <Box width={'mobile:350px,tablet:600px'}>
                <h1 ref={lineOne} className="self-intro hidden"><span>Hello</span>, Welcome to my playground!</h1>
              </Box>
            </Box>
            <Box width={'100%'} display={'flex'} justifyContent={'center'}>
              <Box width={'mobile:150px,tablet:220px'}>
                <h3 ref={lineTwo} className="self-intro-sub hidden">Click the button below</h3>
              </Box>
            </Box>
          </BackgroundImage>
      </GridContainer>
    </Box>
  );

};

export default HeroPlayground;
