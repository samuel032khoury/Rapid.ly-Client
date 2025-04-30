import {
  FaSearch,
  FaRegBookmark,
  FaRegClock,
  FaRegLightbulb,
} from "react-icons/fa";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How Link Shortening Can Boost Your Marketing ROI",
      excerpt:
        "Discover how smart link management can dramatically improve your campaign performance and provide deeper audience insights.",
      category: "Marketing",
      readTime: "5 min read",
      date: "April 22, 2025",
      image: "/images/blog-marketing.jpg",
    },
    {
      id: 2,
      title: "The Future of Link Analytics in 2025",
      excerpt:
        "Exploring emerging trends in link tracking technology and how they're reshaping digital marketing strategies worldwide.",
      category: "Analytics",
      readTime: "7 min read",
      date: "April 15, 2025",
      image: "/images/blog-analytics.jpg",
    },
    {
      id: 3,
      title: "Building Trust Through Secure Link Sharing",
      excerpt:
        "In an age of increasing online security concerns, learn how protected links can enhance your brand's reputation.",
      category: "Security",
      readTime: "4 min read",
      date: "April 8, 2025",
      image: "/images/blog-security.jpg",
    },
    {
      id: 4,
      title: "Link Management Best Practices for Growing Teams",
      excerpt:
        "As your organization scales, effective link organization becomes critical. Here's how to keep your team efficient.",
      category: "Productivity",
      readTime: "6 min read",
      date: "April 1, 2025",
      image: "/images/blog-productivity.jpg",
    },
  ];

  const categories = [
    "All",
    "Marketing",
    "Analytics",
    "Security",
    "Productivity",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-white to-blue-50">
      <div className="max-w-6xl mx-auto pt-16 pb-20 px-6 sm:px-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
            Rapid.ly Blog
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-slate-800 mb-8 leading-tight">
            <span className="text-gray-800">Insights for the </span>
            <span className="text-blue-600 italic">connected</span>
            <span className="text-gray-800"> world</span>
          </h1>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Latest trends, strategies, and thought leadership on link
            management, analytics, and digital optimization.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 mb-12 flex flex-col sm:flex-row items-center justify-between">
          <div className="relative w-full sm:w-1/2 mb-4 sm:mb-0">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
            {categories.map((category, idx) => (
              <span
                key={idx}
                className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${
                  idx === 0
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-16 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 h-64 md:h-auto bg-gray-200">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
            </div>
            <div className="md:w-1/2 p-8 md:p-12">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-gray-500 text-sm flex items-center">
                  <FaRegClock className="mr-1" />8 min read
                </span>
              </div>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">
                Maximizing Engagement: The Science Behind Effective Link Sharing
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                In this comprehensive guide, we explore how timing, context, and
                presentation significantly impact link performance across
                different platforms and audiences.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-200 mr-3"></div>
                  <div>
                    <p className="font-medium text-slate-800">Sarah Johnson</p>
                    <p className="text-gray-500 text-sm">April 28, 2025</p>
                  </div>
                </div>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Read Article →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl hover:translate-y-[-4px]"
            >
              <div className="h-48 bg-gray-200">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-50 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <FaRegClock className="mr-1" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-5 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500 text-sm">{post.date}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-blue-600 rounded-2xl p-10 text-center shadow-xl">
          <div className="mb-6">
            <FaRegLightbulb className="text-white text-4xl mx-auto" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay ahead with our newsletter
          </h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-8">
            Get the latest insights, tips and updates on link management and
            analytics delivered straight to your inbox. No spam, just valuable
            content.
          </p>
          <div className="flex flex-col sm:flex-row max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 mb-3 sm:mb-0 sm:mr-3 rounded-lg border-2 border-blue-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
            <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
