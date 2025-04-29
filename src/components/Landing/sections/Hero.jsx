import { motion } from "framer-motion";

const HeroSection = () => {
  // Ref no longer needed since we're not using video
  const longUrl =
    "https://example.com/very-long-path/with-many-parameters?user=12345";
  const shortUrl = "https://rapid.ly/x7B9q";

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background gradient */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute top-48 -left-24 w-64 h-64 bg-blue-200 rounded-full opacity-40 blur-3xl"></div>
      <div className="container mx-auto px-4 py-8 lg:py-12">
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
                  Get Started — It's Free
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
              <div className="relative rounded-xl overflow-hidden shadow-xl drop-shadow-l bg-white border border-slate-400 z-10">
                <div className="absolute top-0 left-0 w-full h-6 bg-slate-100 rounded-t-xl flex items-center px-3 z-10">
                  <div className="flex space-x-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="w-full rounded aspect-video bg-slate-50 overflow-hidden pt-5">
                  <div className="w-full h-10 bg-slate-100 border-b border-slate-200 flex items-center px-3">
                    <div className="flex space-x-2 items-center text-slate-500 text-sm w-full">
                      <div className="h-6 bg-white rounded flex-1 flex items-center px-2 border border-slate-300 overflow-hidden relative">
                        <motion.div
                          style={{
                            overflow: "hidden",
                            display: "inline-block",
                            whiteSpace: "nowrap",
                          }}
                          animate={{
                            width: [
                              `${longUrl.length}ch`, // type full long
                              `${longUrl.length}ch`, // hold
                              `0ch`,
                              `0ch`,
                              `0ch`,
                            ],
                          }}
                          transition={{
                            duration: 5,
                            times: [0, 0.3, 0.5, 0.8, 1],
                            ease: "linear",
                            repeat: Infinity,
                            repeatDelay: 2,
                          }}
                        >
                          {longUrl}
                        </motion.div>
                        <motion.div
                          className="absolute"
                          style={{
                            overflow: "hidden",
                            display: "inline-block",
                            whiteSpace: "nowrap",
                          }}
                          animate={{
                            width: [
                              `0ch`, // start hidden
                              `0ch`, // stay hidden while long types
                              `0ch`, // stay hidden while long holds
                              `${longUrl.length}ch`, // stay hidden while long holds
                              `${longUrl.length}ch`, // stay hidden while long holds
                            ],
                          }}
                          transition={{
                            duration: 5,
                            times: [0, 0.3, 0.5, 0.8, 1],
                            ease: "linear",
                            repeat: Infinity,
                            repeatDelay: 2,
                          }}
                        >
                          <span className="text-blue-500">{shortUrl}</span>
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Browser content */}
                  <div className="p-4 h-full">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: [0, 0, 0.6, 1, 1],
                      }}
                      transition={{
                        duration: 5,
                        times: [0, 0.6, 0.7, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                      className="mt-16 mx-auto w-full max-w-md bg-white rounded-lg shadow-md p-4 border border-slate-200"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <div className="text-sm font-medium text-slate-800">
                          Link Generated!
                        </div>
                        <span className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
                          Copy
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <div className="text-xs text-slate-500 mb-1">
                            Original URL
                          </div>
                          <div className="text-xs text-slate-700 truncate">
                            https://example.com/very-long-path/...
                          </div>
                        </div>
                        <div className="text-slate-400">→</div>
                        <div className="flex-1">
                          <div className="text-xs text-slate-500 mb-1">
                            Short URL
                          </div>
                          <div className="text-sm text-blue-600 font-medium">
                            ${shortUrl}
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 pt-3 border-t border-slate-100">
                        <div className="flex justify-between text-xs">
                          <div className="text-slate-500">Created just now</div>
                          <div className="text-blue-500">View Analytics →</div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

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
