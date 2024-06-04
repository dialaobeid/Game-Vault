import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import React from 'react';
import Footer from './components/Page/Footer';
import Header from './components/Page/Header';
// outlet will automatically refer to code from main.jsx
import { Outlet } from 'react-router-dom';
import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  console.log('Rendering App.jsx');
  return (
    <ApolloProvider client={client}>
      <Header />
      <Outlet />
      <Footer />
    </ApolloProvider>
  );
};

export default App;