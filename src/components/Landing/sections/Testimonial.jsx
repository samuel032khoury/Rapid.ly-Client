import { motion } from "framer-motion";

const Testimonial = () => {
  return (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto"
        >
          <svg
            className="h-8 w-8 text-blue-500 mb-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
          </svg>
          <p className="text-slate-700 text-lg mb-6 italic">
            "Rapid.ly has revolutionized our marketing campaigns. The short,
            memorable links are easy to share across all channels, and the
            analytics provide invaluable insights into customer engagement."
          </p>
          <div className="flex items-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 font-bold">
              JD
            </div>
            <div className="ml-4">
              <h4 className="font-bold text-slate-900">Jane Doe</h4>
              <p className="text-slate-600">Marketing Director, TechCorp</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
