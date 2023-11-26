
import GenericLayouts from "../layouts/GenericLayouts";
import OurDashboard from "../components/Home/OurDashboard";
import OurDoctors from "../components/Home/OurDoctors";
import FrequentlyAskedQuestions from "../components/Home/FrequentlyAskedQuestions";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <GenericLayouts>
      <OurDashboard />
      <OurDoctors />
      <FrequentlyAskedQuestions align={"text-center"} />
      <Testimonials />
    </GenericLayouts>
  );
};

export default Home;
