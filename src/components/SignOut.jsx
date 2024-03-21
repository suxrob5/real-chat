import { auth } from "../firebase/firebase";

const SignOut = () => {
  const handleLogOut = () => {
    const result = confirm("Are you sure sign out?");
    if (result) {
      auth.signOut();
    }
  };
  return (
    auth.currentUser && (
      <button
        onClick={handleLogOut}
        className="px-5 py-3 text-xl text-white rounded-xl font-[600] bg-blue-500 hover:bg-opacity-90"
      >
        Sign Out
      </button>
    )
  );
};

export default SignOut;
