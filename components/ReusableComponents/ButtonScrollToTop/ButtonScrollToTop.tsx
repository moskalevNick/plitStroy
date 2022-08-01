import React, { useCallback, useEffect, useState } from 'react';
import { StyledButtonScrollToTop } from './StyledButtonScrollToTop';
import ButtonScrollToTopImg from '../../images/ButtonScrollToTop';

const ButtonScrollToTop = () => {
  const [isShow, setShow] = useState(false);
  const scrollMaxHeight = 300;

  const checkScrollTop = useCallback(() => {
    if (window.scrollY >= scrollMaxHeight) {
      setShow(true);
    } else {
      setShow(false);
    }
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop, true);
    return () => {
      window.removeEventListener('scroll', checkScrollTop, true);
    };
  }, [checkScrollTop]);

  return (
    <StyledButtonScrollToTop
      isShow={isShow}
      role='button'
      tabIndex={0}
      onKeyDown={(event) => event.key === 'Enter' && scrollTop()}
      onClick={scrollTop}
    >
      <ButtonScrollToTopImg />
    </StyledButtonScrollToTop>
  );
};

export default ButtonScrollToTop;
