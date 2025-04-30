import { useEffect } from "react";
import { FaEyeSlash, FaLock, FaUserShield } from "react-icons/fa";

const PrivacyPage = () => {
  const lastUpdated = "April 15, 2025";

  // Add smooth scrolling with offset when links are clicked
  useEffect(() => {
    // Select all anchor links that point to a section on the page
    const anchors = document.querySelectorAll('a[href^="#"]');

    // Add click event listener to each anchor
    anchors.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        // Get the target element
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Calculate position with offset (adjust the 100 value as needed)
          const offsetTop =
            targetElement.getBoundingClientRect().top +
            window.pageYOffset -
            100;

          // Scroll smoothly to the target with offset
          window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
          });

          // Update the URL without causing a jump (optional)
          history.pushState(null, null, `#${targetId}`);
        }
      });
    });

    // Clean up event listeners when component unmounts
    return () => {
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-4xl mx-auto pt-16 pb-20 px-6 sm:px-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
            Privacy Policy
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-800 mb-6 leading-tight">
            <span className="text-gray-800">Your privacy is </span>
            <span className="text-blue-600 italic">our priority</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            This Privacy Policy describes how we collect, use, and share your
            personal information when you use our services.
          </p>
          <p className="text-gray-500 mt-4">Last updated: {lastUpdated}</p>
        </div>

        <div className="grid gap-6 mb-12">
          <div className="flex flex-col sm:flex-row sm:space-x-6 p-6 bg-white rounded-xl shadow-lg">
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4 sm:mb-0">
              <FaEyeSlash className="text-blue-600 text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                We value your trust
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At Rapid.ly, we take your privacy seriously. We're committed to
                protecting your personal information and being transparent about
                how we use it. This policy explains our practices regarding data
                collection, use, and disclosure.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 mb-6 top-4 z-10">
            <h3 className="text-lg font-bold text-slate-800 mb-4">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <a
                href="#information-we-collect"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                  1
                </span>
                Information We Collect
              </a>
              <a
                href="#how-we-use-information"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                  2
                </span>
                How We Use Your Information
              </a>
              <a
                href="#information-sharing"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                  3
                </span>
                How We Share Your Information
              </a>
              <a
                href="#data-security"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                  4
                </span>
                Data Security
              </a>
              <a
                href="#data-retention"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                  5
                </span>
                Data Retention
              </a>
              <a
                href="#your-rights"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                  6
                </span>
                Your Rights and Choices
              </a>
              <a
                href="#international-transfers"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                  7
                </span>
                International Transfers
              </a>
              <a
                href="#children"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                  8
                </span>
                Children's Privacy
              </a>
              <a
                href="#changes"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                  9
                </span>
                Changes to Policy
              </a>
            </div>
          </div>

          <div
            id="information-we-collect"
            className="bg-white rounded-xl shadow-lg p-8 mb-6 scroll-mt-32" // Added scroll-mt-32 for offset
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                1
              </span>
              Information We Collect
            </h2>
            <div className="pl-11">
              <p className="text-gray-600 mb-6">
                We collect information to provide, improve, and promote our
                services. The types of information we collect include:
              </p>

              <div className="mb-6 bg-blue-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  1.1 Information You Provide
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex">
                    <span className="font-bold text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-semibold">
                        Account Information:
                      </span>{" "}
                      When you register, we collect your name, email address,
                      password, and optional profile information.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-semibold">Content:</span> We collect
                      the links you shorten, customize, and share through our
                      platform.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-semibold">Communications:</span> If
                      you contact us directly, we may collect information you
                      provide in your communications.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-semibold">
                        Payment Information:
                      </span>{" "}
                      If you subscribe to a paid plan, we collect payment
                      details, billing address, and transaction history.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="mb-6 bg-blue-50 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  1.2 Information Collected Automatically
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex">
                    <span className="font-bold text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-semibold">Usage Data:</span> We
                      collect information about how you interact with our
                      services, including access times, pages viewed, and links
                      clicked.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-semibold">Device Information:</span>{" "}
                      We collect information about the device you use to access
                      our services, including hardware model, operating system,
                      and unique device identifiers.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-semibold">
                        Location Information:
                      </span>{" "}
                      We collect your IP address, which may be used to estimate
                      your general location.
                    </div>
                  </li>
                  <li className="flex">
                    <span className="font-bold text-blue-600 mr-2">•</span>
                    <div>
                      <span className="font-semibold">
                        Cookies and Similar Technologies:
                      </span>{" "}
                      We use cookies and similar tracking technologies to
                      collect information about your browsing activities.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div
            id="how-we-use-information"
            className="bg-white rounded-xl shadow-lg p-8 mb-6 scroll-mt-32" // Added scroll-mt-32 for offset
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                2
              </span>
              How We Use Your Information
            </h2>
            <div className="pl-11">
              <p className="text-gray-600 mb-4">
                We use the information we collect for various purposes,
                including:
              </p>
              <div className="grid grid-cols-1 gap-3 text-gray-600">
                <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  <span>
                    Providing, maintaining, and improving our services
                  </span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  <span>
                    Processing transactions and sending related information
                  </span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  <span>
                    Sending administrative messages and security alerts
                  </span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  <span>Responding to your comments and requests</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  <span>Developing new products and services</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  <span>Monitoring and analyzing trends and usage</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  <span>Detecting and preventing fraud and abuse</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  <span>Personalizing and improving your experience</span>
                </div>
              </div>
            </div>
          </div>

          <div
            id="information-sharing"
            className="bg-white rounded-xl shadow-lg p-8 mb-6 scroll-mt-32" // Added scroll-mt-32 for offset
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                3
              </span>
              How We Share Your Information
            </h2>
            <div className="pl-11">
              <p className="text-gray-600 mb-5">
                We may share your information in the following circumstances:
              </p>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    With Service Providers
                  </h4>
                  <p className="text-gray-600">
                    We share information with vendors, consultants, and other
                    service providers who need access to such information to
                    perform services on our behalf.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    For Legal Reasons
                  </h4>
                  <p className="text-gray-600">
                    We may disclose information if we believe it's necessary to
                    comply with applicable laws, regulations, legal processes,
                    or governmental requests.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Business Transfers
                  </h4>
                  <p className="text-gray-600">
                    If we're involved in a merger, acquisition, or sale of
                    business assets, your information may be transferred as part
                    of that transaction.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    With Your Consent
                  </h4>
                  <p className="text-gray-600">
                    We may share information with third parties when you give us
                    consent to do so.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Aggregated or De-identified Information
                  </h4>
                  <p className="text-gray-600">
                    We may share aggregated or de-identified information that
                    cannot reasonably be used to identify you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div
              id="data-security"
              className="bg-white rounded-xl shadow-lg p-8 scroll-mt-32" // Added scroll-mt-32 for offset
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                  4
                </span>
                Data Security
              </h2>
              <div className="pl-11 text-gray-600">
                <p className="mb-2">
                  We take reasonable measures to help protect your personal
                  information from loss, theft, misuse, and unauthorized access,
                  disclosure, alteration, and destruction.
                </p>
                <p>
                  However, no security system is impenetrable, and we cannot
                  guarantee the security of our systems.
                </p>
              </div>
            </div>

            <div
              id="data-retention"
              className="bg-white rounded-xl shadow-lg p-8 scroll-mt-32" // Added scroll-mt-32 for offset
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                  5
                </span>
                Data Retention
              </h2>
              <div className="pl-11 text-gray-600">
                <p>
                  We retain your information for as long as necessary to provide
                  you with our services or as required by law. When we no longer
                  need to use your information, we will remove it from our
                  systems or anonymize it so that it doesn't identify you.
                </p>
              </div>
            </div>

            <div
              id="your-rights"
              className="bg-white rounded-xl shadow-lg p-8 scroll-mt-32"
            >
              {" "}
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                  6
                </span>
                Your Rights and Choices
              </h2>
              <div className="pl-11">
                <p className="text-gray-600 mb-4">
                  Depending on your location, you may have certain rights
                  regarding your personal information, including:
                </p>
                <div className="grid grid-cols-1 gap-3 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg text-gray-600 flex items-center">
                    <span className="font-bold text-blue-600 mr-2">•</span>
                    Accessing and updating your information
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-gray-600 flex items-center">
                    <span className="font-bold text-blue-600 mr-2">•</span>
                    Objecting to our processing of your information
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-gray-600 flex items-center">
                    <span className="font-bold text-blue-600 mr-2">•</span>
                    Requesting restrictions on processing
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-gray-600 flex items-center">
                    <span className="font-bold text-blue-600 mr-2">•</span>
                    Requesting portability of your information
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg text-gray-600 flex items-center">
                    <span className="font-bold text-blue-600 mr-2">•</span>
                    Withdrawing consent
                  </div>
                </div>
                <p className="text-gray-600">
                  To exercise these rights, please contact us at{" "}
                  <a
                    href="mailto:privacy@rapid.ly"
                    className="text-blue-600 hover:underline"
                  >
                    privacy@rapid.ly
                  </a>
                  .
                </p>
              </div>
            </div>

            <div
              id="international-transfers"
              className="bg-white rounded-xl shadow-lg p-8 scroll-mt-32" // Added scroll-mt-32 for offset
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                  7
                </span>
                International Data Transfers
              </h2>
              <div className="pl-11 text-gray-600">
                <p>
                  We operate globally, which means your information may be
                  transferred to, stored, and processed in countries other than
                  your own. We take appropriate safeguards to ensure your
                  information receives adequate protection regardless of where
                  it's processed.
                </p>
              </div>
            </div>

            <div
              id="children"
              className="bg-white rounded-xl shadow-lg p-8 scroll-mt-32"
            >
              {" "}
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                  8
                </span>
                Children's Privacy
              </h2>
              <div className="pl-11 text-gray-600">
                <p>
                  Our services are not directed to children under 16, and we do
                  not knowingly collect personal information from children under
                  16. If we learn we have collected personal information of a
                  child under 16, we will delete that information.
                </p>
              </div>
            </div>

            <div
              id="changes"
              className="bg-white rounded-xl shadow-lg p-8 scroll-mt-32"
            >
              {" "}
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                  9
                </span>
                Changes to this Privacy Policy
              </h2>
              <div className="pl-11 text-gray-600">
                <p>
                  We may modify this Privacy Policy from time to time. If we
                  make material changes, we will notify you through our services
                  or by other means. Your continued use of our services after
                  the changes take effect constitutes your acceptance of the
                  changes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <FaLock className="text-blue-600 text-3xl mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Data Security Commitment
            </h3>
            <p className="text-gray-600">
              We implement industry-standard security measures to protect your
              personal information from unauthorized access and disclosure.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <FaUserShield className="text-blue-600 text-3xl mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Your Data Rights
            </h3>
            <p className="text-gray-600">
              You have control over your data. Access, update, or delete your
              information at any time from your account settings.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Update Your Privacy Settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
