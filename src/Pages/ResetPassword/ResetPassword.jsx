import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const ResetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const handleReset = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    resetPassword(email)
      .then(() => alert("Reset Email sent"))
      .catch((error) => console.log(error));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="card flex-shrink-0 w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleReset} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <input type="submit" value="Send" className="btn btn-primary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
