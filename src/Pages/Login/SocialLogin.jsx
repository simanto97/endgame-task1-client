import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  const { googleSignIn, setLoading } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log("user from google", loggedUser);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };
  return (
    <div
      onClick={handleGoogleSignIn}
      className="flex justify-center items-center btn btn-ghost my-1"
    >
      <FcGoogle className="text-4xl" />
      <span className="ml-1 capitalize">Google Login</span>
    </div>
  );
};

export default SocialLogin;
