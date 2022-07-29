import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ToastContainer } from "material-react-toastify";
import { GlobalProvider } from "./context/Provider";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </GlobalProvider>
  </React.StrictMode>
);
