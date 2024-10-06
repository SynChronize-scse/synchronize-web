import Footer from "../components/Footer";
import LandingSection from "../components/Home/LandingSection";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-dark-400 text-white">
      <main>
        <LandingSection />
      </main>

      <Footer />
    </div>
  );
}

export default Home;