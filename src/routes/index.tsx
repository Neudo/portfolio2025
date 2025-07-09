import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import "../App.css";
import Experience from "@/three/Experience";
import Modal from "@/components/Modal";
import Hero from "@/components/Hero";
import SceneUi from "@/components/layout/ui/SceneUi";

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
      <Hero />
      <Modal />
      <SceneUi />
      <Experience />
    </>
  );
}
