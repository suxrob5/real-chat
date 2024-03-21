import firebase from "firebase/compat/app";
import { auth } from "../firebase/firebase";

const Login = () => {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={signInWithGoogle}
        className="text-white py-5 font-[600] text-3xl w-[300px] rounded-lg hover:bg-opacity-90 bg-blue-500 hover:shadow-xl active:shadow-2xl"
      >
        Sign In with Google
      </button>
    </div>
  );
};

export default Login;
