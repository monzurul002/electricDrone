import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <div className="hero-content flex-col ">
        <div className="hero bg-base-200 min-h-screen">
          <div className="card bg-base-100 w-3/10      shadow-2xl">
            <div className="card-body ">
              <h1 className="text-xl font-bold text-center">Login</h1>
              <fieldset className="fieldset w-full">
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
                <div>
                  <Link to="/signup" className="link link-hover">
                    Create an account.
                  </Link>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
