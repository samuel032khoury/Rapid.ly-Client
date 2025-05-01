import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FEATURES_URL = "/features";
const PRICING_URL = "/pricing";
const ANALYTICS_URL = "/analytics";
const ABOUT_URL = "/about";
const LOGIN_URL = "/login";
const SIGNUP_URL = "/register";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverEnabled, setHoverEnabled] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setHoverEnabled(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header
      className={`${
        isMenuOpen ? "bg-white md:bg-white/70" : "bg-white/70"
      } sticky top-0 z-50 backdrop-blur-md border-b border-white/30 shadow-sm`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 ps-0 pe-4 md:px-4 lg:px-8">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center"
        >
          <Link
            to="/"
            className={`${
              hoverEnabled ? "md:hover:scale-110" : ""
            } transition-transform duration-700`}
          >
            <img
              src="/images/rapidly-logo.png"
              alt="rapid.ly logo"
              className="h-8"
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to={FEATURES_URL}
            className="text-slate-700 hover:text-blue-500 transition-colors font-medium"
          >
            Features
          </Link>
          <Link
            to={PRICING_URL}
            className="text-slate-700 hover:text-blue-500 transition-colors font-medium"
          >
            Pricing
          </Link>
          <Link
            to={ANALYTICS_URL}
            className="text-slate-700 hover:text-blue-500 transition-colors font-medium"
          >
            Analytics
          </Link>
          <Link
            to={ABOUT_URL}
            className="text-slate-700 hover:text-blue-500 transition-colors font-medium"
          >
            About
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 text-slate-700 hover:text-blue-500 transition-colors font-medium">
            <Link to={LOGIN_URL}>Login</Link>
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-medium">
            <Link to={SIGNUP_URL}>Sign Up Free</Link>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-[64px] left-0 right-0 bg-white shadow-lg rounded-b-2xl border-b border-slate-200 px-4 overflow-hidden transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen
            ? "max-h-96 py-4 opacity-100"
            : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-4">
          <Link
            to={FEATURES_URL}
            className="text-slate-700 hover:text-blue-500 transition-colors font-medium"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Features
          </Link>
          <Link
            to={PRICING_URL}
            className="text-slate-700 hover:text-blue-500 transition-colors font-medium"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Pricing
          </Link>
          <Link
            to={ANALYTICS_URL}
            className="text-slate-700 hover:text-blue-500 transition-colors font-medium"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            Analytics
          </Link>
          <Link
            to={ABOUT_URL}
            className="text-slate-700 hover:text-blue-500 transition-colors font-medium"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            About
          </Link>
          <div className="flex flex-col space-y-2 pt-2 border-t border-slate-200/70">
            <button
              className="px-4 py-2 text-slate-700 border border-slate-300/70 bg-white/30 backdrop-blur-sm rounded-md hover:bg-white/50 transition-colors font-medium"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Link to={LOGIN_URL}>Login</Link>
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-medium"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Link to={SIGNUP_URL}>Sign Up Free</Link>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
