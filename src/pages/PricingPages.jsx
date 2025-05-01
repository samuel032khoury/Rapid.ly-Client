import { useState } from "react";
import {
  FaCheck,
  FaTimes,
  FaQuestionCircle,
  FaRegLightbulb,
  FaBuilding,
  FaUserFriends,
} from "react-icons/fa";

const PricingPage = () => {
  const [annual, setAnnual] = useState(true);

  const tiers = [
    {
      name: "Free",
      description: "Perfect for individuals just getting started",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        { name: "Up to 1,000 links", included: true },
        { name: "Basic analytics", included: true },
        { name: "1 custom domain", included: true },
        { name: "QR code generation", included: true },
        { name: "Link expiration", included: true },
        { name: "Community support", included: true },
        { name: "API access", included: false },
        { name: "Team collaboration", included: false },
        { name: "Advanced security", included: false },
        { name: "Branded links", included: false },
        { name: "Priority support", included: false },
      ],
      cta: "Get Started",
      popular: false,
      color: "gray",
    },
    {
      name: "Pro",
      description: "For professionals and small teams",
      monthlyPrice: 19,
      annualPrice: 15,
      features: [
        { name: "Up to 10,000 links", included: true },
        { name: "Advanced analytics", included: true },
        { name: "3 custom domains", included: true },
        { name: "Custom QR codes", included: true },
        { name: "Link expiration", included: true },
        { name: "Email support", included: true },
        { name: "API access", included: true },
        { name: "Up to 5 team members", included: true },
        { name: "Advanced security", included: true },
        { name: "Branded links", included: true },
        { name: "Priority support", included: false },
      ],
      cta: "Start Free Trial",
      popular: true,
      color: "blue",
    },
    {
      name: "Business",
      description: "For growing businesses and teams",
      monthlyPrice: 49,
      annualPrice: 39,
      features: [
        { name: "Up to 50,000 links", included: true },
        { name: "Enterprise analytics", included: true },
        { name: "10 custom domains", included: true },
        { name: "Advanced QR customization", included: true },
        { name: "Link scheduling", included: true },
        { name: "Priority support", included: true },
        { name: "Enhanced API access", included: true },
        { name: "Up to 20 team members", included: true },
        { name: "Advanced security", included: true },
        { name: "Branded links", included: true },
        { name: "SLA guarantees", included: true },
      ],
      cta: "Start Free Trial",
      popular: false,
      color: "purple",
    },
  ];

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. We also support payment via PayPal and invoicing for annual Enterprise plans.",
    },
    {
      question: "Can I change plans at any time?",
      answer:
        "Yes! You can upgrade, downgrade, or cancel your plan at any time. Upgrades take effect immediately, while downgrades or cancellations will take effect at the end of your current billing cycle.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, we offer a 14-day free trial on our Pro and Business plans, no credit card required. You can experience all the features before committing to a paid plan.",
    },
    {
      question: "Do you offer refunds?",
      answer:
        "We offer a 30-day money-back guarantee for annual plans. If you're not satisfied with our service, contact our support team within 30 days of purchase for a full refund.",
    },
    {
      question: "What happens to my links if I downgrade?",
      answer:
        "Your existing links will continue to work, but you may lose access to certain features associated with your previous plan. Any data and analytics will be preserved.",
    },
    {
      question:
        "Do you offer special pricing for non-profits or educational institutions?",
      answer:
        "Yes, we offer special discounts for non-profit organizations, educational institutions, and open source projects. Please contact our sales team for more information.",
    },
  ];

  const enterpriseFeatures = [
    "Unlimited links and custom domains",
    "Dedicated account manager",
    "Custom integration support",
    "Enterprise-grade security",
    "Advanced user permissions",
    "Single sign-on (SSO)",
    "On-premise deployment option",
    "Customized analytics dashboard",
    "99.99% uptime SLA",
    "24/7 priority support",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-6xl mx-auto pt-16 pb-20 px-6 sm:px-10">
        {/* Hero section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
            Pricing
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-slate-800 mb-8 leading-tight">
            <span className="text-gray-800">Simple pricing for </span>
            <span className="text-blue-600 italic">everyone</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            Choose the plan that fits your needs. All plans include a 14-day
            free trial so you can test the features before committing.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center bg-gray-100 p-1 rounded-full mb-10">
            <button
              className={`py-2 px-6 rounded-full text-sm font-medium ${
                !annual
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`py-2 px-6 rounded-full text-sm font-medium ${
                annual
                  ? "bg-white text-blue-600 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setAnnual(true)}
            >
              Annual <span className="text-green-500 ml-1">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all hover:shadow-xl relative ${
                tier.popular ? "ring-2 ring-blue-500 md:scale-105" : ""
              }`}
            >
              {tier.popular && (
                <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-600 mb-5">{tier.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-black text-slate-800">
                    ${annual ? tier.annualPrice : tier.monthlyPrice}
                  </span>
                  <span className="text-gray-500">
                    /month{annual ? ", billed annually" : ""}
                  </span>
                </div>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-bold text-white mb-6 hover:opacity-90 ${
                    tier.color === "blue"
                      ? "bg-blue-600 hover:bg-blue-700"
                      : tier.color === "purple"
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-gray-600 hover:bg-gray-700"
                  }`}
                >
                  {tier.cta}
                </button>
                <div className="space-y-3">
                  {tier.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      {feature.included ? (
                        <FaCheck className="text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <FaTimes className="text-gray-300 mr-3 flex-shrink-0" />
                      )}
                      <span
                        className={
                          feature.included ? "text-gray-700" : "text-gray-400"
                        }
                      >
                        {feature.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enterprise section */}
        <div className="bg-white rounded-2xl shadow-xl mb-20">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 lg:p-16">
              <div className="flex items-center mb-6">
                <FaBuilding className="text-blue-600 text-2xl mr-4" />
                <h2 className="text-3xl font-bold text-slate-800">
                  Enterprise
                </h2>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Custom solutions for large organizations with specific needs and
                high volume requirements.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {enterpriseFeatures.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <FaCheck className="text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                Contact Sales
              </button>
            </div>
            <div className="lg:w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 p-10 lg:p-16 flex flex-col justify-center text-white">
              <FaUserFriends className="text-white text-4xl mb-6 opacity-80" />
              <h3 className="text-2xl font-bold mb-4">Dedicated Support</h3>
              <p className="text-blue-100 mb-6">
                Enterprise customers receive white-glove onboarding, training,
                and a dedicated account manager to ensure your success.
              </p>
              <div className="bg-white/10 rounded-lg p-6">
                <blockquote className="text-lg italic mb-4">
                  "Rapid.ly's Enterprise solution transformed how our global
                  marketing team manages link campaigns. The custom integration
                  with our CRM has been game-changing."
                </blockquote>
                <div className="font-medium">
                  Sarah Johnson, VP of Digital Marketing at Fortune 500 Company
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features comparison */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Compare Plan Features
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-4 px-6 text-left text-gray-500 font-medium">
                    Feature
                  </th>
                  <th className="py-4 px-6 text-center text-gray-500 font-medium">
                    Free
                  </th>
                  <th className="py-4 px-6 text-center text-gray-500 font-medium">
                    Pro
                  </th>
                  <th className="py-4 px-6 text-center text-gray-500 font-medium">
                    Business
                  </th>
                  <th className="py-4 px-6 text-center text-gray-500 font-medium">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ["Link limits", "1,000", "10,000", "50,000", "Unlimited"],
                  ["Custom domains", "1", "3", "10", "Unlimited"],
                  ["Team members", "1", "Up to 5", "Up to 20", "Unlimited"],
                  [
                    "Analytics retention",
                    "30 days",
                    "1 year",
                    "3 years",
                    "5+ years",
                  ],
                  [
                    "API rate limits",
                    "100/day",
                    "1,000/day",
                    "10,000/day",
                    "Custom",
                  ],
                  ["SSO integration", "—", "—", "Basic", "Advanced"],
                  ["Branded links", "—", "✓", "✓", "✓"],
                  [
                    "Custom QR codes",
                    "Basic",
                    "Advanced",
                    "Premium",
                    "Premium",
                  ],
                  ["Link scheduling", "—", "Basic", "Advanced", "Advanced"],
                  ["Password protection", "—", "✓", "✓", "✓"],
                  ["Support", "Community", "Email", "Priority", "Dedicated"],
                ].map(([feature, free, pro, business, enterprise], idx) => (
                  <tr key={idx} className="hover:bg-blue-50">
                    <td className="py-4 px-6 font-medium text-slate-800">
                      {feature}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-500">
                      {free}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-500">
                      {pro}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-500">
                      {business}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-500">
                      {enterprise}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start mb-3">
                  <FaQuestionCircle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-slate-800">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-gray-600 pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Rapid.ly's analytics have given us insights we never had before. We've been able to optimize our campaigns and increase click-through rates by 37%.",
                name: "Michael Roberts",
                title: "Marketing Director, TechFlow",
                avatar: "MR",
              },
              {
                quote:
                  "The team collaboration features make it so easy to manage links across our global marketing team. The custom domains and branded links have improved our brand recognition.",
                name: "Jessica Chen",
                title: "Social Media Manager, GrowthWorks",
                avatar: "JC",
              },
              {
                quote:
                  "We switched from a competitor and haven't looked back. The API is powerful and well-documented, and the support team is always quick to respond to our questions.",
                name: "David Patel",
                title: "Developer, SaaS Solutions",
                avatar: "DP",
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <h3 className="font-bold text-slate-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special offer */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 text-center shadow-xl mb-20">
          <FaRegLightbulb className="text-white text-4xl mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Sign up now and get a 30-day free trial of our Pro plan. No credit
            card required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Start Your Free Trial
            </a>
            <a
              href="#"
              className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors"
            >
              Schedule a Demo
            </a>
          </div>
        </div>

        {/* Money-back guarantee */}
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col sm:flex-row items-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-6 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 text-center sm:text-left">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-gray-600 text-center sm:text-left">
              We're confident you'll love Rapid.ly. If you're not completely
              satisfied, we offer a full refund within 30 days of purchase on
              all annual plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
