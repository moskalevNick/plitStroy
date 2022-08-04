import styled from 'styled-components';

export const StyledContainer = styled.div`
  position: relative;
  min-height: 40vh;
  background: url('/img/background_home.webp');
  background-size: cover;
`;

export const StyledTitle = styled.h1`
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  padding: 80px 60px 0px;
  text-shadow: 3px 3px 3px #000;
  font-size: calc(32px + 20 * ((100vw - 768px) / 692));

  ${({ theme }) => theme.media.desktop} {
    padding: 10px 60px;
    font-size: calc(34px + 20 * ((100vw - 768px) / 692));
  }
`;

export const StyledLogo = styled.div`
  background: url('/img/logo.webp');
  background-size: cover;
  height: 70px;
  width: 210px;
  margin: 30px auto 0px;
  border-radius: 10px;
  ${({ theme }) => theme.media.desktop} {
    height: 100px;
    width: 300px;
  }
`;
