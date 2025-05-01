import Browser from "@/components/Browser";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pb-6 md:pb-0">
      {/* Background gradient */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute top-48 -left-24 w-64 h-64 bg-blue-200 rounded-full opacity-40 blur-3xl"></div>
      <div className="container mx-auto px-4 py-8 lg:py-12 lg:pt8">
        <div className="lg:flex items-center justify-between gap-12">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                Simplify Your Links
              </span>
              <h1 className="font-bold text-slate-900 text-4xl lg:text-5xl leading-tight mb-6">
                Transform Long URLs into{" "}
                <span className="text-blue-500">Powerful</span> Short Links
              </h1>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Rapid.ly helps you create memorable, trackable links in seconds.
                Boost your click-through rates, gain valuable insights, and
                streamline your link management - all in one platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                >
                  <Link to="/register">Get Started — It's Free</Link>
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="px-6 py-3 border-2 border-slate-300 hover:border-blue-500 hover:text-blue-500 text-slate-700 rounded-lg font-medium transition-colors"
                >
                  Watch Demo
                </motion.button>
              </div>
            </motion.div>
          </div>
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-full"
            >
              {/* Browser Section */}
              <Browser />

              {/* Floating elements */}
              <motion.div
                initial={{ y: 10 }}
                animate={{ y: -10 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="absolute -top-8 right-14 w-16 h-16 bg-blue-200 rounded-full opacity-70 blur-xl z-0"
              ></motion.div>
              <motion.div
                initial={{ y: -5 }}
                animate={{ y: 15 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-10 left-10 w-20 h-20 bg-blue-300 rounded-xl opacity-60 blur-xl rotate-12 z-0"
              ></motion.div>
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: 10 }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute bottom-24 right-5 w-12 h-12 bg-blue-400 rounded-xl opacity-50 blur-xl -rotate-12 z-0"
              ></motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
