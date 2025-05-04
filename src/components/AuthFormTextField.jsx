import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaShieldAlt,
  FaUser,
} from "react-icons/fa";

const icons = {
  user: <FaUser />,
  mail: <FaEnvelope />,
  lock: <FaLock />,
  shield: <FaShieldAlt />,
  eye: <FaEye />,
  eyeSlash: <FaEyeSlash />,
};

const FormTextField = ({
  label,
  id,
  type = "text",
  placeholder,
  register,
  errors,
  icon = null,
  ...props
}) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const isPassword = type === "password";
  const actualType = isPassword && showPassword ? "text" : type;
  const error = errors[id];

  useEffect(() => {
    if (props.value !== undefined) {
      setHasValue(props.value.length > 0);
    }
  }, [props.value]);

  const labelVariants = {
    focused: {
      y: -24,
      scale: 0.85,
      color: focused ? "#3b82f6" : "#64748b",
      transition: { duration: 0.2 },
    },
    blurred: {
      y: 0,
      scale: 1,
      color: "#94a3b8",
      transition: { duration: 0.2 },
    },
  };

  const handleInputChange = (e) => {
    setHasValue(e.target.value.length > 0);
    if (props.onChange) {
      props.onChange(e);
    }
  };

  const handleInputBlur = (e) => {
    setFocused(false);
    setHasValue(e.target.value.length > 0);
    if (props.onBlur) {
      props.onBlur(e);
    }
  };

  return (
    <div className="relative">
      <div
        className={`
        relative rounded-lg overflow-hidden transition-all duration-300 
        ${focused ? "shadow-md" : "shadow-sm"} 
        ${
          error
            ? "border border-red-300"
            : focused
            ? "border border-blue-300"
            : "border border-slate-200"
        } 
        group
      `}
      >
        <div className="flex items-center bg-slate-50/50">
          {icon && (
            <div
              className={`
              flex items-center justify-center w-12 h-12 transition-colors
              ${focused ? "text-blue-500" : "text-slate-400"}
              ${error ? "text-red-500" : ""}
            `}
            >
              <motion.div
                initial="initial"
                whileHover="hover"
                variants={{
                  initial: { scale: 1 },
                  hover: {
                    scale: 1.2,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                    },
                  },
                }}
                className="text-lg"
              >
                {icons[icon]}
              </motion.div>
            </div>
          )}

          <div className="relative flex-1">
            <motion.label
              htmlFor={id}
              initial={false}
              animate={focused || hasValue ? "focused" : "blurred"}
              variants={labelVariants}
              className={`
                absolute left-0 pointer-events-none text-slate-400 px-0
                ${error ? "text-red-500" : ""} 
                ${focused || hasValue ? "top-0" : "top-3"} 
                origin-left z-10
              `}
            >
              {label}
            </motion.label>

            <input
              id={id}
              type={actualType}
              className={`
                w-full py-3 px-0 bg-transparent border-0 text-slate-800 placeholder-transparent
                focus:outline-none focus:ring-0 text-base transition-all duration-200
                ${
                  focused || hasValue
                    ? "placeholder-slate-400"
                    : "placeholder-transparent"
                }
              `}
              placeholder={placeholder}
              onFocus={() => setFocused(true)}
              onBlur={handleInputBlur}
              onChange={handleInputChange}
              {...register(id, {
                onChange: handleInputChange,
                onBlur: handleInputBlur,
              })}
              {...props}
            />
          </div>

          {isPassword && (
            <button
              type="button"
              className="pr-4 flex items-center justify-center h-12 text-slate-400 hover:text-slate-600 transition-colors"
              onClick={() => setShowPassword(!showPassword)}
              tabIndex="-1"
            >
              {showPassword ? icons.eyeSlash : icons.eye}
            </button>
          )}
        </div>

        <div
          className={`
          absolute bottom-0 left-0 h-0.5 transition-all duration-300 ease-out
          ${error ? "bg-red-500" : "bg-blue-500"}
          ${focused ? "w-full" : "w-0"}
        `}
        ></div>
      </div>

      <div className="min-h-[20px] mt-1 ml-1">
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-red-500 text-sm"
          >
            {error.message}
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default FormTextField;
