import React from 'react';
const CountBoostIn = ({ handleBoost }: { handleBoost: () => void }) => {
  return (
    <button
      onClick={handleBoost}
      style={{ marginLeft: '10px', border: '2px solid red' }}
    >
      Boost Count
    </button>
  );
};

const CountBoost = React.memo(CountBoostIn);
export { CountBoost };
