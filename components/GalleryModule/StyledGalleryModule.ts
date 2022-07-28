import styled from 'styled-components';

export const StyledHeader = styled.h1`
  width: 100%;
  text-align: center;
`;

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #d59b6c;
  padding-top: 0;
`;

export const StyledCard = styled.div`
  margin: 10px 10px;
  border: solid 1px #d59b6c;
  border-top-left-radius: 37px 140px;
  border-top-right-radius: 23px 130px;
  border-bottom-left-radius: 110px 19px;
  border-bottom-right-radius: 120px 24px;
  background-color: #6e7491;

  :hover {
    transform: translateY(-10px) rotate(1deg);
    transition-duration: 0.5s;
    box-shadow: 3px 15px 8px -1px rgba(0, 0, 0, 0.4);
  }
  :hover .border {
    transform: translateY(4px) rotate(-5deg);
  }

  :nth-child(2n) {
    background-color: #f75e34;
  }
`;

export const StyledDescription = styled.div`
  text-align: center;
  color: #a2ffa4;
  padding-bottom: 10px;
`;

export const StyledExampleImage = styled.img`
  padding: 20px 20px 10px;
  width: 260px;
  height: 240px;
  background: none;
  ${({ theme }) => theme.media.tablet} {
    width: 370px;
    height: 320px;
  }
`;
