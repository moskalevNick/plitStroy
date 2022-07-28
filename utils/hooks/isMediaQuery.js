import { useState, useEffect } from 'react';
import theme from '../styledTheme';

const useIsMediaQuery = (breakpoint) => {
  const [currentDeviceWidth, setCurrentDeviceWidth] = useState();

  const handleDeviceWidthChange = () =>
    setCurrentDeviceWidth(document.documentElement.clientWidth);

  useEffect(() => {
    setCurrentDeviceWidth(document.documentElement.clientWidth);
    window.addEventListener('resize', handleDeviceWidthChange);

    return () => window.removeEventListener('resize', handleDeviceWidthChange);
  }, []);

  switch (breakpoint) {
    case theme.breakpoints.mobile:
      return (
        currentDeviceWidth >= breakpoint &&
        currentDeviceWidth < theme.breakpoints.tablet
      );
    case theme.breakpoints.tablet:
      return (
        currentDeviceWidth >= breakpoint &&
        currentDeviceWidth < theme.breakpoints.desktop
      );
    case theme.breakpoints.desktop:
      return (
        currentDeviceWidth >= breakpoint &&
        currentDeviceWidth < theme.breakpoints.maximum
      );
    case theme.breakpoints.maximum:
      return currentDeviceWidth >= breakpoint;
    default:
      return false;
  }
};
export { useIsMediaQuery };
