import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to Blushify</h1>
      <Link to="/services">Explore Services</Link>
    </div>
  );
}

export default Home;
