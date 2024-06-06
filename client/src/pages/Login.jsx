import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      username: '',
      password: '',
    });
  };

  return (
    <div className="form-container">
      <div className="card">
        <div className="card-body">
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to="/">back to the homepage.</Link></p>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-control mb-3"
                placeholder="Username"
                name="username"
                type="text"
                value={formState.username}
                onChange={handleChange}
                required
              />
              <input
                className="form-control mb-3"
                placeholder="Password"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn btn-primary btn-block">Sign in</button>
            </form>
          )}
          {error && <div className="alert alert-danger mt-3">{error.message}</div>}
        </div>
      </div>
    </div>
  );
};

export default Login;