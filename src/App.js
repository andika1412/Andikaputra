import Home from "./Pages/Home";
import MyWork from "./Pages/MyWork";
import Navbar from "./Component/Navbar";
import ExperienceAndEducation from "./Pages/ExperienceAndEducation";
import NotFound from "./Pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Andikaputra/Home" element={<Home />} />
          <Route path="/Andikaputra" element={<Home />} />
          <Route path="/Andikaputra/MyWork" element={<MyWork />} />
          <Route path="/Andikaputra/ExperienceAndEducation" element={<MyWork />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
