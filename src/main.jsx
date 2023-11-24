import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PatientKycContext from "./context/PatientKycContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PatientKycContext>
        <App />
      </PatientKycContext>
    </BrowserRouter>
  </React.StrictMode>
);
