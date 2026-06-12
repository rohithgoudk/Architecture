import { HashRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./Components/Mainlayout/Mainlayout";

import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login"
import Signup from "./Components/Signup/Signup"
import Dashboard from "./Components/Dashboard/Dashboard";
import Admindashboard from "./Components/Admindashboard/Admindashboard";
import Services from "./Components/Services/Services";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />


        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin-dashboard" element={<Admindashboard />} />


        {/* Any route not defined above will show 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;