import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import BuildTogether from "../Component/BuildTogether";
import Product from "../Component/Product";
import Workon from "../Component/Workon";
import Linkdln from "../Component/Linkdln";
import Journey from "../Component/Journey";
import Lookingfor from "../Component/Lookingfor";
import Introduce from "../Component/Introduce";
import Heroo from "../Component/Heroo";
import Footer from "../Component/Footer";

const Home = () => {
  return (
    <div className="">
      <div className="sticky top-0 z-40">
        <Navbar />
      </div>
      <Hero />
      <Introduce />
      <Product />
      <Workon />
      <BuildTogether />
      <Linkdln />
      <Journey />
      <Lookingfor />
      <Footer />
    </div>
  );
};

export default Home;
