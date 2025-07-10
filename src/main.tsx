// import { StrictMode } from 'react'  // Temporarily disabled
import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

import "./styles.css";
import reportWebVitals from "./reportWebVitals.ts";

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: any
    ) => void;
    dataLayer: any[];
  }
}

// Initialize Google Analytics
const initializeGA = () => {
  const GA_MEASUREMENT_ID = "G-16PE0QL6C0";

  // Create and append gtag script
  const gtagScript = document.createElement("script");
  gtagScript.async = true;
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gtagScript);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(
    _command: "config" | "event" | "js" | "set",
    _targetId: string | Date,
    _config?: any
  ) {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);
};

// Initialize GA
initializeGA();

// Create a new router instance
const router = createRouter({
  routeTree,
  context: {},
  defaultPreload: "intent",
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("app");
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    // Temporarily disabled StrictMode to prevent double mounting during dev
    // <StrictMode>
    <RouterProvider router={router} />
    // </StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
