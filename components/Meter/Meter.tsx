import React, { useEffect, useState } from 'react';
import { StyledProgressContainer, StyledProgressBarMeter } from './StyledMeter';

const Meter: React.FC = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollListener = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollPosition(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <StyledProgressContainer>
      <StyledProgressBarMeter scrollPosition={scrollPosition} />
    </StyledProgressContainer>
  );
};

export default Meter;
