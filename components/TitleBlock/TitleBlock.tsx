import React from 'react';
import { StyledContainer, StyledTitle, StyledLogo } from './StyledTitleBlock';

const TitleBlock: React.FC = () => {
  return (
    <StyledContainer>
      <StyledTitle>
        Производство тротуарной плитки и других изделий из бетона в
        г.Костюковичи
      </StyledTitle>
      <StyledLogo />
    </StyledContainer>
  );
};

export default TitleBlock;
