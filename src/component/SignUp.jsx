import React, { useContext } from "react";
import { AuthContext } from "../Auth/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signUp } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();

    const form = e.target;

    const formdata = new FormData(form);
    // console.log(formdata);
    const { email, password, ...userProfile } = Object.fromEntries(
      formdata.entries(),
    );
    console.log({ email, password, userProfile });
    signUp(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        // update user profile
        return fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("aftre save", data);
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500,
              });
              form.reset();
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });

    //
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-4">
            Create Account
          </h2>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div>
              <label className="label">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter phone number"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">Photo URL</label>
              <input
                type="text"
                name="photo"
                placeholder="Enter photo link"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="label">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Enter your address"
                className="input input-bordered w-full"
                required
              />
            </div>

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

export default SignUp;
