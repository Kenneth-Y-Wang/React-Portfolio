import * as React from 'react';
import GridContainer from '../grid-container';
import Row from '../portfolio-row';
import Column from '../portfolio-column';
import Box from '../portfolio-box';
import Heading from '../heading';
import Text from '../text';

const SubmitButton = ({ handleSubmit }) => {

  return (
    <Box marginTop={'4rem'} marginBottom={'4rem'} width={'100vw'}>
      <GridContainer>
        <Row isWrapped={true}>
          <Column offset={'mobile:0,tablet:1'} span={'mobile:12,tablet:5'}>
            <Box
            display={'flex'}
            alignItems={'center'}
            height={'100%'}
            marginBottom={'mobile:3rem,tablet:0'}
            justifyContent={'mobile:center,tablet:end'}>
              <Text
              color={'#6c757d'}
              font={'Montserrat'}
              size={'1.3rem'}
              weight={'400'}
              textAlign={'center'}>
                Click button to get three items!
              </Text>
            </Box>
          </Column>
          <Column span={'mobile:12,tablet:4'}>
            <Box display={'flex'} alignItems={'center'} height={'100%'}>
              <button className='playground-button' onClick={handleSubmit}>Suprice me!</button>
            </Box>
          </Column>
        </Row>
      </GridContainer>
    </Box>
  );
};

export default SubmitButton;
