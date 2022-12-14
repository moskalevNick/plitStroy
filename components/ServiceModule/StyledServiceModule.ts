import styled from 'styled-components';

type textType = {
  textAlign?: string;
};

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteGrey};
  font-family: 'Old Standard TT', serif;
  font-size: 1.25em;
  padding: 6vh 5vw 0px;
  min-height: 86.1vh;

  ${({ theme }) => theme.media.tablet} {
  }

  ${({ theme }) => theme.media.desktop} {
    padding: 20px 5vw;
  }
  ${({ theme }) => theme.media.maximum} {
    padding: 30px 10vw;
  }
`;

export const StyledHeader = styled.h3`
  margin: 0;
  text-align: center;
  padding: 20px 0;
`;

export const StyledText = styled.div<textType>`
  padding: 20px 0;
  text-align: ${({ textAlign }) => textAlign};
`;

export const StyledWrapper = styled.div``;
