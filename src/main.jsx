import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PatientKycContext from "./context/PatientKycContext.jsx";
import AdminSidebarContext from "./context/AdminSidebarContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PatientKycContext>
        <AdminSidebarContext>
          <App />
        </AdminSidebarContext>
      </PatientKycContext>
    </BrowserRouter>
  </React.StrictMode>
);
