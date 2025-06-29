import Image from "next/image";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Menu />
      <Testimonials />
      <About />
      <Footer />
    </main>
  );
}
