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
  color: white;
  font-size: 30px;
  padding: 160px 60px;
  ${({ theme }) => theme.media.desktop} {
    padding: 10vw 60px;
    font-size: calc(34px + 20 * ((100vw - 768px) / 692));
  }
`;
