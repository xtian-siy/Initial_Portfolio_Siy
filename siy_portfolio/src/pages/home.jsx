import Navbar from "../components/navbar.jsx";
import Hero from "../components/hero.jsx";
import Projects from "../sections/projects.jsx";
import About from "../sections/about.jsx";
import Experience from "../sections/experience.jsx";
import Skills from "../sections/skills.jsx";
import Contact from "../sections/contact.jsx";
import Footer from "../components/footer.jsx";

function Home() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
