import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: #b6d2d6;
  font-family: 'Old Standard TT', serif;
  font-size: 20px;
  padding-bottom: 20px;
`;

export const StyledArticle = styled.div`
  position: relative;
  padding: 0px 200px;
  overflow: hidden;
  transition: max-height 1s;
`;

export const StyledTitleArticle = styled.h1`
  text-align: center;
`;

export const StyledSubtitle = styled.h3`
  margin: 0;
  padding-left: 20px;
`;

export const StyledText = styled.p`
  text-indent: 30px;
`;

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledShowMoreButton = styled.button`
  border: none;
  background-color: transparent;
  text-decoration: underline;
  cursor: pointer;
  font-size: 20px;
  margin-top: 10px;
`;
