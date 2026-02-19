import React, { use } from "react";
import { AuthContext } from "../Auth/AuthContext";

const Login = () => {
  const { logIn } = use(AuthContext);
  console.log(logIn);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // firebase
    logIn(email, password);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-4">
            Create Account
          </h2>

          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter password"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button className="btn btn-primary w-full mt-2">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
