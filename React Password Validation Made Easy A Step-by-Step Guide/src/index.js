import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DemoForm from "./DemoForm";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DemoForm />
  </React.StrictMode>
);
