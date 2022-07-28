import styled from 'styled-components';

type typeScrollBar = {
  scrollPosition: number;
};

export const StyledProgressContainer = styled.div`
  height: 3px;
  width: 100%;
  background: #fff;
  border: 1px solid #42858f;
`;

export const StyledProgressBarMeter = styled.div<typeScrollBar>`
  height: 3px;
  background: #000;
  width: ${({ scrollPosition }) => scrollPosition}%;
`;
