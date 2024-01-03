import React from 'react';
import { ReactLogo } from './ReactLogo';

const CounterDisplay = ({ count }: { count: number }) => {
  console.info('CounterDisplay render');

  const listColor = count % 4 === 0 ? 'red' : 'green';

  const reactLogoProps = React.useMemo(() => {
    const devs = ['Kent C Dodds', 'Gullimero rauch', 'next js'];
    return { devs, listColor };
  }, [listColor]);
  return (
    <div
      style={{
        border: '2px solid hsla(214, 100%, 50%, 1)',
        borderRadius: '10px',
      }}
    >
      <h1>Count value</h1>
      <h2>{count}</h2>

      <ReactLogo {...reactLogoProps} />
    </div>
  );
};

export { CounterDisplay };
