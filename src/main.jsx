import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../App";

import PlayerbarcontextProvider from './Context/Playerbarcontext';
// Global Css Style
import "./index.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlayerbarcontextProvider> {/* Correctly wraps App */}
      <App />
    </PlayerbarcontextProvider>
  </StrictMode>
);
