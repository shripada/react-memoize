import React, { ReactNode } from 'react';

import styles from './Banner.module.css';

function Banner({ type, children }: { type: string; children: ReactNode }) {
  const backgroundColor =
    type === 'success' ? 'var(--color-success)' : 'var(--color-failure)';

  return (
    <div className={styles.banner} style={{ backgroundColor, color: 'white' }}>
      {children}
    </div>
  );
}

export default Banner;
