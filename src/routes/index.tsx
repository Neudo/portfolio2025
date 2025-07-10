import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
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
