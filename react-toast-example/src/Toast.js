// Toast.js
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => {
  const showToast = () => {
    toast("This is a Toast notification!", {
      autoClose: 2000,
      style: { background: "gray", color: "white" },
    });
  };

  return (
    <div>
      <button onClick={showToast}>Show Toast</button>
      <ToastContainer />
    </div>
  );
};

export default Toast;
