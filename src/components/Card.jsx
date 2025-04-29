import { motion } from "framer-motion";

const Card = ({ title, desc, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300 flex flex-col p-6 gap-4"
    >
      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-500">
        {icon}
      </div>
      <h3 className="text-slate-900 text-xl font-bold">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
};

export default Card;
