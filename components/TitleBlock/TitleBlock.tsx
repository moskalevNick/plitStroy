import React from 'react';
import { StyledContainer, StyledTitle, StyledLogo } from './StyledTitleBlock';

const TitleBlock: React.FC = () => {
  return (
    <StyledContainer>
      <StyledTitle>
        Производство и укладка тротуарной плитки в Могилёве и Могилёвской
        области
      </StyledTitle>
      <StyledLogo />
    </StyledContainer>
  );
};

export default TitleBlock;
