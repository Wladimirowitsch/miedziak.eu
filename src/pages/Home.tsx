import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import { About, Impact, Transformation, Career, Contact } from "@/sections/Content";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="site-shell min-h-screen">
      <Header />
      <Hero />
      <main className="mx-auto max-w-[1500px] px-5 sm:px-10 lg:px-16">
        <About />
        <Impact />
        <Transformation />
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
