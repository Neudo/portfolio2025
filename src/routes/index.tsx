import { createFileRoute } from "@tanstack/react-router";
import "../App.css";
// import Header from "@/components/layout/Header";
// import Hero from "@/components/Hero";
// import Footer from "@/components/layout/Footer";
// import Contact from "@/components/Contact";
import Experience from "@/three/Experience";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      {/* <Header /> */}
      {/* <Hero /> */}
      <Experience />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </>
  );
}
