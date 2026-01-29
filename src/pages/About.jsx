import Certifications from "../components/Certifications";
import Footer from "../components/Footer";
import SchoolPath from "../components/SchoolPath";
import WelcomeAbout from "../components/WelcomeAbout";
import Projects from "../components/Projects";
import Stack from "../components/Stack";
const About = () => {
  return (
    <div className="relative w-full min-h-screen bg-black-100">
      <WelcomeAbout />
      <SchoolPath />
      <Certifications />
      <Projects />
      <Stack />
      <Footer />
    </div>
  );
};

export default About;
