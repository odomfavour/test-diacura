

import Nav from "../components/Nav";
import Footer from "../components/Footer";
import About from "../components/Home-page-Layout/About"
import Hero from "../components/Home-page-Layout/Hero"

import GenericLayouts from "../layouts/GenericLayouts";
import About from "../components/Home/About"
import Hero from "../components/Home/Hero"
import OurDashboard from "../components/Home/OurDashboard";
import OurDoctors from "../components/Home/OurDoctors";
import FrequentlyAskedQuestions from "../components/Home/FrequentlyAskedQuestions";
import Testimonials from "../components/Home/Testimonials";
import Services from "../components/Home/Services";
import Health from "../components/Home/Health";
import Diet from "../components/Home/Diet";



const Home = () => {
  return (
    <>
      {/* <p>Dia-Cura Homepage</p> */}
      <Nav />
      <Hero />
      <About />
      <Footer />

    </>
  )
}




export default Home;
