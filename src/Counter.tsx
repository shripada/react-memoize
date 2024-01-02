import React from 'react';
import { CounterDisplay } from './CounterDisplay';

const Counter = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div style={{ border: '2px solid hsl(26, 100%, 50%, 1)' }}>
      <CounterDisplay count={count} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ➕
      </button>
    </div>
  );
};

export { Counter };
