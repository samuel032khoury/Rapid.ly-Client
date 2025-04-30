import { useEffect, useRef, useState } from "react";
import {
  FaBalanceScale,
  FaHeadset,
  FaQuestionCircle,
  FaUserShield,
} from "react-icons/fa";

const TermsOfServicePage = () => {
  const lastUpdated = "April 15, 2025";

  // Create ref for TOC element
  const tocRef = useRef(null);

  useEffect(() => {
    // Function to handle smooth scrolling for anchor links
    const setupSmoothScrolling = () => {
      const anchors = document.querySelectorAll('a[href^="#"]');

      anchors.forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
          e.preventDefault();

          const targetId = this.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            const offsetTop =
              targetElement.getBoundingClientRect().top +
              window.pageYOffset -
              100;

            window.scrollTo({
              top: offsetTop,
              behavior: "smooth",
            });

            // Update URL hash without scrolling
            history.pushState(null, null, `#${targetId}`);
          }
        });
      });
    };

    setupSmoothScrolling();

    return () => {
      const anchors = document.querySelectorAll('a[href^="#"]');
      anchors.forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []); // Removed showFloatingMenu dependency

  const sections = [
    { id: "acceptance", title: "Acceptance of Terms", number: "1" },
    { id: "changes", title: "Changes to Terms", number: "2" },
    { id: "account", title: "Account Registration", number: "3" },
    { id: "acceptable-use", title: "Acceptable Use", number: "4" },
    { id: "content", title: "User Content", number: "5" },
    { id: "termination", title: "Termination", number: "6" },
    { id: "limitation", title: "Limitation of Liability", number: "7" },
    { id: "disclaimer", title: "Disclaimer of Warranties", number: "8" },
    { id: "indemnification", title: "Indemnification", number: "9" },
    { id: "governing-law", title: "Governing Law", number: "10" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-4xl mx-auto pt-16 pb-20 px-6 sm:px-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
            Terms of Service
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-800 mb-6 leading-tight">
            <span className="text-gray-800">Terms and conditions for </span>
            <span className="text-blue-600 italic">Rapid.ly</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services. By
            using Rapid.ly, you agree to be bound by these terms.
          </p>
          <p className="text-gray-500 mt-4">Last updated: {lastUpdated}</p>
        </div>

        <div className="grid gap-6 mb-12">
          <div className="flex flex-col sm:flex-row sm:space-x-6 p-6 bg-white rounded-xl shadow-lg">
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4 sm:mb-0">
              <FaBalanceScale className="text-blue-600 text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Legal Agreement
              </h3>
              <p className="text-gray-600 leading-relaxed">
                These Terms of Service constitute a legally binding agreement
                between you and Rapid.ly, Inc. governing your access to and use
                of our platform, including our website, applications, and
                services. Please take the time to carefully read and understand
                these terms.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <div
            ref={tocRef}
            className="bg-white rounded-xl shadow-lg p-6 mb-6 toc-nav"
          >
            <h3 className="text-lg font-bold text-slate-800 mb-4">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`text-blue-600 hover:text-blue-800 flex items-center`}
                >
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                    {section.number}
                  </span>
                  {section.title}
                </a>
              ))}
            </div>
          </div>

          <div
            id="acceptance"
            className="bg-white rounded-xl shadow-lg p-8 mb-6 scroll-mt-32"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                1
              </span>
              Acceptance of Terms
            </h2>
            <div className="pl-11 text-gray-600">
              <p className="bg-blue-50 p-4 rounded-lg">
                By accessing or using our services, you agree to be bound by
                these Terms of Service and our Privacy Policy. If you do not
                agree with any part of these terms, you may not access or use
                our services.
              </p>
            </div>
          </div>

          <div
            id="changes"
            className="bg-white rounded-xl shadow-lg p-8 mb-6 scroll-mt-32"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                2
              </span>
              Changes to Terms
            </h2>
            <div className="pl-11">
              <p className="text-gray-600 bg-blue-50 p-4 rounded-lg">
                We may modify these Terms of Service at any time. If we make
                material changes, we will notify you through our services or by
                other means. Your continued use of our services after the
                changes take effect constitutes your acceptance of the changed
                terms.
              </p>
            </div>
          </div>

          <div
            id="account"
            className="bg-white rounded-xl shadow-lg p-8 mb-6 scroll-mt-32"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                3
              </span>
              Account Registration and Security
            </h2>
            <div className="pl-11">
              <p className="text-gray-600 mb-4">
                To use certain features of our services, you may need to create
                an account. When registering for an account, you agree to:
              </p>
              <div className="grid grid-cols-1 gap-3 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Accurate Information
                  </h4>
                  <p className="text-gray-600">
                    Provide accurate, current, and complete information
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Account Maintenance
                  </h4>
                  <p className="text-gray-600">
                    Maintain and promptly update your account information
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Account Security
                  </h4>
                  <p className="text-gray-600">
                    Keep your password secure and confidential
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Responsibility
                  </h4>
                  <p className="text-gray-600">
                    Accept responsibility for all activities that occur under
                    your account
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="acceptable-use"
            className="bg-white rounded-xl shadow-lg p-8 mb-6 scroll-mt-32"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                4
              </span>
              Acceptable Use
            </h2>
            <div className="pl-11">
              <p className="text-gray-600 mb-6">
                You agree not to use our services to:
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    4.1 Violate Laws
                  </h3>
                  <p className="text-gray-600">
                    Violate any applicable laws or regulations
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    4.2 Infringe Rights
                  </h3>
                  <p className="text-gray-600">
                    Infringe the intellectual property rights of others
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    4.3 Harmful Activities
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Engage in harmful or malicious activities, including:
                  </p>
                  <ul className="space-y-2 text-gray-600 pl-5">
                    <li className="flex">
                      <span className="font-bold text-blue-600 mr-2">•</span>
                      <span>
                        Transmitting malicious code, viruses, or harmful data
                      </span>
                    </li>
                    <li className="flex">
                      <span className="font-bold text-blue-600 mr-2">•</span>
                      <span>Sending unsolicited communications or spam</span>
                    </li>
                    <li className="flex">
                      <span className="font-bold text-blue-600 mr-2">•</span>
                      <span>Harassing, abusing, or harming others</span>
                    </li>
                    <li className="flex">
                      <span className="font-bold text-blue-600 mr-2">•</span>
                      <span>Interfering with or disrupting our services</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    4.4 Unauthorized Access
                  </h3>
                  <p className="text-gray-600">
                    Attempt to gain unauthorized access to systems or user
                    accounts
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    4.5 Fraudulent Practices
                  </h3>
                  <p className="text-gray-600">
                    Use our services for fraudulent practices or deceptive
                    activities
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="content"
            className="bg-white rounded-xl shadow-lg p-8 mb-6 scroll-mt-32"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                5
              </span>
              User Content
            </h2>
            <div className="pl-11 text-gray-600">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    Our services allow you to upload, submit, store, send, or
                    receive content, including links you shorten. You retain
                    ownership of any intellectual property rights that you hold
                    in that content.
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p>
                    By uploading content through our services, you grant us a
                    worldwide, non-exclusive, royalty-free license to use, host,
                    store, reproduce, modify, create derivative works,
                    communicate, publish, publicly perform, publicly display,
                    and distribute such content for the limited purpose of
                    operating, promoting, and improving our services.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="termination"
            className="bg-white rounded-xl shadow-lg p-8 mb-6 scroll-mt-32"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                6
              </span>
              Termination
            </h2>
            <div className="pl-11">
              <p className="text-gray-600 mb-4">
                We may terminate or suspend your access to all or part of our
                services immediately, without prior notice or liability, in the
                following circumstances:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-gray-50 p-3 rounded-lg text-gray-600 flex items-center">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  <span>Breach of these terms</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-gray-600 flex items-center">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  <span>Fraudulent activities</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-gray-600 flex items-center">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  <span>Account inactivity</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-gray-600 flex items-center">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  <span>Legal requirements</span>
                </div>
              </div>
            </div>
          </div>

          <div
            id="limitation"
            className="bg-white rounded-xl shadow-lg p-8 mb-6 scroll-mt-32"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                7
              </span>
              Limitation of Liability
            </h2>
            <div className="pl-11 text-gray-600">
              <p className="bg-blue-50 p-4 rounded-lg">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                SHALL RAPID.LY, ITS AFFILIATES, DIRECTORS, EMPLOYEES, AGENTS, OR
                LICENSORS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT
                LIMITATION DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR
                OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATING TO THE USE
                OF, OR INABILITY TO USE, OUR SERVICES.
              </p>
            </div>
          </div>

          <div
            id="disclaimer"
            className="bg-white rounded-xl shadow-lg p-8 mb-6"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center scroll-mt-32">
              <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-base font-bold">
                8
              </span>
              Disclaimer of Warranties
            </h3>
            <div className="pl-10 text-gray-600">
              <p className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
                WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING,
                BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR COURSE OF
                PERFORMANCE.
              </p>
            </div>
          </div>
          <div
            id="indemnification"
            className="bg-white rounded-xl shadow-lg p-8 mb-6"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center scroll-mt-32">
              <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-base font-bold">
                9
              </span>
              Indemnification
            </h3>
            <div className="pl-10 text-gray-600">
              <p className="bg-gray-50 p-4 rounded-lg">
                You agree to defend, indemnify, and hold harmless Rapid.ly, its
                affiliates, licensors, and service providers from and against
                any claims, liabilities, damages, judgments, awards, losses,
                costs, expenses, or fees arising out of or relating to your
                violation of these terms or your use of our services.
              </p>
            </div>
          </div>

          <div
            id="governing-law"
            className="bg-white rounded-xl shadow-lg p-8 mb-6"
          >
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center scroll-mt-32">
              <span className="w-7 h-7 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-base font-bold">
                10
              </span>
              Governing Law
            </h3>
            <div className="pl-10 text-gray-600">
              <p className="bg-gray-50 p-4 rounded-lg">
                These terms and your use of our services shall be governed by
                and construed in accordance with the laws of the State of
                California, without regard to its conflict of law provisions.
                You agree to submit to the personal and exclusive jurisdiction
                of the courts located within San Francisco County, California.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <FaQuestionCircle className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Have Questions?
              </h3>
              <p className="text-gray-600">
                Contact our{" "}
                <a
                  href="mailto:legal@rapid.ly"
                  className="text-blue-600 hover:underline"
                >
                  legal team
                </a>{" "}
                for any questions regarding these terms.{" "}
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
              <FaHeadset className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Need Support?
              </h3>
              <p className="text-gray-600">
                Our{" "}
                <a
                  href="mailto:support@rapid.ly"
                  className="text-blue-600 hover:underline"
                >
                  support team
                </a>{" "}
                is available 24/7 to assist you.{" "}
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              Accept Terms & Continue
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
