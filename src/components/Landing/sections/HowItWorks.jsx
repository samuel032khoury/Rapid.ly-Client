import { motion } from "framer-motion";

const HowItWorksSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
            How Rapid.ly Works
          </h2>
          <p className="text-slate-600 text-lg">
            Get started in seconds with our intuitive three-step process
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
              1
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Paste your URL
            </h3>
            <p className="text-slate-600">
              Copy and paste your long URL into our shortener, and we'll
              instantly transform it into a concise, memorable link.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
              2
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Customize and Share
            </h3>
            <p className="text-slate-600">
              Personalize your link with custom aliases, UTM parameters, and
              expiration dates before sharing across any platform.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
              3
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Track and Analyze
            </h3>
            <p className="text-slate-600">
              Monitor performance with real-time analytics and gain valuable
              insights about your audience to optimize your marketing strategy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
