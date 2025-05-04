const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-500 border-t-gray-300 rounded-full animate-spin ease-in-out"></div>
      </div>
      <div className="mt-6 text-gray-600 text-xl font-medium">
        Loading data...
      </div>
      <div className="text-gray-500 mt-2 text-sm">
        Please wait while we fetch your information
      </div>
    </div>
  );
};

export default Spinner;
