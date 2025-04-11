import Container from "../../components/Container";
import Footer from "../../components/Footer";

import About from "../about/About";
import Connect from "../connect/Connect";
import Education from "../education/education";
import Experience from "../exper/experience";

import Hero from "../hero/hero";
import Projects from "../project/projects";

const Home = () => {
  return (
    <>
      <Container>
        <div className="flex flex-col gap-10 scroll-smooth">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Education />
          <Connect />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Home;