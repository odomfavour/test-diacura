import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PatientKycContext from "./context/PatientKycContext.jsx";
import AdminSidebarContext from "./context/AdminSidebarContext.jsx";
import { UserRoleProvider } from "./context/UserRoleContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PatientKycContext>
        <AdminSidebarContext>
          <UserRoleProvider>
            <App />
          </UserRoleProvider>
        </AdminSidebarContext>
      </PatientKycContext>
    </BrowserRouter>
  </React.StrictMode>
);
