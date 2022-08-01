import styled from 'styled-components';

type typeButtonScrollToTop = {
  isShow: boolean;
};

export const StyledButtonScrollToTop = styled.div<typeButtonScrollToTop>`
  z-index: 5;
  height: 40px;
  position: fixed;
  bottom: 90px;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.4s;
  will-change: opacity;
  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
  right: 2%;

  ${({ theme }) => theme.media.desktop} {
    opacity: 0.56;
  }

  &:hover {
    opacity: 1;
  }
`;
