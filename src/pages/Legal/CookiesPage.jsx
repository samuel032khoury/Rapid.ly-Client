import {
  FaCookieBite,
  FaToggleOn,
  FaLock,
  FaQuestionCircle,
} from "react-icons/fa";

const CookiesPage = () => {
  const lastUpdated = "April 15, 2025";

  const cookieTypes = [
    {
      id: "essential",
      name: "Essential",
      description: "Necessary for website functionality. Cannot be disabled.",
      required: true,
      cookies: [
        {
          name: "session_id",
          purpose: "Maintains your browsing session",
          duration: "Session",
        },
        {
          name: "auth_token",
          purpose: "Keeps you logged in",
          duration: "30 days",
        },
        {
          name: "csrf_token",
          purpose: "Protects against cross-site request forgery",
          duration: "Session",
        },
      ],
    },
    {
      id: "functional",
      name: "Functional",
      description: "Enables personalized features and preferences.",
      required: false,
      cookies: [
        {
          name: "language_pref",
          purpose: "Saves language preference",
          duration: "1 year",
        },
        {
          name: "ui_theme",
          purpose: "Remembers light/dark mode setting",
          duration: "1 year",
        },
        {
          name: "recent_links",
          purpose: "Stores recently shortened links",
          duration: "30 days",
        },
      ],
    },
    {
      id: "analytics",
      name: "Analytics",
      description:
        "Helps improve our website by tracking anonymous usage data.",
      required: false,
      cookies: [
        {
          name: "_ga",
          purpose: "Google Analytics - distinguishes users",
          duration: "2 years",
        },
        {
          name: "_ga_*",
          purpose: "Google Analytics - tracks session state",
          duration: "2 years",
        },
        {
          name: "_heap_*",
          purpose: "Heap Analytics - analyzes user behavior",
          duration: "1 year",
        },
      ],
    },
    {
      id: "targeting",
      name: "Targeting/Advertising",
      description: "Delivers relevant ads and marketing campaigns.",
      required: false,
      cookies: [
        {
          name: "_fbp",
          purpose: "Facebook advertising",
          duration: "3 months",
        },
        {
          name: "_gcl_au",
          purpose: "Google Adsense tracking",
          duration: "3 months",
        },
        {
          name: "_rdt_uuid",
          purpose: "Reddit advertising",
          duration: "3 months",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-4xl mx-auto pt-16 pb-20 px-6 sm:px-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
            Cookie Policy
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-800 mb-4 leading-tight">
            <span className="text-gray-800">How we use </span>
            <span className="text-blue-600 italic">cookies</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            This policy explains how Rapid.ly uses cookies to recognize you when
            you visit our website.
          </p>
          <p className="text-gray-500 mt-2">Last updated: {lastUpdated}</p>
        </div>

        {/* What are cookies explanation */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row items-start sm:space-x-6 p-6 bg-white rounded-xl shadow-md">
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 mb-4 sm:mb-0">
              <FaCookieBite className="text-blue-600 text-xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                What are cookies?
              </h2>
              <p className="text-gray-600">
                Cookies are small text files stored on your device that help
                websites remember your preferences, maintain your session, and
                personalize your experience. We also use similar technologies
                like pixels and local storage.
              </p>
            </div>
          </div>
        </div>

        {/* Main content with better spacing and readability */}
        <div className="mb-12 bg-white rounded-xl shadow-md p-8">
          {/* Why We Use Cookies - More scannable */}
          <div className="mb-10">
            <h2
              className="text-2xl font-bold text-slate-800 mb-4"
              id="why-cookies"
            >
              Why We Use Cookies
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center mr-2 mt-0.5">
                  ✓
                </span>
                <span>Authenticate users & maintain sessions</span>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center mr-2 mt-0.5">
                  ✓
                </span>
                <span>Remember your preferences</span>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center mr-2 mt-0.5">
                  ✓
                </span>
                <span>Analyze website usage for improvements</span>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center mr-2 mt-0.5">
                  ✓
                </span>
                <span>Personalize your experience</span>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center mr-2 mt-0.5">
                  ✓
                </span>
                <span>Measure marketing campaign effectiveness</span>
              </div>
              <div className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 font-bold flex items-center justify-center mr-2 mt-0.5">
                  ✓
                </span>
                <span>Provide secure services</span>
              </div>
            </div>
          </div>

          {/* Your Choices - More concise */}
          <div className="mb-10">
            <h2
              className="text-2xl font-bold text-slate-800 mb-4"
              id="your-choices"
            >
              Your Choices
            </h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 mr-4 flex items-center justify-center rounded-full bg-blue-50">
                  <FaToggleOn className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold">Cookie Preferences</h3>
                  <p className="text-gray-600 text-sm">
                    Adjust your cookie preferences using our cookie consent tool
                    below.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 mr-4 flex items-center justify-center rounded-full bg-blue-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947z"
                      clipRule="evenodd"
                    />
                    <path d="M10 13a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Browser Settings</h3>
                  <p className="text-gray-600 text-sm">
                    Manage cookies through your browser settings (may impact
                    user experience).
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 mr-4 flex items-center justify-center rounded-full bg-blue-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Opt-Out Tools</h3>
                  <p className="text-gray-600 text-sm">
                    Use third-party opt-out tools like Digital Advertising
                    Alliance (DAA) and European Interactive Digital Advertising
                    Alliance (EDAA).
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg text-sm">
              <p className="text-gray-700">
                <strong>Note:</strong> Essential cookies cannot be disabled as
                they are necessary for our website to function properly.
              </p>
            </div>
          </div>

          {/* Cookie types with cleaner tables */}
          <div className="mb-10">
            <h2
              className="text-2xl font-bold text-slate-800 mb-4"
              id="cookies-we-use"
            >
              Cookies We Use
            </h2>

            <div className="space-y-6">
              {cookieTypes.map((type) => (
                <div
                  key={type.id}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <div className="bg-gray-50 px-5 py-4 flex justify-between items-center">
                    <div>
                      <h3 className="font-bold text-slate-800">
                        {type.name} Cookies
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {type.description}
                      </p>
                    </div>
                    <div className="flex items-center">
                      {type.required ? (
                        <span className="text-xs px-2 py-1 bg-gray-200 rounded-full text-gray-700">
                          Always active
                        </span>
                      ) : (
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            className="sr-only peer"
                            defaultChecked={type.id === "functional"}
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                        </label>
                      )}
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">
                            Name
                          </th>
                          <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">
                            Purpose
                          </th>
                          <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">
                            Duration
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {type.cookies.map((cookie, idx) => (
                          <tr key={idx} className="hover:bg-gray-50">
                            <td className="px-5 py-3 text-sm text-blue-600 font-medium">
                              {cookie.name}
                            </td>
                            <td className="px-5 py-3 text-sm text-gray-600">
                              {cookie.purpose}
                            </td>
                            <td className="px-5 py-3 text-sm text-gray-600">
                              {cookie.duration}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other sections with shorter paragraphs */}
          <div className="space-y-8">
            <div>
              <h2
                className="text-2xl font-bold text-slate-800 mb-3"
                id="third-party"
              >
                Third-Party Cookies
              </h2>
              <p className="text-gray-600">
                Some cookies on our site come from third parties like analytics
                providers, advertising networks, and social media platforms. We
                don't control these cookies. Please check the privacy policies
                of these third parties to understand how they use your
                information.
              </p>
            </div>

            <div>
              <h2
                className="text-2xl font-bold text-slate-800 mb-3"
                id="updates"
              >
                Updates to This Policy
              </h2>
              <p className="text-gray-600">
                We may update this Cookie Policy periodically to reflect changes
                in technology, regulation, or our business practices.
                Significant changes will be announced on our website.
              </p>
            </div>

            <div>
              <h2
                className="text-2xl font-bold text-slate-800 mb-3"
                id="contact"
              >
                Contact Us
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  Rapid.ly, Inc.
                  <br />
                  123 Market Street
                  <br />
                  San Francisco, CA 94105
                  <br />
                  <a
                    href="mailto:privacy@rapid.ly"
                    className="text-blue-600 hover:underline"
                  >
                    privacy@rapid.ly
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cards section with cleaner design */}
        <div className="grid gap-5 sm:grid-cols-3 mb-12">
          <div className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <FaToggleOn className="text-blue-600 text-xl" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">
              Cookie Preferences
            </h3>
            <p className="text-gray-600 text-sm">
              Customize settings anytime in your account preferences.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <FaLock className="text-blue-600 text-xl" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">Data Security</h3>
            <p className="text-gray-600 text-sm">
              Strong security measures protect all cookie-collected data.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
              <FaQuestionCircle className="text-blue-600 text-xl" />
            </div>
            <h3 className="font-bold text-slate-800 mb-2">Need Help?</h3>
            <p className="text-gray-600 text-sm">
              Our support team can answer any policy questions.
            </p>
          </div>
        </div>

        {/* CTA button */}
        <div className="text-center">
          <button className="px-8 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Update Cookie Preferences
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookiesPage;
