import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Links?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Join thousands of marketers, content creators, and businesses who
            trust Rapid.ly for their link management needs.
          </p>
          <Link to={"/register"}>
            <button className="px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-bold text-lg transition-colors shadow-lg">
              Get Started For Free
            </button>
          </Link>
          <p className="text-blue-100 mt-4">
            No credit card required • Free plan available
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
