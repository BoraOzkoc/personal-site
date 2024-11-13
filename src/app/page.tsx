import Navbar from "./navbar";
import Hero from "./hero";
import Tecnologies from "./technologies";
export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <Tecnologies />
    </div>
  );
}
