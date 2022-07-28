import styled from 'styled-components';

type linkType = {
  active: boolean;
};

export const StyledNavLink = styled.div<linkType>`
  font-size: 20px;
  width: 140px;
  text-align: center;
  color: white;
  cursor: pointer;
  transition: all 0.5s;
  text-decoration: ${({ active }) => (active ? 'underline' : 'none')};
  &:hover {
    transform: translateZ(10px);
    transform: translateY(-8px);
    transform: perspective(1px);
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.9);
    text-decoration: underline;
  }
`;
