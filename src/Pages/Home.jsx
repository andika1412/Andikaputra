import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import BuildTogether from "../Component/BuildTogether";
import Product from "../Component/Product";
import Workon from "../Component/Workon";
import Linkdln from "../Component/Linkdln";
import Journey from "../Component/Journey";
import Lookingfor from "../Component/Lookingfor";
import Introduce from "../Component/Introduce";
import Footer from "../Component/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Introduce />
      <Product />
      <Workon />
      <BuildTogether />
      <Linkdln />
      <Journey />
      <Lookingfor />
      <Footer />
    </>
  );
};

export default Home;
