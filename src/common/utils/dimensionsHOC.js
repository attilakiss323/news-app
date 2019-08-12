import React, { useEffect, useState } from 'react';

const DimensionsHOC = () => C => {
  function Dimensions(props) {
    const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

    useEffect(() => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      window.addEventListener('resize', () =>
        setDimensions({ width: window.innerWidth, height: window.innerHeight })
      );

      return function cleanup() {
        window.removeEventListener('resize', () =>
          setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
          })
        );
      };
    }, []);

    const isTablet = () => dimensions.width <= 1080;

    const isMobile = () => dimensions.width <= 480;

    const isLaptop = () => dimensions.width <= 1440;

    const isDesktop = () => dimensions.width >= 1440;

    const screenSize = {
      isTablet: isTablet,
      isMobile: isMobile,
      isLaptop: isLaptop,
      isDesktop: isDesktop
    };

    return (
      <C
        height={dimensions.height}
        width={dimensions.width}
        screenSize={screenSize}
        {...props}
      />
    );
  }

  return Dimensions;
};

export default DimensionsHOC;
