import styled from 'styled-components';

export const StyledWrapperLocation = styled.div`
  position: relative;
  display: flex;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.darkBlue};
  border-top: 1px solid white;
  flex-direction: column;
  ${({ theme }) => theme.media.desktop} {
    padding: 0;
    flex-direction: row;
  }
`;

export const StyledInfoMap = styled.span`
  top: 20px;
  color: ${({ theme }) => theme.colors.black};
`;
