import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFoundPage = ({
  statusCode = 404,
  message = "The page you're looking for doesn't exist.",
  suggestion = "You might have the wrong address, or the page may have moved.",
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8 relative">
          <div className="text-9xl font-bold text-blue-500 opacity-10 select-none">
            {statusCode}
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
          Oops! Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-2">{message}</p>
        <p className="text-sm text-gray-500 mb-8">{suggestion}</p>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <FaHome className="mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Help Link */}
        <div className="mt-8 text-sm text-gray-500">
          <span>Need help? </span>
          <Link
            to="/about"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
