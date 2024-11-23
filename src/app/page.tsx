import Navbar from "./navbar";
import Hero from "./hero";
import Tecnologies from "./technologies";
import Projects from "./projects";
import Footer from "./footer"
export default function Home() {
  return (
    <div className="m-0 flex">
      <Navbar />
      <main className="p-0 container mx-auto mt-16">
        <Hero />
        <Tecnologies />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
