import React from 'react';

function SignUp() {
  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default SignUp;
