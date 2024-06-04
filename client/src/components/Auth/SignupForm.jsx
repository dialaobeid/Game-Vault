// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { SIGNUP } from '../../utils/mutations';

// const SignupForm = ({ onSignup }) => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [signup, { error }] = useMutation(SIGNUP);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await signup({ variables: { username, email, password } });
//       localStorage.setItem('token', data.addUser.token);
//       onSignup();
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
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//         required
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//         required
//       />
//       <button type="submit">Signup</button>
//       {error && <p>Error signing up: {error.message}</p>}
//     </form>
//   );
// };

// export default SignupForm;