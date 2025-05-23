import { Outlet, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import GlobalToaster from "./components/GlobalToaster";
import Header from "./components/Header";
import ScrollToTop from "./helper/ScrollToTop";
import AnalyticsPage from "./pages/AnalyticsPage";
import APIPage from "./pages/APIPage";
import AboutPage from "./pages/Company/AboutPage";
import BlogPage from "./pages/Company/BlogPage";
import CareersPage from "./pages/Company/CareerPage";
import ContactPage from "./pages/Company/ContactPage";
import DashboardPage from "./pages/DashboardPage";
import FeaturesPage from "./pages/FeaturesPage";
import IntegrationsPage from "./pages/IntegrationPage";
import LandingPage from "./pages/Landing/LandingPage";
import CookiesPage from "./pages/Legal/CookiesPage";
import GDPRPage from "./pages/Legal/GDPRPage";
import PrivacyPage from "./pages/Legal/PrivacyPage";
import TermsOfServicePage from "./pages/Legal/TOSPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import PricingPage from "./pages/PricingPages";
import RegisterPage from "./pages/RegisterPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import UrlRedirectionPage from "./pages/UrlRedirectionPage";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="min-w-[380px]">
      <GlobalToaster />
      <ScrollToTop />
      <Routes>
        <Route path="/s/:url" element={<UrlRedirectionPage />} />
        <Route element={<Layout />}>
          <Route path="" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/developer/api" element={<APIPage />} />
          <Route path="/developer/integration" element={<IntegrationsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/gdpr" element={<GDPRPage />} />
          <Route path="/cookies" element={<CookiesPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
