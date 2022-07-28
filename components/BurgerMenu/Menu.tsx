import React from 'react';
import { useRouter } from 'next/router';
import { StyledMenu, StyledBurgerItem, ShadedScreen } from './StyledMenu';

type linkType = {
  name: string;
  path: string;
};

type menuType = {
  open: boolean;
  links: linkType[];
  setOpen: (val: boolean) => void;
};

const Menu: React.FC<menuType> = ({ open, links, setOpen }) => {
  const { asPath } = useRouter();

  const closeBurger = () => {
    setOpen(false);
  };

  return (
    <>
      {open && <ShadedScreen onClick={closeBurger} />}
      <StyledMenu open={open}>
        <StyledBurgerItem href='/' active={'/' === asPath}>
          Главная страница
        </StyledBurgerItem>
        {links.map((link) => (
          <StyledBurgerItem
            href={link.path}
            key={link.name}
            active={link.path === asPath}
          >
            {link.name}
          </StyledBurgerItem>
        ))}
      </StyledMenu>
    </>
  );
};

export default Menu;
