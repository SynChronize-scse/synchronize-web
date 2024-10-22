import AboutSection from "$lib/components/Home/AboutSection";
import LandingSection from "$lib/components/Home/LandingSection";
import StackedCards from "$lib/components/Home/StackedCards";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-10 justify-center bg-dark-400 text-white">
      <LandingSection />
      <AboutSection className="mt-24" />
      <StackedCards />
    </div>
  );
};

export default Home;
