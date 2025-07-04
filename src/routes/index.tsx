import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
// import Header from "@/components/layout/Header";
import Hero from "@/components/Hero";
// import Footer from "@/components/layout/Footer";
// import Contact from "@/components/Contact";
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
