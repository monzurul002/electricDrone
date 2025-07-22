import { Link } from "react-router";

const SignUp = () => {
  return (
    <div className="hero-content flex-col ">
      <div className="hero bg-base-200 min-h-screen">
        <div className="card bg-base-100 w-3/10      shadow-2xl">
          <div className="card-body ">
            <h1 className="text-xl font-bold text-center">Sign Up</h1>
            <fieldset className="fieldset w-full">
              <label className="label">Email</label>
              <input type="text" className="input w-full" placeholder="Name" />
              <label className="label">Email</label>
              <input
                type="email"
                className="input w-full"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input   w-full"
                placeholder="Password"
              />

              <button className="btn btn-neutral mt-4">Submit</button>
            </fieldset>
            <div className="flex justify-between">
              <a className="link link-hover">Forgot password?</a>
              <Link to="/login">Already have an account?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
