import React from 'react';
import reactLogo from './assets/react.svg';

const ReactLogo = () => {
  console.info('React Logo render');

  return (
    <div>
      React Rocks!!❤️‍🔥
      <img src={reactLogo} />;
    </div>
  );
};

export { ReactLogo };
