import { BrowserRouter, Routes, Route } from "react-router-dom";
import Caveat from "./components/Caveat";
import ScrollTop from "./components/ScrollTop";
import About from "./pages/About/About";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Blogs from "./pages/Blogs/Blogs";
import Contact from "./pages/Contact/Contact";
import Director from "./pages/Directors/Director";
import FAQ from "./pages/FAQ/FAQ";
import HeaderStyleSix from "./pages/HeaderStyleSix/HeaderStyleSix";
import Home from "./pages/Home/Home";
import Management from "./pages/Management/Management";
import Calculator from "./pages/PenManagement/Calculator";
import Portfolio from "./pages/Portfolio/Portfolio";
import PortfolioDetails from "./pages/PortfolioDetails/PortfolioDetails";
import Services from "./pages/Services/Services";
import ServicesDetails from "./pages/ServicesDetails/ServicesDetails";
import Team from "./pages/Team/Team";
import TeamDetails from "./pages/TeamDetails/TeamDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollTop />
        <Caveat />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/servicesDetails" element={<ServicesDetails />} />
          <Route path="/directors" element={<Director />} />
          <Route path="/management" element={<Management />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolioDetails" element={<PortfolioDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="/teamDetails/:teamId" element={<TeamDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/penCalculator" element={<Calculator />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
