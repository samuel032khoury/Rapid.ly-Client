import { motion } from "framer-motion";

const URLShortener = () => {
  return (
    <div className="mx-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-white/10 backdrop-blur-xl max-w-4xl mx-auto rounded-xl overflow-hidden mt-0 mb-16 border border-white/20 shadow-[0_8px_32px_0_rgba(31,38,135,0.2)] relative before:absolute before:content-[''] before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:rounded-xl"
      >
        <div className="p-8 relative">
          <h3 className="text-slate-800 font-bold text-xl mb-4">
            Shorten your URL instantly
          </h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Paste your long URL here..."
              className="flex-1 bg-blue-50/20 focus:bg-blue-50/30 backdrop-blur-sm border rounded-lg px-4 py-3 focus:outline-none focus:border-transparent focus:ring-inset focus:ring-2 focus:ring-blue-300/40 shadow-inner transition-colors duration-100 linear"
            />
            <button className="bg-blue-500/90 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-colors whitespace-nowrap shadow-lg hover:shadow-blue-400/20 backdrop-blur-sm">
              Shorten URL
            </button>
          </div>
          <div className="mt-3 pt-3 mb-0 pb-0 border-t border-purple-100/80">
            <p className="text-slate-300 text-sm">
              Your links will expire after 30 days. Create an account for
              permanent links.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default URLShortener;
