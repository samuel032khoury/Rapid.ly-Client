const TextField = ({
  label,
  id,
  placeholder,
  register,
  errors,
  icon = null,
  required = false,
  ...props
}) => {
  const error = errors && errors[id];

  return (
    <div className="w-full">
      <div className="flex items-start gap-4">
        <label
          htmlFor={id}
          className="w-1/4 pt-2 font-medium text-slate-700 flex-shrink-0"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>

        <div className="w-3/4">
          <div
            className={`
              relative flex items-center rounded-lg overflow-hidden
              ${
                error
                  ? "border border-red-400 ring-1 ring-red-300"
                  : "border border-slate-200 focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-300"
              } 
              transition-all duration-200 shadow-sm focus-within:shadow-md bg-white
            `}
          >
            {icon && (
              <div className="flex items-center justify-center w-12 h-10 text-slate-400">
                <div className="text-lg py-1 px-2">{icon}</div>
              </div>
            )}

            <input
              id={id}
              type="text"
              className={`
                flex-1 py-2 pe-3 ps-0 bg-white text-slate-800
                placeholder-slate-400 border-0
                focus:outline-none focus:ring-0 text-base
              `}
              placeholder={placeholder}
              {...(register ? register(id) : {})}
              {...props}
            />
          </div>

          <div className="h-5 mt-1 ml-1">
            {error && (
              <p className="text-red-500 text-sm animate-fadeIn">
                {error.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default TextField;
