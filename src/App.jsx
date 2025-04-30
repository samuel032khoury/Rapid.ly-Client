import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/Company/AboutPage";
import LandingPage from "./pages/Landing/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegisterPage from "./pages/RegisterPage";
import ScrollToTop from "./components/ScrollToTop";
import BlogPage from "./pages/Company/BlogPage";
import CareersPage from "./pages/Company/CareerPage";
import ContactPage from "./pages/Company/ContactPage";
import PrivacyPage from "./pages/Legal/PrivacyPage";
import TermsOfServicePage from "./pages/Legal/TOSPage";
import GDPRPage from "./pages/Legal/GDPRPage";
import CookiesPage from "./pages/Legal/CookiesPage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/gdpr" element={<GDPRPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
