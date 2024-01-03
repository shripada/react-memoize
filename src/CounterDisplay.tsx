import React from 'react';
import { ReactLogo } from './ReactLogo';

const CounterDisplay = ({ count, fibs }: { count: number; fibs: number[] }) => {
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
        margin: '15px',
      }}
    >
      <h1>Count value</h1>
      <h2>{count}</h2>

      <ReactLogo {...reactLogoProps} />
      <h4>Fibs:</h4>
      <div style={{ height: '140px', overflow: 'scroll', textAlign: 'left' }}>
        <ol>
          {fibs.map((fib, index) => (
            <li key={index}>{fib}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export { CounterDisplay };
