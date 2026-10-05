import Navbar from "../components/navbar.jsx";
import Hero from "../components/hero.jsx";
import Projects from "../sections/projects.jsx";
import About from "../sections/about.jsx";
import Skills from "../sections/skills.jsx";
import Contact from "../sections/contact.jsx";
import Footer from "../components/footer.jsx";

function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
