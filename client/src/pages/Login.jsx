import React from 'react';
import Header from '../components/Page/Header';
import Footer from '../components/Page/Footer';
import LoginForm from '../components/Auth/LoginForm';

const Login = () => {
  const handleLogin = (credentials) => {
    // Handle login logic here
    console.log('Login credentials:', credentials);
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Login</h1>
        <LoginForm onLogin={handleLogin} />
      </main>
      <Footer />
    </div>
  );
};

export default Login;