import { auth, authProvider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";

const cookies = new Cookies();

const Auth = ({isAuth, setIsAuth}) => {

  const handleSignIn = async () => {
    try {
      const response = await signInWithPopup(auth, authProvider);
      cookies.set("auth-token", response?.user?.refreshToken);
      setIsAuth(response?.user?.refreshToken);
      toast.success("Signed in successfully");
    } catch (e) {
      alert("Something went wrong, try login again");
    }
  };

  return (
    <div>
      {!isAuth ? (
        <div className="unauthenticated">
          <p>You are not authenticated, please login</p>
          <div className="sigin-options">
            <button className="signin-box" onClick={handleSignIn}>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </div>
              <div>Sign in with Google</div>
            </button>
          </div>
        </div>
      ) : (
        <div className="authenticated">
          <p>You are authenticated</p>
        </div>
      )}
    </div>
  );
};

export default Auth;
