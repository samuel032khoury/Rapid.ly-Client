import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaExclamationTriangle,
  FaGlobe,
  FaMobileAlt,
  FaRegClock,
  FaRegEye,
  FaRegLightbulb,
  FaTags,
} from "react-icons/fa";

const AnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-6xl mx-auto pt-16 pb-20 px-6 sm:px-10">
        {/* Hero section */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
            Analytics & Insights
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-slate-800 mb-8 leading-tight">
            <span className="text-gray-800">Powerful </span>
            <span className="text-blue-600 italic">analytics</span>
            <span className="text-gray-800"> for smarter decisions</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Transform your link data into actionable insights. Understand your
            audience, optimize campaigns, and maximize click-through rates.
          </p>
        </div>

        {/* Analytics overview */}
        <div className="mb-24">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Data-Driven Link Management
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Rapid.ly provides comprehensive analytics for every link you
                  create. Track performance in real-time and gain valuable
                  insights to optimize your marketing and communication
                  strategies.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                        <FaChartBar className="text-blue-600" />
                      </div>
                      <h3 className="font-bold text-slate-800">
                        Click Tracking
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Measure link performance with precise click data
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <FaGlobe className="text-green-600" />
                      </div>
                      <h3 className="font-bold text-slate-800">
                        Geographic Data
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      See where your audience is located globally
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <FaMobileAlt className="text-purple-600" />
                      </div>
                      <h3 className="font-bold text-slate-800">
                        Device Analytics
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Understand which devices your audience uses
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                        <FaRegClock className="text-orange-600" />
                      </div>
                      <h3 className="font-bold text-slate-800">
                        Temporal Insights
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Identify peak times when your links get the most clicks
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/2 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center p-10">
                <div className="w-full h-96 bg-white/10 rounded-lg flex items-center justify-center text-white text-lg font-medium">
                  Analytics Dashboard Preview
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key analytics features */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Key Analytics Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl hover:translate-y-[-4px]">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaRegEye className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Comprehensive Visibility
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Track every aspect of your link performance with detailed
                metrics and visualizations that provide complete transparency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">
                    Real-time click tracking
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">
                    Historical performance data
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">
                    Custom date range analysis
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl hover:translate-y-[-4px]">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaGlobe className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Audience Insights
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Understand who's clicking your links with detailed demographic
                and technical information about your audience.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">
                    Geographic location data
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">
                    Device and browser details
                  </span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">
                    Referrer source tracking
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 transition-all hover:shadow-xl hover:translate-y-[-4px]">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <FaChartLine className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">
                Advanced Reporting
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Generate customized reports to share with stakeholders or export
                data for deeper analysis in your preferred tools.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">Scheduled email reports</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">CSV and PDF exports</span>
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  <span className="text-gray-600">
                    API access for custom integrations
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Geographic analytics */}
        <div className="mb-24">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row-reverse">
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Geographic Intelligence
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Discover where your audience is located with detailed
                  geographic analytics. From country-level overview to
                  city-specific insights, understand the global footprint of
                  your content.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
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
                      <h4 className="font-bold text-slate-800">
                        Global Heat Maps
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Interactive visualizations showing click density across
                        regions
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
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
                      <h4 className="font-bold text-slate-800">
                        Country and City Data
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Drill down to specific locations to understand regional
                        performance
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
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
                      <h4 className="font-bold text-slate-800">
                        Regional Comparison
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Compare link performance across different geographic
                        areas
                      </p>
                    </div>
                  </li>
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 font-medium hover:underline"
                >
                  Learn more about geographic analytics
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
              <div className="lg:w-1/2 bg-gray-100 flex items-center justify-center p-10">
                <div className="w-full h-96 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-500">
                  World Map Visualization
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Device and platform */}
        <div className="mb-24">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Device & Platform Insights
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Understand how your audience is accessing your content with
                  detailed device and platform analytics. Optimize your content
                  for the platforms your audience uses most.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
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
                      <h4 className="font-bold text-slate-800">
                        Device Breakdown
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Track usage across desktop, mobile, and tablet devices
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
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
                      <h4 className="font-bold text-slate-800">Browser Data</h4>
                      <p className="text-gray-600 text-sm">
                        See which browsers your audience prefers
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
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
                      <h4 className="font-bold text-slate-800">
                        Operating System Insights
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Understand the OS distribution of your audience
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 bg-gray-100 flex items-center justify-center p-10">
                <div className="w-full h-96 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-500">
                  Device Distribution Chart
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Temporal analytics */}
        <div className="mb-24">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row-reverse">
              <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  Temporal Analytics
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Identify patterns in when your links are most effective.
                  Understand the best times to share content and optimize your
                  scheduling for maximum engagement.
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
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
                      <h4 className="font-bold text-slate-800">
                        Time-of-Day Analysis
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Find the peak hours when your audience is most engaged
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
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
                      <h4 className="font-bold text-slate-800">
                        Day-of-Week Trends
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Discover which days generate the most clicks
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
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
                      <h4 className="font-bold text-slate-800">
                        Seasonal Patterns
                      </h4>
                      <p className="text-gray-600 text-sm">
                        Identify long-term patterns and seasonal trends
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="lg:w-1/2 bg-gray-100 flex items-center justify-center p-10">
                <div className="w-full h-96 bg-white rounded-lg shadow-md flex items-center justify-center text-gray-500">
                  Temporal Analysis Chart
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campaign tracking */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Campaign & UTM Tracking
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
                    <FaTags className="text-purple-600 text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800">
                    Track Marketing Performance
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Rapid.ly's UTM parameter support helps you track the
                  effectiveness of your marketing campaigns across different
                  channels. Understand which campaigns, sources, and content
                  drive the most engagement.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">
                      Automatic UTM parameter tracking
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">
                      Campaign comparison reports
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">
                      Source and medium analytics
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">
                      Custom campaign parameter support
                    </span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2 bg-gray-100 rounded-lg p-6">
                <h4 className="font-bold text-slate-800 mb-4">
                  Sample UTM Tracking Report
                </h4>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-800">
                        Spring Sale Campaign
                      </span>
                      <span className="text-green-600 font-medium">
                        4,250 clicks
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>utm_campaign=spring_sale</span>
                      <span>25% conversion rate</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-800">
                        Newsletter
                      </span>
                      <span className="text-green-600 font-medium">
                        2,845 clicks
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>utm_source=email</span>
                      <span>18% conversion rate</span>
                    </div>
                  </div>
                  <div className="bg-white p-4 rounded shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-800">
                        Social Media
                      </span>
                      <span className="text-green-600 font-medium">
                        1,920 clicks
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>utm_source=instagram</span>
                      <span>12% conversion rate</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Custom reports */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Custom Reports & Dashboards
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <FaChartPie className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Tailored Dashboards
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Create customized dashboards to track the metrics that matter
                  most to your business. Display your most important KPIs in a
                  single view for quick monitoring.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">
                      Drag-and-drop dashboard creator
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">
                      Multiple visualization options
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">
                      Share dashboards with team members
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Learn more →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                    <FaRegClock className="text-blue-600 text-xl" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Scheduled Reports
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Set up automated reports to be delivered to your inbox or your
                  team's at regular intervals. Stay updated without having to
                  log in.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">
                      Daily, weekly, or monthly scheduling
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">
                      Multiple export formats (PDF, CSV, Excel)
                    </span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">
                      Customizable recipients and messaging
                    </span>
                  </li>
                </ul>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Learn more →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Data security */}
        <div className="mb-24">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/4 flex justify-center mb-6 md:mb-0">
                <div className="w-24 h-24 rounded-full bg-red-100 flex items-center justify-center">
                  <FaExclamationTriangle className="text-red-600 text-4xl" />
                </div>
              </div>
              <div className="md:w-3/4 md:pl-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Data Privacy & Security
                </h3>
                <p className="text-gray-600 mb-6">
                  We take data security seriously. All analytics data is
                  collected and stored in compliance with major privacy
                  regulations, including GDPR and CCPA. Your data and your
                  users' privacy are protected.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">
                      GDPR and CCPA compliant
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">
                      Encrypted data storage
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">
                      Anonymous tracking options
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span className="text-gray-600">
                      Data retention controls
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="bg-blue-600 rounded-2xl p-10 text-center shadow-xl">
          <FaRegLightbulb className="text-white text-4xl mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to gain insights from your links?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Start making data-driven decisions with Rapid.ly's powerful
            analytics. Sign up today for a free account.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start For Free
            </a>
            <a
              href="#"
              className="bg-blue-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors"
            >
              View Demo Dashboard
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
