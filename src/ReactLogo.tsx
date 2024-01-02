import React from 'react';
import reactLogo from './assets/react.svg';

const ReactLogo = React.memo(() => {
  console.info('React Logo render');

  return (
    <div>
      React Rocks!!❤️‍🔥
      <img src={reactLogo} />;
    </div>
  );
});

ReactLogo.displayName = 'ReactLogo';

export { ReactLogo };
