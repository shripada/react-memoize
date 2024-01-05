import UserBanner from './UserBanner';
import './App.css';
import Banner from './Banner';

function App() {
  return (
    <>
      <UserBanner type="success" user={{ registrationStatus: 'loggedIn' }}>
        User logged in successfully
      </UserBanner>

      <UserBanner
        type="failure"
        user={{ registrationStatus: 'non registered' }}
      >
        User is not registered yet!
      </UserBanner>

      <Banner type="success">Normal banner</Banner>
    </>
  );
}

export default App;
