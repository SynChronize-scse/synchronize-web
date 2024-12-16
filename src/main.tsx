import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/main.css";
// import Footer from "$lib/components/Footer.tsx";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import Loading from "$lib/components/Loading.tsx";

const ignoreRoutes = [""];

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<Loading text="Loading..." />}>
      <ReactLenis
        root
        options={{
          smoothWheel: !ignoreRoutes.includes(window.location.pathname),
        }}
      >
        <App />
        {/* <Footer /> */}
      </ReactLenis>
    </Suspense>
  </React.StrictMode>
);
