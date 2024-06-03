import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../utils/mutations';
import Header from '../components/Page/Header';
import Footer from '../components/Page/Footer';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signup, { error }] = useMutation(SIGNUP);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await signup({ variables: { username, email, password } });
      localStorage.setItem('token', data.addUser.token);
      history.push('/profile');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <Header />
      <main>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit">Signup</button>
        </form>
        {error && <p>Error signing up: {error.message}</p>}
      </main>
      <Footer />
    </div>
  );
};

export default Signup;