// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { LOGIN } from '../../utils/mutations';

// const LoginForm = ({ onLogin }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [login, { error }] = useMutation(LOGIN);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await login({ variables: { username, password } });
//       localStorage.setItem('token', data.login.token);
//       onLogin();
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         placeholder="Username"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <button type="submit">Login</button>
//       {error && <p>Error logging in: {error.message}</p>}
//     </form>
//   );
// };

// export default LoginForm;