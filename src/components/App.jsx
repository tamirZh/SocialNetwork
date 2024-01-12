import React from 'react';
import NavBar from './UI/NavBar';

export default function App({ children, user }) {
  return (
    <>
      <NavBar user={user} />
      {children}
    </>
  );
}
