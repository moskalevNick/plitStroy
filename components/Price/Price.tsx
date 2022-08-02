import React from 'react';
import CustomButton from '../ReusableComponents/CustomButton/CustomButton';
import { StyledContainer } from './StyledPrice';

const Price: React.FC = () => {
  const downloadPrice = () => {
    window.open('/doc/Plitstroytorg_Price18.03.2021.pdf', '_blank');
  };

  return (
    <StyledContainer>
      <CustomButton label='Cкачать прайс' onClick={downloadPrice} />
    </StyledContainer>
  );
};

export default Price;
