import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.jsx";
import ContextProvide from "./context/ContextProvide.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ContextProvide>
        <App />
      </ContextProvide>
    </BrowserRouter>
  </StrictMode>,
);
