import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import SideIndex from "@/sections/SideIndex";
import { About, Experience, Focus, Contact } from "@/sections/Content";
import Footer from "@/sections/Footer";
import DotField from "@/components/DotField";

export default function Home() {
  return (
    <div className="min-h-screen">
      <DotField />
      <Header />
      <Hero />
      <main className="mx-auto grid max-w-[1500px] grid-cols-1 gap-x-16 px-5 py-12 sm:px-10 sm:py-16 lg:grid-cols-12 lg:px-16 lg:py-20">
        <div className="mb-10 lg:col-span-4 lg:mb-0">
          <SideIndex />
        </div>
        <div className="lg:col-span-8">
          <About />
          <Experience />
          <Focus />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
