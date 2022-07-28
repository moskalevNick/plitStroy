import styled from 'styled-components';

export const StyledLoaderWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #e0b153;
  z-index: 30;
  animation: 2s show;

  @keyframes show {
    from {
      top: 100%;
    }
    to {
      top: 0%;
    }
  }
`;

export const StyledLoader = styled.div`
  z-index: 30;
  position: absolute;
  width: 200px;
  height: 200px;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
  background-image: url('/img/icon.webp');
  background-position: center;
  background-size: cover;
  animation: spin 4s infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg) scale(1.5);
    }
  }
`;
