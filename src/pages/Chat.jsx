/* eslint-disable react/prop-types */
import { useState } from "react";
import { auth, firestore } from "../firebase/firebase";
import firebase from "firebase/compat/app";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Chat = () => {
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(155);

  const [message] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (e.target[0].value !== "") {
      const { uid, displayName } = auth.currentUser;
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        displayName,
      });
      setFormValue("");
    }
  };
  return (
    <div>
      <div className="overflow-y-scroll h-[91vh]">
        {message &&
          message.map((msg) => (
            <ChatMessage key={msg.id} message={msg} auth={auth} />
          ))}
      </div>

      <form onSubmit={sendMessage} className="fixed bottom-0 w-[80%] mt-10">
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="enter your message"
          className="focus:outline-blue-500 py-4 px-10 text-[20px] font-[600] w-[80%]"
        />

        <button
          type="submit"
          className=" w-[20%] text-white text-[20px] font-[600] bg-purple-500 px-5 py-4 mt-2 rounded-sm hover:scale-90 transition-all hover:rounded-xl active:rounded-none active:scale-100"
        >
          Send
        </button>
      </form>
    </div>
  );
};

function ChatMessage({ message, auth }) {
  const { text, uid, displayName } = message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <div className={`message ${messageClass}`}>
      <div className="w-[20%] block">
        <button className="text-white mt-10 bg-cyan-400 shadow-lg rounded-md px-2">
          {displayName}
        </button>{" "}
        <br />
        <button className="text-2xl font-[500]">{text}</button>
      </div>
    </div>
  );
}

export default Chat;
