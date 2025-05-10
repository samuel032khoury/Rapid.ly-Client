import { motion } from "framer-motion";

const Browser = () => {
  const longUrl =
    "https://example.com/very-long-path/with-many-parameters?user=12345";
  const shortUrl = "https://rapid.ly/x7B9q";

  return (
    <div className="relative rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-300 z-0 min-h-96 w-full max-w-3xl mx-auto">
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-slate-200 to-slate-100 rounded-t-xl flex items-center px-4 z-0">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500 shadow-inner"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-inner"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 shadow-inner"></div>
        </div>

        <div className="ml-4 px-3 py-1 bg-white rounded-t-lg text-xs text-slate-600 font-medium border-b-0 border-l border-r border-t border-slate-300">
          Rapid.ly
        </div>
      </div>

      <div className="w-full h-96 rounded aspect-video bg-white overflow-hidden pt-8">
        <div className="w-full h-10 bg-gradient-to-r from-slate-100 to-slate-50 border-b border-slate-200 flex items-center px-3">
          <div className="flex space-x-2 items-center text-slate-500 text-sm w-full">
            <div className="flex space-x-1 mr-2">
              <button className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-200">
                ←
              </button>
              <button className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-200">
                →
              </button>
            </div>

            <div className="h-7 bg-white rounded-md flex-1 flex items-center px-3 border border-slate-300 overflow-hidden relative shadow-inner">
              <div className="text-slate-400 mr-2">🔒</div>

              <motion.div
                style={{
                  overflow: "hidden",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  position: "absolute",
                  left: "30px",
                  right: "32px",
                  maxWidth: "calc(100% - 60px)",
                }}
                animate={{
                  width: [
                    `${longUrl.length}ch`, // type full long
                    `${longUrl.length}ch`, // hold
                    `0ch`, // start hiding
                    `0ch`, // hold
                    `0ch`, // hold
                  ],
                }}
                transition={{
                  duration: 5,
                  times: [0, 0.3, 0.5, 0.8, 1],
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                {longUrl}
              </motion.div>

              <motion.div
                style={{
                  overflow: "hidden",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  position: "absolute",
                  left: "30px",
                }}
                animate={{
                  width: [
                    `0ch`, // start hidden
                    `0ch`, // hold
                    `0ch`, // hold
                    `${shortUrl.length}ch`, // appear
                    `${shortUrl.length}ch`, // hold
                  ],
                }}
                transition={{
                  duration: 5,
                  times: [0, 0.3, 0.5, 0.8, 1],
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                <span className="text-blue-600 font-medium">{shortUrl}</span>
              </motion.div>

              <div className="absolute right-2 text-slate-400">⟳</div>
            </div>
          </div>
        </div>

        <div className="p-4 h-full bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          <motion.div
            id="logo"
            className="absolute w-full left-0 flex flex-col items-center justify-center"
            initial={{ y: "50%", top: "45%", transform: "translateY(-50%)" }}
            animate={{
              opacity: [1, 1, 1, 0.6, 0, 0, 0],
            }}
            transition={{
              duration: 5,
              times: [0, 0.2, 0.3, 0.4, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            <img
              src="/images/rapidly-logo.png"
              alt="rapid.ly logo"
              className="h-8 mx-auto"
            />
            <div className="text-sm text-slate-500 mt-2">
              Link shortening made simple
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{
              opacity: [0, 0, 0, 0, 0, 0.9, 1],
              y: [80, 80, 80, 80, 80, 0, 0],
            }}
            transition={{
              duration: 5,
              times: [0, 0.2, 0.3, 0.4, 0.5, 0.75, 1],
              ease: "easeOut",
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="my-1 mx-auto w-full max-w-md"
          >
            <div className="bg-white rounded-lg shadow-lg p-4 pb-3 border border-slate-200">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-2">
                    ✓
                  </div>
                  <div className="text-base font-medium text-slate-800">
                    Link Generated!
                  </div>
                </div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-xs text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full font-medium cursor-pointer hover:bg-blue-100 transition-colors"
                >
                  Copy Link
                </motion.div>
              </div>

              <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center md:space-x-4">
                <div className="flex-1 bg-slate-50 p-3 rounded-lg min-w-0">
                  <div className="text-xs text-slate-500 mb-1 font-medium">
                    Original URL
                  </div>
                  <div className="text-xs text-slate-700 overflow-hidden text-ellipsis whitespace-nowrap">
                    {longUrl}
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full text-blue-600">
                  →
                </div>

                <div className="flex-1 bg-blue-50 p-3 rounded-lg border border-blue-100 min-w-0">
                  <div className="text-xs text-slate-600 mb-1 font-medium">
                    Short URL
                  </div>
                  <div className="text-sm text-blue-600 font-medium flex items-center overflow-hidden text-ellipsis whitespace-nowrap">
                    {shortUrl}
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <div className="flex justify-between text-xs">
                  <div className="text-slate-500 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
                    Created just now
                  </div>
                  <div className="text-blue-600 font-medium cursor-pointer hover:text-blue-700">
                    View Analytics →
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block mt-8 xl:mt-5 bg-gradient-to-t from-blue-300/50 via-blue-200/50 to-blue-100/50 rounded-lg shadow-sm p-3 border border-blue-400">
              <div className="flex justify-center space-x-6 text-xs text-center">
                <div>
                  <div className="text-2xl font-bold text-slate-700">1.2M+</div>
                  <div className="text-slate-500">Links created</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-700">99.9%</div>
                  <div className="text-slate-500">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-700">5s</div>
                  <div className="text-slate-500">Avg. response</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Browser;
