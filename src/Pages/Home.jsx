import Heroo from "../Component/Home/Heroo";
import BuildTogether from "../Component/Home/BuildTogether";
import Product from "../Component/Home/Product";
import Workon from "../Component/Home/Workon";
import Linkdln from "../Component/Home/Linkdln";
import Journey from "../Component/Home/Journey";
import Lookingfor from "../Component/Home/Lookingfor";
import Introduce from "../Component/Home/Introduce";
import Hero from "../Component/Home/Hero";
import "../";

const Home = () => {
  return (
    <>
      <div className="">
        <Heroo />
        <Introduce />
        <Product />
        <Workon />
        <BuildTogether />
        <Linkdln />
        <Journey />
        <Lookingfor />
      </div>
    </>
  );
};

export default Home;
