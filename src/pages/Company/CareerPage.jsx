import {
  FaRocket,
  FaUsers,
  FaLaptopCode,
  FaGlobe,
  FaHandshake,
  FaSeedling,
} from "react-icons/fa";

const CareersPage = () => {
  const openPositions = [
    {
      id: 1,
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "San Francisco or Remote",
      type: "Full-time",
    },
    {
      id: 2,
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "New York or Remote",
      type: "Full-time",
    },
    {
      id: 3,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
    },
    {
      id: 4,
      title: "Customer Success Specialist",
      department: "Customer Support",
      location: "London or Remote",
      type: "Full-time",
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      id: 6,
      title: "Growth Marketer",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
    },
  ];

  const values = [
    {
      icon: <FaSeedling className="text-green-500 text-4xl" />,
      title: "Growth Mindset",
      description:
        "We embrace challenges and see failures as opportunities to learn and improve.",
    },
    {
      icon: <FaRocket className="text-purple-500 text-4xl" />,
      title: "Move Fast",
      description:
        "We make decisions quickly, iterate rapidly, and value progress over perfection.",
    },
    {
      icon: <FaUsers className="text-blue-500 text-4xl" />,
      title: "Customer First",
      description:
        "Every decision starts with our users. Their success drives our success.",
    },
    {
      icon: <FaLaptopCode className="text-red-500 text-4xl" />,
      title: "Engineering Excellence",
      description:
        "We build robust, scalable solutions with meticulous attention to detail.",
    },
    {
      icon: <FaGlobe className="text-teal-500 text-4xl" />,
      title: "Global Perspective",
      description:
        "We embrace diverse viewpoints and build products for users worldwide.",
    },
    {
      icon: <FaHandshake className="text-amber-500 text-4xl" />,
      title: "Radical Transparency",
      description: "We share information openly, honestly, and constructively.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-6xl mx-auto pt-16 pb-20 px-6 sm:px-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
            Join Our Team
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-slate-800 mb-8 leading-tight">
            <span className="text-gray-800">Help us build the </span>
            <span className="text-blue-600 italic">future</span>
            <span className="text-gray-800"> of link sharing</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            At Rapid.ly, we're on a mission to revolutionize how people share
            and analyze links. Join our talented team of problem-solvers
            creating the next generation of digital tools.
          </p>
        </div>

        <div className="mb-24 rounded-2xl overflow-hidden shadow-xl">
          <div className="w-full h-96 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
            <p className="text-white text-2xl font-bold">
              Team photo placeholder
            </p>
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Why Join Rapid.ly?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Competitive Compensation",
                description:
                  "Salary packages in the top 10% of the market, equity options, and performance bonuses.",
              },
              {
                title: "Flexible Work",
                description:
                  "Work remotely, in-office, or hybrid — whatever helps you perform at your best.",
              },
              {
                title: "Health & Wellness",
                description:
                  "Comprehensive healthcare plans, mental wellness programs, and fitness stipends.",
              },
              {
                title: "Unlimited PTO",
                description:
                  "Take the time you need to recharge and bring your best self to work.",
              },
              {
                title: "Learning Budget",
                description:
                  "$3,000 annual stipend for courses, books, conferences, and career development.",
              },
              {
                title: "Team Retreats",
                description:
                  "Quarterly in-person gatherings to collaborate, innovate, and celebrate together.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24 bg-white rounded-2xl shadow-xl p-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-50 mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-24">
          <h2 className="text-3xl font-bold text-slate-800 mb-10 text-center">
            Open Positions
          </h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid gap-[1px] bg-gray-200">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className="bg-white p-6 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-4 sm:mb-0">
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-xs font-medium">
                          {position.department}
                        </span>
                        <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-medium">
                          {position.location}
                        </span>
                        <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-medium">
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <button className="inline-block px-6 py-2 rounded-full bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            Don't see your perfect role?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and
            tell us how you can contribute to our mission.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-4 rounded-full bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Submit Your Application
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
