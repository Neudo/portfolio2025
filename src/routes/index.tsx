import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
import Experience from "@/three/Experience";
import Modal from "@/components/Modal";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      {/* <Hero /> */}
      <Modal />
      <Experience />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}
