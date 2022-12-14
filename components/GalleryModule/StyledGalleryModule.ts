import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.whiteGrey};
  padding-top: 30px;

  ${({ theme }) => theme.media.tablet} {
    padding: 0;
  }
`;

export const StyledHeader = styled.h1`
  width: 100%;
  text-align: center;
`;

export const StyledCard = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin: 10px 10px;
  border-top-left-radius: 37px 140px;
  border-top-right-radius: 23px 130px;
  border-bottom-left-radius: 110px 19px;
  border-bottom-right-radius: 120px 24px;
  background-color: ${({ theme }) => theme.colors.darkBlue};

  :hover {
    transform: translateY(-10px) rotate(1deg);
    transition-duration: 0.5s;
    box-shadow: 3px 15px 8px -1px rgba(0, 0, 0, 0.4);
  }
  :hover .border {
    transform: translateY(4px) rotate(-5deg);
  }

  :nth-child(2n) {
    background-color: ${({ theme }) => theme.colors.orange};
  }
`;

export const StyledDescription = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  text-transform: capitalize;
  padding-bottom: 10px;
  font-size: 1em;
  ${({ theme }) => theme.media.desktop} {
    font-size: 1.4em;
  }
`;

export const StyledExampleImage = styled.img`
  padding: 20px 20px 10px;
  width: 260px;
  height: 240px;
  background: none;
  ${({ theme }) => theme.media.desktop} {
    width: 400px;
    height: 350px;
  }
`;
