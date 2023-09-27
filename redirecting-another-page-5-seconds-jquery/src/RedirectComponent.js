// src/RedirectComponent.js
import React, { useState } from "react";

function RedirectComponent() {
  const [redirecting, setRedirecting] = useState(false);

  const handleClick = () => {
    setRedirecting(true);
    setTimeout(() => {
      window.location.href = "https://jbcodeapp.com";
    }, 5000); // 5000 milliseconds (5 seconds)
  };

  return (
    <div>
      <h1>Welcome to My Laravel React App</h1>
      {redirecting ? (
        <p>Redirecting soon....</p>
      ) : (
        <button onClick={handleClick}>Click to redirect</button>
      )}
    </div>
  );
}

export default RedirectComponent;
