import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import SignOut from "./components/SignOut";
import Chat from "./pages/Chat";
import Login from "./pages/Login";

const App = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <div className="w-[80%] mx-auto max-h-screen">
        <header className="fixed top-0 w-[80%] bg-cyan-500 py-5">
          <SignOut />
        </header>
        <main className="bg-emerald-500 h-screen">
          {user ? <Chat /> : <Login />}
        </main>
      </div>
    </>
  );
};

export default App;
