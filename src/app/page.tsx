import Blogs from "./comps/Blogs";
import Footer from "./comps/Footer";
import Hero from "./comps/Hero";
import Newsletter from "./comps/Newsletter";
import Projects from "./comps/Projects";


export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Blogs />
      <Newsletter />
      <Footer />
    </div>
  );
}
