import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/AboutPage";
import LandingPage from "./components/Landing/LandingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
