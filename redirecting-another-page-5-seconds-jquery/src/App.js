import React, { useState } from "react";

function App() {
  const [redirecting, setRedirecting] = useState(false);

  const handleClick = () => {
    setRedirecting(true);
    setTimeout(() => {
      window.location.href = "https://jbcodeapp.com";
    }, 5000);
  };

  return (
    <div>
      <h1>Redirecting to Another Page in 5 Seconds with jQuery</h1>
      {redirecting ? (
        <p>Redirecting soon....</p>
      ) : (
        <button onClick={handleClick}>Click to redirect</button>
      )}
    </div>
  );
}

export default App;
