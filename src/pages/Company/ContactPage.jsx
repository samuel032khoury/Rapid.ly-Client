import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-6xl mx-auto pt-16 pb-20 px-6 sm:px-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
            Get in Touch
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-slate-800 mb-8 leading-tight">
            <span className="text-gray-800">We'd love to </span>
            <span className="text-blue-600 italic">hear</span>
            <span className="text-gray-800"> from you</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Have questions about Rapid.ly? Looking to partner with us? Or just
            want to say hello? We're here to help and respond to every message.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 mb-20">
          {/* Contact form */}
          <div className="lg:w-2/3 bg-white rounded-2xl shadow-xl p-8 sm:p-10">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              Send us a message
            </h2>
            <form>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-2 text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="john@company.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="How can we help you?"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Leave a comment..."
                  required
                ></textarea>
              </div>
              <div className="mb-6">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="newsletter"
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                    />
                  </div>
                  <label
                    htmlFor="newsletter"
                    className="ml-2 text-sm font-medium text-gray-700"
                  >
                    I'd like to receive news and updates from Rapid.ly
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact information */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Contact information
              </h2>
              <div className="flex flex-col gap-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
                    <FaMapMarkerAlt className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-medium text-slate-800">
                      Our headquarters
                    </h3>
                    <p className="text-gray-600 mt-1">
                      123 Market Street
                      <br />
                      San Francisco, CA 94105
                      <br />
                      United States
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
                    <FaEnvelope className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-medium text-slate-800">
                      Email us
                    </h3>
                    <p className="text-gray-600 mt-1">hello@rapid.ly</p>
                    <p className="text-gray-600">support@rapid.ly</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-blue-100">
                    <FaPhoneAlt className="text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-medium text-slate-800">
                      Call us
                    </h3>
                    <p className="text-gray-600 mt-1">+1 (555) 123-4567</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Mon-Fri from 9am to 6pm PST
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-base font-medium text-slate-800 mb-4">
                  Follow us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Looking for support?</h2>
              <p className="mb-6 text-blue-100">
                Our dedicated support team is available to help with any
                technical issues or questions.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Visit Help Center
              </a>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="rounded-2xl overflow-hidden shadow-xl h-96 bg-gray-200">
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
            <p className="text-gray-600 text-xl font-medium">
              Interactive Map Placeholder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
