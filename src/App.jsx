import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Navbar />
        <Home />
        <Hero />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
};

export default App;
