import React from 'react';
import Header from '../components/Page/Header';
import Footer from '../components/Page/Footer';

const Profile = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>User Profile</h1>
        <p>Manage your profile and game progress here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;