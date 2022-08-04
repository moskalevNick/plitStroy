import styled from 'styled-components';

export const StyledContainer = styled.div`
  padding-bottom: 67px;
`;

export const StyledWrapperNavBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 11;
  display: block;
  transition: 0.3s linear;
`;

export const StyledNavBar = styled.header`
  display: flex;
  justify-content: center;
  gap: 7vw;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.darkBlue};
`;

export const StyledIconWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 20px;
  width: 20px;
  transition: all 0.3s;
  padding-top: 10px;
  img {
    width: 200%;
  }
  :hover {
    transform: scale(1.1);
  }
`;
