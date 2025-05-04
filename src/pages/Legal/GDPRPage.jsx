import { useEffect } from "react";
import { FaGlobe, FaShieldAlt, FaUserShield } from "react-icons/fa";

const GDPRPage = () => {
  const lastUpdated = "April 15, 2025";

  useEffect(() => {
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

          history.pushState(null, null, `#${targetId}`);
        }
      });
    });

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
            GDPR Compliance
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-800 mb-6 leading-tight">
            <span className="text-gray-800">Your data rights under </span>
            <span className="text-blue-600 italic">GDPR</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Rapid.ly is committed to ensuring compliance with the General Data
            Protection Regulation (GDPR) and protecting the privacy rights of
            individuals in the European Union.
          </p>
          <p className="text-gray-500 mt-4">Last updated: {lastUpdated}</p>
        </div>

        <div className="grid gap-6 mb-12">
          <div className="flex flex-col sm:flex-row sm:space-x-6 p-6 bg-white rounded-xl shadow-lg">
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full bg-blue-100 mb-4 sm:mb-0">
              <FaShieldAlt className="text-blue-600 text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Our Commitment
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At Rapid.ly, we are dedicated to protecting your personal data
                and ensuring that your privacy rights are respected in
                accordance with the GDPR. This page explains how we process
                personal data of EU residents and outlines your rights under
                this regulation.
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
                href="#data-controller"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                  1
                </span>
                Data Controller
              </a>
              <a
                href="#lawful-basis"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                  2
                </span>
                Lawful Basis for Processing
              </a>
              <a
                href="#data-subject-rights"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                  3
                </span>
                Your Rights Under GDPR
              </a>
              <a
                href="#exercising-rights"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                  4
                </span>
                How to Exercise Your Rights
              </a>
              <a
                href="#international-transfers"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                  5
                </span>
                International Transfers
              </a>
              <a
                href="#data-protection-impact"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                  6
                </span>
                Impact Assessments
              </a>
              <a
                href="#personal-data-breaches"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                  7
                </span>
                Personal Data Breaches
              </a>
              <a
                href="#data-protection-officer"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                  8
                </span>
                Data Protection Officer
              </a>
              <a
                href="#complaints"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                  9
                </span>
                Complaints
              </a>
              <a
                href="#changes"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-2 text-sm font-medium">
                  10
                </span>
                Changes to Policy
              </a>
            </div>
          </div>

          <div
            id="data-controller"
            className="bg-white rounded-xl shadow-lg p-8 mb-6 scroll-mt-32"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                1
              </span>
              Data Controller
            </h2>
            <div className="pl-11 text-gray-600">
              <p className="bg-blue-50 p-4 rounded-lg">
                Rapid.ly, Inc. acts as the data controller for personal
                information collected through our services. Our Data Protection
                Officer can be contacted at{" "}
                <a
                  href="mailto:dpo@rapid.ly"
                  className="text-blue-600 hover:underline"
                >
                  dpo@rapid.ly
                </a>
                .
              </p>
            </div>
          </div>

          <div
            id="lawful-basis"
            className="bg-white rounded-xl shadow-lg p-8 mb-6 scroll-mt-32"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                2
              </span>
              Lawful Basis for Processing
            </h2>
            <div className="pl-11">
              <p className="text-gray-600 mb-4">
                We process your personal data on the following legal grounds:
              </p>
              <div className="grid grid-cols-1 gap-3 mb-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Contractual Necessity
                  </h4>
                  <p className="text-gray-600">
                    Processing necessary for the performance of our contract
                    with you (our Terms of Service)
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Legitimate Interests
                  </h4>
                  <p className="text-gray-600">
                    Processing necessary for our legitimate interests, provided
                    those interests do not override your fundamental rights and
                    freedoms
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">
                    Legal Obligation
                  </h4>
                  <p className="text-gray-600">
                    Processing necessary for compliance with a legal obligation
                    to which we are subject
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-slate-800 mb-2">Consent</h4>
                  <p className="text-gray-600">
                    Processing based on your specific, informed, and unambiguous
                    consent
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="data-subject-rights"
            className="bg-white rounded-xl shadow-lg p-8 mb-6 scroll-mt-32"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                3
              </span>
              Your Rights Under GDPR
            </h2>
            <div className="pl-11">
              <p className="text-gray-600 mb-6">
                Under the GDPR, EU residents have the following rights regarding
                their personal data:
              </p>

              <div className="space-y-6">
                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    3.1 Right to Access
                  </h3>
                  <p className="text-gray-600">
                    You have the right to request a copy of the personal data we
                    hold about you and information about how we process it.
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    3.2 Right to Rectification
                  </h3>
                  <p className="text-gray-600">
                    You have the right to have inaccurate personal data
                    corrected or completed if it is incomplete.
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    3.3 Right to Erasure ("Right to be Forgotten")
                  </h3>
                  <p className="text-gray-600 mb-3">
                    You have the right to request the deletion or removal of
                    your personal data in certain circumstances, including:
                  </p>
                  <ul className="space-y-2 text-gray-600 pl-5">
                    <li className="flex">
                      <span className="font-bold text-blue-600 mr-2">•</span>
                      <span>
                        When the data is no longer necessary for the purpose it
                        was collected
                      </span>
                    </li>
                    <li className="flex">
                      <span className="font-bold text-blue-600 mr-2">•</span>
                      <span>
                        When you withdraw consent (if processing is based on
                        consent)
                      </span>
                    </li>
                    <li className="flex">
                      <span className="font-bold text-blue-600 mr-2">•</span>
                      <span>
                        When you object to processing and there are no
                        overriding legitimate grounds
                      </span>
                    </li>
                    <li className="flex">
                      <span className="font-bold text-blue-600 mr-2">•</span>
                      <span>When the data has been unlawfully processed</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    3.4 Right to Restrict Processing
                  </h3>
                  <p className="text-gray-600 mb-3">
                    You have the right to request that we restrict the
                    processing of your personal data in certain circumstances,
                    including:
                  </p>
                  <ul className="space-y-2 text-gray-600 pl-5">
                    <li className="flex">
                      <span className="font-bold text-blue-600 mr-2">•</span>
                      <span>
                        When you contest the accuracy of your personal data
                      </span>
                    </li>
                    <li className="flex">
                      <span className="font-bold text-blue-600 mr-2">•</span>
                      <span>
                        When the processing is unlawful, and you oppose erasure
                      </span>
                    </li>
                    <li className="flex">
                      <span className="font-bold text-blue-600 mr-2">•</span>
                      <span>
                        When we no longer need the data, but you require it for
                        legal claims
                      </span>
                    </li>
                    <li className="flex">
                      <span className="font-bold text-blue-600 mr-2">•</span>
                      <span>
                        When you have objected to processing pending
                        verification of legitimate grounds
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    3.5 Right to Data Portability
                  </h3>
                  <p className="text-gray-600">
                    You have the right to receive your personal data in a
                    structured, commonly used, and machine-readable format, and
                    to request that we transmit this data to another controller
                    where technically feasible.
                  </p>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    3.6 Right to Object
                  </h3>
                  <p className="text-gray-600 mb-3">
                    You have the right to object to the processing of your
                    personal data in certain circumstances, including:
                  </p>
                  <ul className="space-y-2 text-gray-600 pl-5">
                    <li className="flex">
                      <span className="font-bold text-blue-600 mr-2">•</span>
                      <span>
                        Processing based on legitimate interests or public
                        interest/official authority
                      </span>
                    </li>
                    <li className="flex">
                      <span className="font-bold text-blue-600 mr-2">•</span>
                      <span>Direct marketing (including profiling)</span>
                    </li>
                    <li className="flex">
                      <span className="font-bold text-blue-600 mr-2">•</span>
                      <span>
                        Processing for scientific/historical research and
                        statistics purposes
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-800 mb-3">
                    3.7 Rights Related to Automated Decision-Making
                  </h3>
                  <p className="text-gray-600">
                    You have the right not to be subject to a decision based
                    solely on automated processing, including profiling, which
                    produces legal effects concerning you or similarly
                    significantly affects you.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="exercising-rights"
            className="bg-white rounded-xl shadow-lg p-8 mb-6 scroll-mt-32"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                4
              </span>
              How to Exercise Your Rights
            </h2>
            <div className="pl-11 text-gray-600">
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    To exercise any of these rights, please contact our Data
                    Protection Officer at{" "}
                    <a
                      href="mailto:dpo@rapid.ly"
                      className="text-blue-600 hover:underline"
                    >
                      dpo@rapid.ly
                    </a>
                    or submit a request through our Data Subject Rights Portal
                    available in your account settings. We will respond to your
                    request within one month, as required by the GDPR.
                  </p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                  <p>
                    We may ask for additional information to verify your
                    identity before processing your request. In certain cases,
                    we may have legitimate grounds to refuse your request, in
                    which case we will inform you of the reasons for our refusal
                    and your right to lodge a complaint with a supervisory
                    authority.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            id="international-transfers"
            className="bg-white rounded-xl shadow-lg p-8 mb-6 scroll-mt-32"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                5
              </span>
              International Data Transfers
            </h2>
            <div className="pl-11">
              <p className="text-gray-600 mb-4">
                As a global company, we may transfer your personal data to
                countries outside the European Economic Area (EEA). When we do
                so, we ensure appropriate safeguards are in place to protect
                your data, including:
              </p>
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-gray-50 p-3 rounded-lg text-gray-600 flex items-center">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  <span>EU Standard Contractual Clauses</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-gray-600 flex items-center">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  <span>Binding Corporate Rules</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-gray-600 flex items-center">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  <span>Adequacy decisions by the European Commission</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg text-gray-600 flex items-center">
                  <span className="font-bold text-blue-600 mr-2">•</span>
                  <span>Other legally approved transfer mechanisms</span>
                </div>
              </div>
            </div>
          </div>

          <div
            id="data-protection-impact"
            className="bg-white rounded-xl shadow-lg p-8 mb-6 scroll-mt-32"
          >
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                6
              </span>
              Data Protection Impact Assessments
            </h2>
            <div className="pl-11 text-gray-600">
              <p className="bg-blue-50 p-4 rounded-lg">
                We conduct Data Protection Impact Assessments (DPIAs) when
                implementing new technologies or processes that are likely to
                result in a high risk to individuals' rights and freedoms. These
                assessments help us identify and minimize data protection risks
                at an early stage.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div
              id="personal-data-breaches"
              className="bg-white rounded-xl shadow-lg p-8 scroll-mt-32"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                  7
                </span>
                Personal Data Breaches
              </h2>
              <div className="pl-11 text-gray-600">
                <p className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                  In the event of a personal data breach that poses a risk to
                  your rights and freedoms, we will notify the relevant
                  supervisory authority without undue delay and, where feasible,
                  within 72 hours of becoming aware of the breach. If the breach
                  is likely to result in a high risk to your rights and
                  freedoms, we will also notify you directly unless an exception
                  applies.
                </p>
              </div>
            </div>

            <div
              id="data-protection-officer"
              className="bg-white rounded-xl shadow-lg p-8 scroll-mt-32"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                  8
                </span>
                Data Protection Officer
              </h2>
              <div className="pl-11 text-gray-600">
                <p className="bg-gray-50 p-4 rounded-lg">
                  We have appointed a Data Protection Officer who is responsible
                  for overseeing our data protection strategy and ensuring
                  compliance with data protection laws. You can contact our DPO
                  at{" "}
                  <a
                    href="mailto:dpo@rapid.ly"
                    className="text-blue-600 hover:underline"
                  >
                    dpo@rapid.ly
                  </a>{" "}
                  for any matters related to the processing of your personal
                  data.
                </p>
              </div>
            </div>

            <div
              id="complaints"
              className="bg-white rounded-xl shadow-lg p-8 scroll-mt-32"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                  9
                </span>
                Complaints to Supervisory Authority
              </h2>
              <div className="pl-11 text-gray-600">
                <p className="bg-gray-50 p-4 rounded-lg">
                  If you are not satisfied with our response to your request or
                  believe our processing of your personal data does not comply
                  with data protection law, you have the right to lodge a
                  complaint with a supervisory authority, in particular in the
                  EU Member State of your habitual residence, place of work, or
                  place of the alleged infringement.
                </p>
              </div>
            </div>

            <div
              id="changes"
              className="bg-white rounded-xl shadow-lg p-8 scroll-mt-32"
            >
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-lg font-bold">
                  10
                </span>
                Changes to this GDPR Notice
              </h2>
              <div className="pl-11 text-gray-600">
                <p className="bg-gray-50 p-4 rounded-lg">
                  We may update this GDPR notice from time to time. If we make
                  material changes, we will notify you through our services or
                  by other means. Your continued use of our services after the
                  changes take effect constitutes your acknowledgment of the
                  updated notice.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <FaUserShield className="text-blue-600 text-3xl mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              Your Data Control Panel
            </h3>
            <p className="text-gray-600">
              Access, download, or delete your personal data directly from your
              account settings.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <FaGlobe className="text-blue-600 text-3xl mb-4" />
            <h3 className="text-xl font-bold text-slate-800 mb-3">
              EU Representatives
            </h3>
            <p className="text-gray-600 text-pretty">
              Our EU representative can be contacted at{" "}
              <a
                href="mailto:eu-rep@rapid.ly"
                className="text-blue-600 hover:underline"
              >
                eu-rep@rapid.ly
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Manage Your Privacy Settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default GDPRPage;
