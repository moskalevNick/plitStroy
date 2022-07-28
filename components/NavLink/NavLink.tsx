import React from 'react';
import { StyledNavLink } from './StyledNavLink';
import { useRouter } from 'next/router';

type navLinkType = {
  link: {
    name: string;
    path: string;
  };
  active: boolean;
};

const NavLink: React.FC<navLinkType> = ({ link, active }) => {
  const router = useRouter();

  return (
    <StyledNavLink
      onClick={() => router.push(`${(process.env.APP_URL, link.path)}`)}
      active={active}
    >
      {link.name}
    </StyledNavLink>
  );
};

export default NavLink;
