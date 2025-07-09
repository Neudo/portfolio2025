import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
import Experience from "@/three/Experience";
import Modal from "@/components/Modal";
import Hero from "@/components/Hero";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <Hero />
      <Modal />
      <Experience />
    </>
  );
}
