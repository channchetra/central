import { useState, useEffect } from 'react';
import throttle from 'lodash/throttle';

const getDeviceConfig = (width) => {
  if (width < 640) {
    return 'xs';
  }
  if (width >= 640 && width < 768) {
    return 'sm';
  }
  if (width >= 768 && width < 1024) {
    return 'md';
  }
  if (width >= 1024 && width < 1280) {
    return 'lg';
  }
  if (width >= 1280 && width < 1536) {
    return 'xl';
  }
  if (width >= 1536) {
    return '2xl';
  }

  return null;
};

const getBreakpointStates = (screen, width = 0) => {
  const states = {
    // Breakpoints
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,

    // Conditionals
    xsOnly: false,
    smOnly: false,
    smAndDown: false,
    smAndUp: false,
    mdOnly: false,
    mdAndDown: false,
    mdAndUp: false,
    lgOnly: false,
    lgAndDown: false,
    lgAndUp: false,
    xlOnly: false,
    xlAndDown: false,
    xlAndUp: false,
    '2xlOnly': false,

    // Current breakpoint name (e.g. 'md')
    name: screen,

    width,
  };

  switch (screen) {
    case 'xs':
      Object.assign(states, {
        xs: true,
        xsOnly: true,

        smAndDown: true,
        mdAndDown: true,
        lgAndDown: true,
        xlAndDown: true,
      });
      break;

    case 'sm':
      Object.assign(states, {
        sm: true,
        smOnly: true,

        smAndDown: true,
        mdAndDown: true,
        lgAndDown: true,
        xlAndDown: true,

        smAndUp: true,
      });
      break;

    case 'md':
      Object.assign(states, {
        md: true,
        mdOnly: true,

        mdAndDown: true,
        lgAndDown: true,
        xlAndDown: true,

        smAndUp: true,
        mdAndUp: true,
      });
      break;

    case 'lg':
      Object.assign(states, {
        lg: true,
        lgOnly: true,

        lgAndDown: true,
        xlAndDown: true,

        smAndUp: true,
        mdAndUp: true,
        lgAndUp: true,
      });
      break;

    case 'xl':
      Object.assign(states, {
        xl: true,
        xlOnly: true,

        xlAndDown: true,

        smAndUp: true,
        mdAndUp: true,
        lgAndUp: true,
        xlAndUp: true,
      });
      break;

    case '2xl':
      Object.assign(states, {
        '2xl': true,
        '2xlOnly': true,

        '2xlAndDown': true,

        smAndUp: true,
        mdAndUp: true,
        lgAndUp: true,
        xlAndUp: true,
        '2xlAndUp': true,
      });
      break;

    default:
      break;
  }

  return states;
};

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState(null);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    setBreakpoint(getDeviceConfig(window.innerWidth));
    const calcInnerWidth = throttle(() => {
      setScreenWidth(window.innerWidth);
      setBreakpoint(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  const states = getBreakpointStates(breakpoint, screenWidth);
  return {
    $breakpoints: states,
    ...states,
  };
};

export default useBreakpoint;
