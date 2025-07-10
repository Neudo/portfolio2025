import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import ReactGA from "react-ga4";
import "../App.css";
import Modal from "@/components/Modal";
import Hero from "@/components/Hero";
import SceneUi from "@/components/layout/ui/SceneUi";
import Experience from "@/three/Experience";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  useEffect(() => {
    document.body.classList.add("front-page");

    // Track page view
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });

    return () => {
      document.body.classList.remove("front-page");
    };
  }, []);

  return (
    <>
      {/* <LoadingScreen /> */}
      <Hero />
      <Modal />
      <SceneUi />
      <Experience />
    </>
  );
}
