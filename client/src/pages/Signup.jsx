import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { SIGNUP } from '../utils/mutations';
import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [signup, { error, data }] = useMutation(SIGNUP);

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
      const { data } = await signup({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      username: '',
      email: '',
      password: '',
    });
  };

  return (
    <div className="form-container position-absolute top-50 start-50 translate-middle">
      <div className="card">
        <div className="card-body">
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to="/">back to the homepage.</Link>
            </p>
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
                placeholder="Email"
                name="email"
                type="email"
                value={formState.email}
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
              <button type="submit" className="btn btn-primary btn-block">Sign up</button>
            </form>
          )}
          {error && <div className="alert alert-danger mt-3">{error.message}</div>}
        </div>
      </div>
    </div>
  );
};

export default Signup;