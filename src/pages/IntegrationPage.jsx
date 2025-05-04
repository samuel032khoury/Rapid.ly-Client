import {
  FaPuzzlePiece,
  FaRobot,
  FaMailBulk,
  FaShoppingCart,
  FaWordpress,
  FaSlack,
  FaRegLightbulb,
  FaChartBar,
  FaGlobe,
  FaSearch,
} from "react-icons/fa";
import { useState } from "react";

const IntegrationsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Integrations" },
    { id: "marketing", name: "Marketing" },
    { id: "ecommerce", name: "E-Commerce" },
    { id: "analytics", name: "Analytics" },
    { id: "productivity", name: "Productivity" },
    { id: "cms", name: "CMS" },
    { id: "social", name: "Social Media" },
  ];

  const integrations = [
    {
      id: 1,
      name: "Zapier",
      description:
        "Connect Rapid.ly with 3,000+ apps without any code using Zapier's automation platform.",
      category: "productivity",
      icon: "/images/zapier.png",
      featured: true,
      setupComplexity: "Easy",
    },
    {
      id: 2,
      name: "Google Analytics",
      description:
        "Sync your link data with Google Analytics for comprehensive campaign tracking and reporting.",
      category: "analytics",
      icon: "/images/google-analytics.png",
      featured: true,
      setupComplexity: "Medium",
    },
    {
      id: 3,
      name: "Mailchimp",
      description:
        "Automatically shorten links in your email campaigns and track click performance.",
      category: "marketing",
      icon: "/images/mailchimp.png",
      featured: false,
      setupComplexity: "Easy",
    },
    {
      id: 4,
      name: "HubSpot",
      description:
        "Create and track shortened links directly from your HubSpot dashboard.",
      category: "marketing",
      icon: "/images/hubspot.png",
      featured: true,
      setupComplexity: "Medium",
    },
    {
      id: 5,
      name: "WordPress",
      description:
        "Add link shortening functionality to your WordPress site with our official plugin.",
      category: "cms",
      icon: "/images/wordpress.png",
      featured: false,
      setupComplexity: "Easy",
    },
    {
      id: 6,
      name: "Shopify",
      description:
        "Track product links and create custom short URLs for your e-commerce store.",
      category: "ecommerce",
      icon: "/images/shopify.png",
      featured: false,
      setupComplexity: "Medium",
    },
    {
      id: 7,
      name: "Slack",
      description:
        "Shorten links and view analytics without leaving your team's Slack workspace.",
      category: "productivity",
      icon: "/images/slack.png",
      featured: false,
      setupComplexity: "Easy",
    },
    {
      id: 8,
      name: "Buffer",
      description:
        "Schedule social media posts with automatically shortened and tracked links.",
      category: "social",
      icon: "/images/buffer.png",
      featured: false,
      setupComplexity: "Easy",
    },
    {
      id: 9,
      name: "Google Chrome Extension",
      description:
        "Shorten links from any webpage with our Chrome browser extension.",
      category: "productivity",
      icon: "/images/chrome.png",
      featured: true,
      setupComplexity: "Easy",
    },
    {
      id: 10,
      name: "Salesforce",
      description:
        "Create and manage shortened links directly within your Salesforce CRM.",
      category: "marketing",
      icon: "/images/salesforce.png",
      featured: false,
      setupComplexity: "Complex",
    },
    {
      id: 11,
      name: "Adobe Analytics",
      description:
        "Integrate link data with Adobe Analytics for deeper audience insights.",
      category: "analytics",
      icon: "/images/adobe-analytics.png",
      featured: false,
      setupComplexity: "Complex",
    },
    {
      id: 12,
      name: "Marketo",
      description:
        "Enhance your marketing automation with trackable shortened links.",
      category: "marketing",
      icon: "/images/marketo.png",
      featured: false,
      setupComplexity: "Medium",
    },
    {
      id: 13,
      name: "WooCommerce",
      description:
        "Add link shortening and tracking to your WooCommerce store.",
      category: "ecommerce",
      icon: "/images/woocommerce.png",
      featured: false,
      setupComplexity: "Medium",
    },
    {
      id: 14,
      name: "Hootsuite",
      description:
        "Manage and track shortened links across your social media campaigns.",
      category: "social",
      icon: "/images/hootsuite.png",
      featured: false,
      setupComplexity: "Easy",
    },
    {
      id: 15,
      name: "Microsoft Teams",
      description:
        "Create and share shortened links directly in your Teams conversations.",
      category: "productivity",
      icon: "/images/microsoft-teams.png",
      featured: false,
      setupComplexity: "Easy",
    },
  ];

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesSearch =
      integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || integration.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredIntegrations = integrations.filter(
    (integration) => integration.featured
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-6xl mx-auto pt-16 pb-20 px-6 sm:px-10">
        {/* Hero section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
            Integrations
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-slate-800 mb-8 leading-tight">
            <span className="text-gray-800">Connect your </span>
            <span className="text-blue-600 italic">favorite tools</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Rapid.ly integrates with the tools you already use. Enhance your
            workflow with our powerful integrations and automations.
          </p>
        </div>

        {/* Featured integrations */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Popular Integrations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredIntegrations.map((integration) => (
              <div
                key={integration.id}
                className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl hover:translate-y-[-4px]"
              >
                <div className="h-16 w-16 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                  {/* Placeholder for integration icon */}
                  <span className="text-xl font-bold text-gray-400">
                    {integration.name.substring(0, 2)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {integration.name}
                </h3>
                <p className="text-gray-600 mb-6">{integration.description}</p>
                <div className="flex justify-between items-center">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                    {integration.setupComplexity} Setup
                  </span>
                  <a
                    href="#"
                    className="text-blue-600 font-medium hover:underline"
                  >
                    Learn more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Integration directory */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Integration Directory
          </h2>

          {/* Search and filter */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="relative flex-grow max-w-lg">
                <input
                  type="text"
                  placeholder="Search integrations..."
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Integration grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.map((integration) => (
              <div
                key={integration.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-sm font-bold text-gray-400">
                      {integration.name.substring(0, 2)}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {integration.name}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {integration.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full capitalize">
                    {integration.category}
                  </span>
                  <a
                    href="#"
                    className="text-blue-600 font-medium hover:underline text-sm"
                  >
                    View details
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredIntegrations.length === 0 && (
            <div className="text-center py-12">
              <FaRegLightbulb className="text-gray-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                No integrations found
              </h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria. If you're looking
                for a specific integration that's not listed, please{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  contact us
                </a>
                .
              </p>
            </div>
          )}
        </div>

        {/* Integration categories */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Explore by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Marketing Automation",
                icon: <FaMailBulk className="text-purple-600 text-3xl" />,
                count: 12,
              },
              {
                name: "E-Commerce",
                icon: <FaShoppingCart className="text-green-600 text-3xl" />,
                count: 8,
              },
              {
                name: "Analytics & Reporting",
                icon: <FaChartBar className="text-blue-600 text-3xl" />,
                count: 9,
              },
              {
                name: "Content Management",
                icon: <FaWordpress className="text-orange-600 text-3xl" />,
                count: 6,
              },
              {
                name: "Team Collaboration",
                icon: <FaSlack className="text-pink-600 text-3xl" />,
                count: 7,
              },
              {
                name: "Marketing Automation",
                icon: <FaRobot className="text-red-600 text-3xl" />,
                count: 4,
              },
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.count} integrations</p>
              </div>
            ))}
          </div>
        </div>

        {/* Zapier spotlight */}
        <div className="mb-24">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6 inline-block">
                  Featured Integration
                </span>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Connect Rapid.ly with 3,000+ Apps via Zapier
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  No coding required. Create powerful automations between
                  Rapid.ly and thousands of popular apps with Zapier's
                  easy-to-use integration platform.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-green-100 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">
                        Automate Link Creation
                      </h4>
                      <p className="text-gray-600">
                        Automatically create shortened links when you publish
                        content or products
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-green-100 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">
                        Track Click Performance
                      </h4>
                      <p className="text-gray-600">
                        Send click data to your analytics tools or team
                        communication channels
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-green-100 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 mb-1">
                        Trigger Custom Workflows
                      </h4>
                      <p className="text-gray-600">
                        Start workflows in other apps when links are clicked or
                        created
                      </p>
                    </div>
                  </li>
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  Explore Zapier integration
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
              <div className="lg:w-1/2 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center p-10">
                <div className="w-full max-w-md h-96 bg-white/10 rounded-lg flex items-center justify-center text-white text-lg font-medium">
                  Zapier Integration Preview
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Build your own integration */}
        <div className="mb-24">
          <div className="bg-blue-600 rounded-2xl p-10 text-center shadow-xl">
            <FaPuzzlePiece className="text-white text-5xl mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a custom integration?
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto mb-8">
              Build your own integration using our comprehensive API. Our
              developer documentation includes everything you need to create
              powerful custom integrations.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="#"
                className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View API Documentation
              </a>
              <a
                href="#"
                className="bg-blue-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors"
              >
                Contact for Enterprise Solutions
              </a>
            </div>
          </div>
        </div>

        {/* Success stories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Integration Success Stories
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  How Company XYZ increased click-through rates by 37% with
                  HubSpot integration
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how this marketing agency optimized their campaigns by
                  connecting Rapid.ly with their HubSpot workflow.
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read case study →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  E-commerce brand saves 10 hours per week with Shopify
                  automation
                </h3>
                <p className="text-gray-600 mb-4">
                  See how this growing brand automated their product link
                  management across multiple channels.
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Read case study →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Integration FAQs */}
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                question: "Do I need to be a developer to use integrations?",
                answer:
                  "No, most of our integrations are designed to be user-friendly and require no coding skills. Many integrations work right out of the box with minimal setup, especially our Zapier integration which uses a visual interface.",
              },
              {
                question: "Are integrations available on all plans?",
                answer:
                  "Basic integrations are available on all plans, including our free tier. Advanced integrations like Salesforce and Adobe Analytics are available on our Pro and Business plans. Check our pricing page for details.",
              },
              {
                question: "Can I request a custom integration?",
                answer:
                  "Yes! Enterprise customers can request custom integrations tailored to their specific needs. Contact our sales team to discuss your requirements and explore custom integration options.",
              },
              {
                question: "How secure are your integrations?",
                answer:
                  "All of our integrations use secure authentication methods like OAuth where possible. We never store third-party passwords and all data transfers are encrypted using industry-standard protocols.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationsPage;
