import React, { useState } from "react";

const PasswordStrengthChecker = () => {
  const [strength, setStrength] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(true);

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setStrength("")
    if (newPassword.length > 5) {
      setStrength("Weak");
      if (
        /[a-z]/.test(newPassword) &&
        /[0-9]/.test(newPassword) &&
        /[A-Z]/.test(newPassword) &&
        /[@#$%^&*]/.test(newPassword)
      ) {
        setStrength("Strong");
      } else if (
        /[a-z]/.test(newPassword) &&
        /[0-9]/.test(newPassword) &&
        /[A-Z]/.test(newPassword)
      ) {
        setStrength("Good");
      } else if (/[a-z]/.test(newPassword) && /[0-9]/.test(newPassword)) {
        setStrength("Moderate");
      }
    }

    setPassword(newPassword);
  };
  return (
    <div className="max-w-5xl mx-auto py-10">
      <h2 className="text-center text-3xl pb-2 text-[#144248]">
        Password Strength Meter{" "}
        <span className="text-[#019D90]">Design Pattern</span>
      </h2>
      <div className="md:w-[70%] p-10 rounded bg-white shadow-xl mx-auto mt-3 md:mt-6">
        <h1 className="text-xl font-medium mb-5 text-[#144248]">
          Password Strength Indicate
        </h1>
        <div className="relative">
          <input
            onChange={handlePasswordChange}
            className="input-text"
            type={showPassword ? "password" : "text"}
            placeholder="Your Password"
          />
          <div
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-2 right-2 text-xl uppercase font-bold tracking-wide"
          >
            {showPassword ? (
              <span className="text-[#019D90]">Show</span>
            ) : (
              <span className="text-[#e6a328]">Hide</span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 mt-5">
          <div
            className={`border-y-4 rounded ${
              strength === "Weak" ||
              strength === "Moderate" ||
              strength === "Good" ||
              strength === "Strong"
                ? "border-red-500"
                : "border-white"
            }  w-[33%]`}
          ></div>
          <div
            className={`border-y-4 rounded ${
              strength === "Moderate" ||
              strength === "Good" ||
              strength === "Strong"
                ? "border-[#e6a328]"
                : "border-white"
            }  w-[33%]`}
          ></div>
          <div
            className={`border-y-4 rounded ${
              strength === "Good" || strength === "Strong"
                ? "border-[#9de919]"
                : "border-white"
            }  w-[33%]`}
          ></div>
          <div
            className={`border-y-4 rounded ${
              strength === "Strong" ? "border-[#22ad5c] " : "border-white"
            }  w-[33%]`}
          ></div>
        </div>
        {password ? (
          <>
            {strength ? (
              <h1
                className={`text-xl font-medium mt-4 text-center ${
                  strength === "Weak" ? "text-red-500" : "text-[#144248]"
                } ${
                  strength === "Moderate" ? "text-[#e6a328]" : "text-[#144248]"
                } ${strength === "Strong" ? "text-[#9de919]" : "text-[#144248]"}
            ${strength === "Strong" ? "text-[#22ad5c]" : "text-[#144248]"}`}
              >
                Your password is {strength}
              </h1>
            ) : (
              <h1 className="text-xl font-medium mt-4 text-center text-[#144248]">
                Your password minimum 6 characters
              </h1>
            )}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PasswordStrengthChecker;
