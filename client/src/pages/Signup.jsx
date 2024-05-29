import React from 'react';
import Header from '../components/Page/Header';
import Footer from '../components/Page/Footer';
import SignupForm from '../components/Auth/SignupForm';

const Signup = () => {
  const handleSignup = (userInfo) => {
    // Handle signup logic here
    console.log('Signup info:', userInfo);
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Signup</h1>
        <SignupForm onSignup={handleSignup} />
      </main>
      <Footer />
    </div>
  );
};

export default Signup;