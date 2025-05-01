import { FaBolt, FaShieldAlt, FaChartPie, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-6xl mx-auto pt-16 pb-20 px-6 sm:px-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
            About Rapid.ly
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-slate-800 mb-8 leading-tight">
            <span className="text-gray-800 italic">Move faster with </span>
            <span className="text-blue-600 italic">Rapid.ly</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Rapid.ly is built for the next generation of link sharing — fast,
            reliable, and insightful. We believe great tools should be simple,
            beautiful, and lightning-quick.
          </p>
        </div>

        <div className="mb-24 bg-white rounded-2xl shadow-xl p-10 transform hover:scale-[1.01] transition-transform">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
            <span className="w-10 h-1 bg-blue-500 inline-block mr-4"></span>
            Our Mission
          </h2>
          <p className="text-gray-600 text-lg leading-8">
            At Rapid.ly, our mission is to empower creators, businesses, and
            individuals to share information seamlessly and intelligently. We
            aim to make link management effortless while providing deep insights
            that help you grow, connect, and perform better online.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">
          Why Choose Rapid.ly
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {[
            {
              icon: <FaBolt className="text-blue-500 text-4xl" />,
              title: "Lightning Fast",
              description:
                "Instant link shortening and redirects, powered by a modern, resilient infrastructure.",
            },
            {
              icon: <FaShieldAlt className="text-green-500 text-4xl" />,
              title: "Built with Trust",
              description:
                "Advanced encryption and security protocols ensure your data and links stay protected.",
            },
            {
              icon: <FaChartPie className="text-purple-500 text-4xl" />,
              title: "Smart Insights",
              description:
                "Dive into detailed analytics that uncover exactly how and where your links are performing.",
            },
            {
              icon: <FaRocket className="text-red-500 text-4xl" />,
              title: "Always Evolving",
              description:
                "We're constantly improving Rapid.ly with new features, better performance, and deeper insights.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl hover:translate-y-[-4px] flex flex-col items-center sm:items-start sm:flex-row sm:space-x-6"
            >
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-gray-50 mb-4 sm:mb-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 text-center sm:text-left">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center sm:text-left">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block px-8 py-5 rounded-full bg-blue-600 text-white font-bold text-lg cursor-pointer hover:bg-blue-700 transition-colors shadow-lg">
            <Link to="/register">Start using Rapid.ly today</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
