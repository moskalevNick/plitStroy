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
  opacity: 0.56;
  transition: opacity 0.4s;
  will-change: opacity;
  display: ${({ isShow }) => (isShow ? 'block' : 'none')};
  right: 2%;
  &:hover {
    opacity: 1;
  }
`;
