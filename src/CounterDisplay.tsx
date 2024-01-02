import React from 'react';

const CounterDisplay = ({ count }: { count: number }) => {
  console.info('CounterDisplay render');
  return (
    <div
      style={{
        border: '2px solid hsla(214, 100%, 50%, 1)',
        borderRadius: '10px',
      }}
    >
      <h1>Count value</h1>
      <h2>{count}</h2>
    </div>
  );
};

export { CounterDisplay };
