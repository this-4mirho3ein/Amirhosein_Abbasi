import Experiences from "@/components/Experience";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MyProjects from "@/components/MyProjects";
import TopSkills from "@/components/TopSkills";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <TopSkills />
      <Experiences />
      <MyProjects />
      <Footer />
    </div>
  );
};

export default Home;
