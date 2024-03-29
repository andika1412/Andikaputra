import Home from "./Pages/Home";
import MyWork from "./Pages/MyWork";
import Navbar from "./Component/Home/Navbar";
import ExperienceAndEducation from "./Pages/ExperienceAndEducation";
import NotFound from "./Pages/NotFound";
import TitikBaca from "./Component/MyWorkComponents/MyWorkList/TitikBaca";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Component/Home/Footer";
import CofeeHouse from "./Component/MyWorkComponents/MyWorkList/CofeeHouse";

const App = () => {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Andikaputra/Home" element={<Home />} />
          <Route path="/Andikaputra" element={<Home />} />
          <Route path="/Andikaputra/MyWork" element={<MyWork />} />
          <Route path="/Andikaputra/ExperienceAndEducation" element={<ExperienceAndEducation />} />
          <Route path="/Andikaputra/MyWork/TitikBaca" element={<TitikBaca />} />
          <Route path="/Andikaputra/MyWork/CofeeHouse" element={<CofeeHouse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
