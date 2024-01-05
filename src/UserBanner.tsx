import { ReactNode } from 'react';
import Banner from './Banner';

function UserBanner({
  user,
  type,
  children,
}: {
  user: { registrationStatus: string };
  type: string;
  children: ReactNode;
}) {
  // Only logged in, verified users are
  // allowed to see the banner
  if (!user || user.registrationStatus === 'unverified') {
    return null;
  }
  return <Banner type={type} children={children} />;
}

export default UserBanner;
