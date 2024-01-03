import React from 'react';
import { CounterDisplay } from './CounterDisplay';

function firstFibs(fibCount: number) {
  let f1 = 0,
    f2 = 1;
  if (fibCount === 0) {
    return [];
  }
  if (fibCount === 1) {
    return [f1];
  }
  if (fibCount === 2) {
    return [f1, f2];
  }

  const fibs = [];
  for (let i = 2; i <= fibCount; i++) {
    fibs[i] = f2 + f1;
    f1 = f2;
    f2 = fibs[i];
  }
  return fibs;
}

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [fibCount, setFibCount] = React.useState(0);
  const inputId = React.useId();

  function handleSubmit(e: {
    preventDefault: () => void;
    currentTarget: HTMLFormElement | undefined;
  }) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formObj = Object.fromEntries(formData);
    setFibCount(new Number(formObj['fibCount']).valueOf());
  }

  const fibs = firstFibs(fibCount);

  return (
    <div style={{ border: '2px solid hsl(26, 100%, 50%, 1)', padding: '10px' }}>
      <CounterDisplay count={count} fibs={fibs} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ➕
      </button>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor={inputId}> Number of fibs:</label>
          <input defaultValue={0} name="fibCount" type="number" id={inputId} />
        </fieldset>
        <button>Go</button>
      </form>
    </div>
  );
};

export { Counter };
