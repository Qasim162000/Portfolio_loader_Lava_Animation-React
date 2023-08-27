import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/UI/Navbar";
import Home from "./Components/Pages/Home";
import Education from "./Components/Pages/Education";
import Experience from "./Components/Pages/Experience";
import Projects from "./Components/Pages/Projects";
import ContactMe from "./Components/Pages/ContactMe";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact-me" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;
