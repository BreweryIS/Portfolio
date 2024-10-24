import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
};

export default App;
