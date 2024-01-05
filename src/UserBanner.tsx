import { ComponentProps } from 'react';
import Banner from './Banner';

// ComponentProps is a nice technique to extract props of a component.
// Refer: https://www.totaltypescript.com/react-component-props-type-helper
type BannerProps = ComponentProps<typeof Banner>;
type UserBannerProps = BannerProps & { user: { registrationStatus: string } };

// Delegating props that the composing component does not use, but
// needs to pass them down to the composed component.
function UserBanner({ user, ...delegated }: UserBannerProps) {
  // Only logged in, verified users are
  // allowed to see the banner
  if (!user || user.registrationStatus === 'unverified') {
    return null;
  }
  return <Banner {...delegated} />;
}

export default UserBanner;
