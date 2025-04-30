import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img
              src="/images/rapidly-logo.png"
              alt="rapid.ly logo"
              className="h-8 mb-4 -mx-5"
            />
            <p className="text-slate-400 mt-4">
              Simplify your sharing, amplify your reach.
            </p>
            <div className="flex mt-4 space-x-4">
              <Link
                to="#"
                className="text-xl text-slate-400 hover:text-white transition-colors"
              >
                <FaTwitter />
              </Link>
              <Link
                to="#"
                className="text-xl text-slate-400 hover:text-white transition-colors"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="#"
                className="text-xl text-slate-400 hover:text-white transition-colors"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  API
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-white transition-colors">
                  Integration
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-service"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/gdpr" className="hover:text-white transition-colors">
                  GDPR
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="hover:text-white transition-colors"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} rapid.ly. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
