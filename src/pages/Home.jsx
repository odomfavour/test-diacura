
import GenericLayouts from "../layouts/GenericLayouts";
import About from "../components/Home-page-Layout/About"
import Hero from "../components/Home-page-Layout/Hero"
import OurDashboard from "../components/Home/OurDashboard";
import OurDoctors from "../components/Home/OurDoctors";
import FrequentlyAskedQuestions from "../components/Home/FrequentlyAskedQuestions";
import Testimonials from "../components/Home/Testimonials";
import Services from "../components/Home-page-Layout/Services";


const Home = () => {
  return (
    <GenericLayouts>
      <Hero />
      <About />
      <Services />
      <OurDashboard />
      <OurDoctors />
      <FrequentlyAskedQuestions align={"text-center"} />
      <Testimonials />
    </GenericLayouts>
  );
};




export default Home;
