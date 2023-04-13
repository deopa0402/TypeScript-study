import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function Root() {
  return (
    <div>
      <Header />
      <Outlet />
      <h1>Hello Root</h1>
    </div>
  );
}

export default Root;
