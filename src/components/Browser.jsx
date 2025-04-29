import { motion } from "framer-motion";
import React from "react";

const Browser = () => {
  const longUrl =
    "https://example.com/very-long-path/with-many-parameters?user=12345";
  const shortUrl = "https://rapid.ly/x7B9q";
  return (
    <div className="relative rounded-xl overflow-hidden shadow-xl drop-shadow-l bg-white border border-slate-400 z-10 min-h-96">
      <div className="absolute top-0 left-0 w-full h-6 bg-slate-100 rounded-t-xl flex items-center px-3 z-10">
        <div className="flex space-x-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
        </div>
      </div>
      <div className="w-full h-96 rounded aspect-video bg-slate-50 overflow-hidden pt-5">
        <div className="w-full h-10 bg-slate-100 border-b border-slate-200 flex items-center px-3">
          <div className="flex space-x-2 items-center text-slate-500 text-sm w-full">
            <div className="h-6 bg-white rounded flex-1 flex items-center px-2 border border-slate-300 overflow-hidden relative">
              <motion.div
                style={{
                  overflow: "hidden",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  position: "absolute",
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
                style={{
                  overflow: "hidden",
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  position: "absolute",
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
            className="my-8 md:mt-16 mx-auto w-full max-w-md bg-white rounded-lg shadow-md p-4 border border-slate-200"
          >
            <div className="flex justify-between items-center mb-3">
              <div className="text-sm font-medium text-slate-800">
                Link Generated!
              </div>
              <span className="text-xs text-blue-500 bg-blue-50 px-2 py-1 rounded">
                Copy
              </span>
            </div>
            <div className="overflow-hidden flex items-start md:items-center gap-3 flex-col md:flex-row">
              <div className="flex-1">
                <div className="text-xs text-slate-500 mb-1">Original URL</div>
                <div className="text-xs text-slate-700 overflow-ellipsis">
                  https://example.com/very-long-path/...
                </div>
              </div>
              <div className="text-slate-400 hidden md:block">→</div>
              <div className="text-slate-400 block md:hidden mx-auto">↓</div>
              <div className="flex-1">
                <div className="text-xs text-slate-500 mb-1">Short URL</div>
                <div className="text-sm text-blue-600 font-medium">
                  {shortUrl}
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
  );
};

export default Browser;
