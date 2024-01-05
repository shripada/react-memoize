import Banner from './Banner';
import './App.css';

function App() {
  return (
    <>
      <Banner type="success" user={{ registrationStatus: 'loggedIn' }}>
        User logged in successfully
      </Banner>
      <Banner type="failure" user={{ registrationStatus: 'non registered' }}>
        User is not registered yet!
      </Banner>
    </>
  );
}

export default App;
