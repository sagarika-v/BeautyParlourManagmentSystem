import React from 'react';

function SignIn() {
  return (
    <div>
      <h2>Sign In</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default SignIn;
