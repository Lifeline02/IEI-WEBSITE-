import { BrowserRouter, Routes, Route } from "react-router-dom";
import Caveat from "./components/Caveat";
import ScrollTop from "./components/ScrollTop";
import About from "./pages/About/About";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Blogs from "./pages/Blogs/Blogs";
import Career from "./pages/Career/Career";
import Branch from "./pages/Contact/Branches/Branches";
import Contact from "./pages/Contact/Contact";
import Director from "./pages/Directors/Director";
import FAQ from "./pages/FAQ/FAQ";
import MultiFundHome from "./pages/FundManagement/MultiFundHome";
import Home from "./pages/Home/Home";
import Management from "./pages/Management/Management";
import Calculator from "./pages/PenManagement/Calculator";
import BenefitPayment from "./pages/Retirement Plans/Benefit/BenefitPayment/BenefitPayment";
import Services from "./pages/Services/Services";
import ServicesDetails from "./pages/ServicesDetails/ServicesDetails";
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
          <Route path="/career" element={<Career />} />
          <Route path="/services" element={<Services />} />

          <Route path="/benefitPayment" element={<BenefitPayment />} />
          
          <Route path="/servicesDetails" element={<ServicesDetails />} />
          <Route path="/directors" element={<Director />} />
          <Route path="/management" element={<Management />} />
          <Route path="/teamDetails/:teamId" element={<TeamDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogDetails" element={<BlogDetails />} />
          <Route path="/penCalculator" element={<Calculator />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/branches" element={<Branch />} />
          <Route path="/multifund" element={<MultiFundHome />} />
          

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
