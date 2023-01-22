import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import Cookies from "universal-cookie";
import Auth from "./components/Auth";
import Header from "./components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const cookies = new Cookies();

function App() {
  const [isAuth, setIsAuth] = useState(cookies?.get("auth-token"));

  const handleSignout = async () => {
    await signOut(auth);
    cookies.remove("auth-token");
    setIsAuth(false);
    toast.success("Signed out successfully");
  };

  return (
    <>
      <ToastContainer />
      <Header />
      <Auth isAuth={isAuth} setIsAuth={setIsAuth} />
      {isAuth && (
        <div className="signout">
          <button onClick={handleSignout}>Sign out</button>
        </div>
      )}
    </>
  );
}

export default App;
