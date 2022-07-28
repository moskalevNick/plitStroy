import styled from 'styled-components';

export const StyledWrapperLocation = styled.div`
  position: relative;
  display: flex;
  color: white;
  background: #50533f;
  flex-direction: column;
  ${({ theme }) => theme.media.desktop} {
    padding: 0;
    flex-direction: row;
  }
`;

export const StyledInfoMap = styled.span`
  top: 20px;
  color: black;
`;
