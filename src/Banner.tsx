import React, { ReactNode } from 'react';

import styles from './Banner.module.css';

function Banner({
  type,
  user,
  children,
}: {
  type: string;
  user: { registrationStatus: string };
  children: ReactNode;
}) {
  const backgroundColor =
    type === 'success' ? 'var(--color-success)' : 'var(--color-failure)';

  // Only logged in, verified users are
  // allowed to see the banner
  if (!user || user.registrationStatus === 'unverified') {
    return null;
  }

  return (
    <div className={styles.banner} style={{ backgroundColor, color: 'white' }}>
      {children}
    </div>
  );
}

export default Banner;
