import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
import Header from "@/components/layout/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/layout/Footer";
import Contact from "@/components/Contact";
import Scene from "@/three/Scene";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="App font-poppins">
      <Header />
      <Hero />
      <Scene />
      <Contact />
      <Footer />
    </div>
  );
}
