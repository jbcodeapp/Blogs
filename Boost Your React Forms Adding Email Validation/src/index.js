import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css"; // Include Bootstrap CSS
import DemoForm from "./DemoForm";

ReactDOM.render(
    <React.StrictMode>
        <div className="container">
            <DemoForm />
        </div>
    </React.StrictMode>,
    document.getElementById("root")
);

serviceWorker.unregister();
