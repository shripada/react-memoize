import React from 'react';
import reactLogo from './assets/react.svg';

const ReactLogo = React.memo(
  ({ devs, listColor }: { devs: string[]; listColor: string }) => {
    console.info('React Logo render');

    return (
      <div style={{ border: '2px solid teal', margin: '10px' }}>
        React Rocks!!❤️‍🔥 because of:
        <ul style={{ textAlign: 'left', color: listColor }}>
          {devs.map((dev) => (
            <li key={dev}>{dev}</li>
          ))}
        </ul>
        <img src={reactLogo} />
      </div>
    );
  }
);

ReactLogo.displayName = 'ReactLogo';

export { ReactLogo };
