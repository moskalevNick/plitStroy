import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding-bottom: 20px;
  background: linear-gradient(
      45deg,
      rgba(0, 0, 0, 0) 48%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0) 52%
    ),
    linear-gradient(
      -45deg,
      rgba(0, 0, 0, 0) 48%,
      rgba(0, 0, 0, 0.2) 50%,
      rgba(0, 0, 0, 0) 52%
    );
  background-size: 10em 10em;
  animation: color 9s infinite linear;
  @keyframes color {
    0% {
      background-color: ${({ theme }) => theme.colors.darkBlue};
    }
    25% {
      background-color: ${({ theme }) => theme.colors.orange};
    }
    50% {
      background-color: ${({ theme }) => theme.colors.darkGreen};
    }
    75% {
      background-color: ${({ theme }) => theme.colors.dust};
    }
    100% {
      background-color: ${({ theme }) => theme.colors.grey};
    }
  }
`;

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  position: relative;
  margin: 0 auto;
  height: 350px;
  max-width: 330px;
`;

export const StyledProductName = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 70px;
  padding: 0 20px;
`;

export const StyledProductWrapperImage = styled.div`
  text-align: center;
`;

export const StyledProductImage = styled.img`
  width: 220px;
  height: 200px;
  background: none;
`;

export const StyledProductDescription = styled.div`
  color: ${({ theme }) => theme.colors.white};
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
`;

export const StyledProductPrice = styled.div``;

export const StyledProductColored = styled.div``;
