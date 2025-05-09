import { BeatLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full bg-transparent">
      <div className="relative">
        <BeatLoader color="#7A9BFA" size={20} />
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
