import styled from 'styled-components';

export const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  background: #50533f;
  border-top: 1px solid white;
  padding: 0 3vw;
  color: #d3c2ac;
  height: 7vh;
  flex-direction: column;
  justify-content: space-around;

  ${({ theme }) => theme.media.tablet} {
    flex-direction: row;
    justify-content: space-between;
    height: 7vh;
    padding: 0 8vw;
  }
  ${({ theme }) => theme.media.desktop} {
    padding: 0 15vw;
  }
`;

export const StyledMySignature = styled.div``;

export const StyledRef = styled.a`
  padding-left: 0.3rem;
  opacity: 0.5;
  color: inherit;
  text-decoration: none;
  animation: flash 1s infinite linear;

  @keyframes flash {
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  &:hover {
    text-decoration: underline;
    animation: none;
    opacity: 1;
  }
`;
