import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/30 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 ps-0 pe-4 md:px-4 lg:px-8">
        <motion.div
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center"
        >
          <a
            href="/"
            className={`${
              hoverEnabled ? "md:hover:scale-110" : ""
            } transition-transform duration-700`}
          >
            <img
              src="/images/rapidly-logo.png"
              alt="rapid.ly logo"
              className="h-8"
            />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-slate-700 hover:text-blue-500 transition-colors font-medium"
          >
            Features
          </a>
          <a
            href="#"
            className="text-slate-700 hover:text-blue-500 transition-colors font-medium"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-slate-700 hover:text-blue-500 transition-colors font-medium"
          >
            Analytics
          </a>
          <a
            href="#"
            className="text-slate-700 hover:text-blue-500 transition-colors font-medium"
          >
            Blog
          </a>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <button className="px-4 py-2 text-slate-700 hover:text-blue-500 transition-colors font-medium">
            Login
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-medium">
            Sign Up Free
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

      {/* Mobile Navigation - Overlapping Menu */}
      <div
        className={`md:hidden fixed top-[64px] left-0 right-0 bg-white shadow-lg rounded-b-2xl border-b border-slate-200 px-4 overflow-hidden transition-all duration-300 ease-in-out z-40 ${
          isMenuOpen
            ? "max-h-96 py-4 opacity-100"
            : "max-h-0 py-0 opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-4">
          <a
            href="#"
            className="text-slate-700 hover:text-blue-500 transition-colors font-medium"
          >
            Features
          </a>
          <a
            href="#"
            className="text-slate-700 hover:text-blue-500 transition-colors font-medium"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-slate-700 hover:text-blue-500 transition-colors font-medium"
          >
            Analytics
          </a>
          <a
            href="#"
            className="text-slate-700 hover:text-blue-500 transition-colors font-medium"
          >
            Blog
          </a>
          <div className="flex flex-col space-y-2 pt-2 border-t border-slate-200/70">
            <button className="px-4 py-2 text-slate-700 border border-slate-300/70 bg-white/30 backdrop-blur-sm rounded-md hover:bg-white/50 transition-colors font-medium">
              Login
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-medium">
              Sign Up Free
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
