import React from 'react';
import { StyledFooter, StyledRef, StyledMySignature } from './StyledFooter';

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      © 2008-{new Date().getFullYear()}. Все права защищены
      ООО&quot;Плит-строй&quot;
      <StyledMySignature>
        Разработка web-приложений
        <StyledRef
          target='_blank'
          href='https://www.linkedin.com/in/nickmoskalev/'
        >
          MoskalevNick
        </StyledRef>
      </StyledMySignature>
    </StyledFooter>
  );
};

export default Footer;
