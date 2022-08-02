import styled from 'styled-components';

type typeScrollBar = {
  scrollPosition: number;
};

export const StyledProgressContainer = styled.div`
  height: 3px;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid #42858f;
`;

export const StyledProgressBarMeter = styled.div<typeScrollBar>`
  height: 3px;
  background: ${({ theme }) => theme.colors.orange};
  width: ${({ scrollPosition }) => scrollPosition}%;
`;
