import Blogs from "./comps/Blogs";
import Hero from "./comps/Hero";
import Projects from "./comps/Projects";


export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Blogs />
    </div>
  );
}
