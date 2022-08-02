import styled from 'styled-components';

type menuType = {
  open: boolean;
};

type burgerItemType = {
  active?: boolean;
};

export const StyledMenu = styled.nav<menuType>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  text-align: left;
  top: 0px;
  left: 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  z-index: 30;
  padding: 0;
  padding-top: 30px;

  @media (min-width: 400px) {
    padding: 2rem;
    border-radius: 2%;
    width: auto;
  }

  body {
    overflow: hidden;
  }
`;

export const StyledBurgerItem = styled.a<burgerItemType>`
  font-family: Georgia, 'Times New Roman', Times, serif;
  text-transform: uppercase;
  padding: 1.1rem 0;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-decoration: none;
  transition: color 0.3s linear;
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  color: ${({ active }) => (active ? '#d1793e' : '#0d0c1d')};
  text-align: center;
  font-size: 1.1rem;

  &:hover {
    color: #d1793e;
  }
`;

export const ShadedScreen = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 11;
`;
