import styled from 'styled-components';

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.whiteGrey};
  padding: 50px 0;
`;

export const StyledHeader = styled.h1`
  padding-bottom: 30px;
  margin: 0 auto;
  text-align: center;
`;

export const StyledWrapperCards = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  ${({ theme }) => theme.media.tablet} {
    flex: 1 1 160px;
  }

  ${({ theme }) => theme.media.desktop} {
    flex-direction: row;
  }
`;

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid black;
  margin: 10px auto;
  width: 260px;

  ${({ theme }) => theme.media.desktop} {
    width: auto;
  }
  ${({ theme }) => theme.media.maximum} {
    width: 250px;
  }
`;

export const StyledCardHeader = styled.h3`
  text-align: center;
  height: 40px;
  margin: 10px auto;
  max-width: 180px;
`;

export const StyledWrapperImage = styled.div`
  text-align: center;
`;

export const StyledCardImg = styled.img`
  width: 202px;
  height: 200px;
`;
