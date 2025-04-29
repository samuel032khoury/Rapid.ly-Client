import { motion } from "framer-motion";

const Stats = () => {
  return (
    <div className="max-w-[100rem] mx-auto px-16">
      <section className="bg-gradient-to-r from-blue-300/90 to-blue-400/80 py-16 rounded-xl">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-white text-4xl font-bold">500M+</h3>
            <p className="text-blue-100 mt-2">Links shortened</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-white text-4xl font-bold">200K+</h3>
            <p className="text-blue-100 mt-2">Happy users</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-white text-4xl font-bold">99.9%</h3>
            <p className="text-blue-100 mt-2">Uptime reliability</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Stats;
