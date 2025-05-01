import {
  FaBolt,
  FaChartLine,
  FaLink,
  FaShieldAlt,
  FaGlobe,
  FaMobileAlt,
  FaLock,
  FaTags,
  FaUserFriends,
  FaQrcode,
  FaRegClock,
  FaUserCheck,
  FaPuzzlePiece,
  FaRegChartBar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FeaturesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-6xl mx-auto pt-16 pb-20 px-6 sm:px-10">
        {/* Hero section */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
            Features
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-slate-800 mb-8 leading-tight">
            <span className="text-gray-800">Everything you need to </span>
            <span className="text-blue-600 italic">share smarter</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Rapid.ly is designed to help you share, track, and optimize your
            links with powerful features that make link management effortless.
          </p>
        </div>

        {/* Core Features */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Core Features
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl hover:translate-y-[-4px]">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaBolt className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Lightning Fast
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Links that load in milliseconds, with a global CDN ensuring
                speed from anywhere in the world.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">Global CDN distribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">
                    Optimized redirect technology
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">99.9% uptime guarantee</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl hover:translate-y-[-4px]">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaChartLine className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Detailed Analytics
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Real-time data on link performance, with insights on traffic
                sources, geographic distribution, and user behavior.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">
                    Real-time click tracking
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">
                    Geographic and device data
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">
                    Referrer and campaign analytics
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl hover:translate-y-[-4px]">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaLink className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Custom Links
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Create branded, memorable links that align with your identity
                and improve click-through rates.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">Custom domains</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">Branded URLs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">Vanity slugs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Feature Spotlight */}
        <div className="mb-24">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6 inline-block">
                  Feature Spotlight
                </span>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Unparalleled Link Intelligence
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Go beyond basic click tracking with our advanced link
                  intelligence system that provides comprehensive insights into
                  user interactions.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-green-100 mr-4">
                      <FaGlobe className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">
                        Geographic Insights
                      </h4>
                      <p className="text-gray-600">
                        View city-level location data with interactive heat maps
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-green-100 mr-4">
                      <FaMobileAlt className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">
                        Device & Browser Data
                      </h4>
                      <p className="text-gray-600">
                        Understand which platforms your audience uses
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-green-100 mr-4">
                      <FaRegChartBar className="text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">
                        Conversion Tracking
                      </h4>
                      <p className="text-gray-600">
                        See which links drive actual results with goal tracking
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center p-10">
                <div className="w-full h-96 bg-white/10 rounded-lg flex items-center justify-center text-white text-lg font-medium">
                  Analytics Dashboard Preview
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            More Powerful Features
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <FaShieldAlt className="text-blue-600 text-2xl" />,
                title: "Link Security",
                description:
                  "Protect your links with password protection, expiration dates, and geo-restrictions.",
              },
              {
                icon: <FaQrcode className="text-blue-600 text-2xl" />,
                title: "QR Code Generation",
                description:
                  "Create customizable QR codes for your links to bridge online and offline experiences.",
              },
              {
                icon: <FaUserFriends className="text-blue-600 text-2xl" />,
                title: "Team Collaboration",
                description:
                  "Work together with role-based permissions, shared workspaces, and activity logs.",
              },
              {
                icon: <FaTags className="text-blue-600 text-2xl" />,
                title: "Organization Tools",
                description:
                  "Keep your links organized with tags, folders, and smart search functionality.",
              },
              {
                icon: <FaRegClock className="text-blue-600 text-2xl" />,
                title: "Scheduled Links",
                description:
                  "Set links to activate or deactivate at specific times for timed campaigns.",
              },
              {
                icon: <FaUserCheck className="text-blue-600 text-2xl" />,
                title: "UTM Builder",
                description:
                  "Create and manage UTM parameters easily for precise campaign tracking.",
              },
              {
                icon: <FaLock className="text-blue-600 text-2xl" />,
                title: "HTTPS Everywhere",
                description:
                  "All links are secure with SSL encryption to build trust with your audience.",
              },
              {
                icon: <FaPuzzlePiece className="text-blue-600 text-2xl" />,
                title: "API Access",
                description:
                  "Integrate Rapid.ly with your existing tools through our robust API.",
              },
              {
                icon: <FaChartLine className="text-blue-600 text-2xl" />,
                title: "Custom Reports",
                description:
                  "Build and schedule custom reports to understand your link performance.",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 transition-all hover:shadow-xl hover:translate-y-[-4px]"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Integrations */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-slate-800 mb-6 text-center">
            Seamless Integrations
          </h2>
          <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12">
            Rapid.ly works with your favorite tools and platforms to create a
            smooth workflow.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Zapier",
              "Google Analytics",
              "Slack",
              "Mailchimp",
              "Salesforce",
              "WordPress",
              "HubSpot",
              "Shopify",
            ].map((integration, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center h-24 transition-all hover:shadow-lg"
              >
                <span className="font-bold text-slate-800">{integration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Comparison */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            How We Compare
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-4 px-6 text-left text-gray-500 font-medium">
                    Feature
                  </th>
                  <th className="py-4 px-6 text-center text-gray-500 font-medium">
                    Rapid.ly
                  </th>
                  <th className="py-4 px-6 text-center text-gray-500 font-medium">
                    Other Solutions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Link Speed", "Ultra-fast", "Variable"],
                  ["Custom Domains", "Unlimited", "Limited"],
                  ["Analytics Depth", "Advanced", "Basic"],
                  ["QR Code Customization", "Full", "Limited"],
                  ["Team Collaboration", "Built-in", "Add-on"],
                  ["API Access", "All plans", "Premium only"],
                  ["Link Protection", "Multiple methods", "Basic"],
                  ["99.9% Uptime", "Guaranteed", "Not guaranteed"],
                ].map(([feature, rapid, other], idx) => (
                  <tr key={idx} className="hover:bg-blue-50">
                    <td className="py-4 px-6 font-medium text-slate-800">
                      {feature}
                    </td>
                    <td className="py-4 px-6 text-center text-green-600 font-medium">
                      {rapid}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-500">
                      {other}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-600 rounded-2xl p-10 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to experience these features?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied users who have transformed their link
            sharing experience with Rapid.ly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/register"
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start for Free
            </Link>
            <a
              href="mailto:support@rapid.ly"
              className="bg-blue-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Schedule a Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
