import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteGrey};
  font-family: 'Old Standard TT', serif;
  font-size: 20px;
  padding-bottom: 20px;
`;

export const StyledArticle = styled.div`
  position: relative;
  overflow: hidden;
  transition: max-height 1s;
  padding: 30px 30px;
  ${({ theme }) => theme.media.tablet} {
    padding: 20px 100px;
  }
  ${({ theme }) => theme.media.desktop} {
    padding: 0px 120px;
  }
  ${({ theme }) => theme.media.maximum} {
    padding: 0px 200px;
  }
`;

export const StyledTitleArticle = styled.h1`
  text-align: center;
  font-size: 30px;
  ${({ theme }) => theme.media.desktop} {
    font-size: calc(34px + 20 * ((100vw - 768px) / 692));
  }
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
  font-size: 16px;
  margin-top: 10px;
`;
