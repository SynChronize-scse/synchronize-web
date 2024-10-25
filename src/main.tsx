import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/main.css";
import Footer from "$lib/components/Footer.tsx";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactLenis root>
      <App />
      <Footer />
    </ReactLenis>
  </React.StrictMode>
);
