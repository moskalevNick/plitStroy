import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  StyledNavBar,
  StyledIconWrapper,
  StyledWrapperNavBar,
  StyledContainer,
} from './StyledNavBar';

import Meter from '../Meter/Meter';
import NavLink from '../NavLink';
import { useIsMediaQuery } from '../../utils/hooks/isMediaQuery';
import theme from '../../utils/styledTheme';
import Burger from '../BurgerMenu/Burger';
import Menu from '../BurgerMenu/Menu';

type linkType = {
  name: string;
  path: string;
};

type NavBarType = {
  withMeter?: boolean;
};

const links: linkType[] = [
  { name: 'услуги', path: '/services' },
  { name: 'статьи', path: '/articles' },
  { name: 'галерея', path: '/gallery' },
  { name: 'как нас найти?', path: '/location' },
];

const NavBar: React.FC<NavBarType> = () => {
  const router = useRouter();
  const minHeightForMeter = 1000;
  const isDesktop = useIsMediaQuery(theme.breakpoints.desktop);
  const isMaximum = useIsMediaQuery(theme.breakpoints.maximum);

  const [withMeter, setWithMeter] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.scrollY > 0) {
      window.scrollTo({ top: 0 });
    }
    if (document.documentElement.scrollHeight > minHeightForMeter) {
      setWithMeter(true);
    } else {
      setWithMeter(false);
    }
  }, [router.pathname]);

  //-------next functional for auto hide navBar-------- //

  /* const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        // if scroll down hide the navbar
        setShow(false);
      } else {
        // if scroll up show the navbar
        setShow(true);
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]); */

  return isDesktop || isMaximum ? (
    <StyledContainer>
      <StyledWrapperNavBar>
        <StyledIconWrapper onClick={() => router.push('/')}>
          <img alt='plitstroy main image' src='/img/icon.webp' />
        </StyledIconWrapper>
        <StyledNavBar>
          {links.map((link) => (
            <NavLink
              key={link.name}
              link={link}
              active={link.path === location.pathname}
            />
          ))}
        </StyledNavBar>
        {withMeter && <Meter />}
      </StyledWrapperNavBar>
    </StyledContainer>
  ) : (
    <>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} links={links} setOpen={setOpen} />
    </>
  );
};

export default NavBar;
