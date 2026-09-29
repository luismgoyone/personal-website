import React, { useState } from "react";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar/navbar";
import Sidebar from "../../components/Sidebar/sidebar";
import About from "../../sections/about/about";
import AboutPartTwo from "../../sections/about/about-part-2";
import { aboutContentsOne, aboutContentsTwo } from "../../sections/about/Data";
import Home from "../../sections/home/home";
import Projects from "../../sections/projects/projects";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <Navbar toggleSidebar={toggleSidebar} />
      <Home />
      <About {...aboutContentsOne} />
      <AboutPartTwo {...aboutContentsTwo} />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </>
  );
};

export default MainPage;
