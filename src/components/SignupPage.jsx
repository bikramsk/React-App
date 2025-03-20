import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoMdArrowForward } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import { PiCheckCircleDuotone } from "react-icons/pi";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [companySize, setCompanySize] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [step, setStep] = useState(1);
  const [error, setError] = useState("");


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    setError(""); 
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCompanySizeChange = (size) => {
    setCompanySize(size);
    setError(""); 
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");


    if (step === 1) {
      if (!email) {
        setError("Please enter your work email");
        return;
      }
      console.log("Email submitted:", email);
      setStep(2);
    } else if (step === 2) {
      if (!fullName) {
        setError("Please enter your full name");
        return;
      }
      console.log("Full Name submitted:", fullName);
      setStep(3);
    } else if (step === 3) {
      if (!password) {
        setError("Please create a password");
        return;
      }
      console.log("Password submitted:", password);
      setStep(4);
    } else if (step === 4) {
      if (!companySize) {
        setError("Please select a company size");
        return;
      }
      console.log("Company Size submitted:", companySize);
      setStep(5);
    } else if (step === 5) {
      console.log("Final Submission:", { email, fullName, password, companySize });
    }
  };

  const handleResendEmail = () => {
    console.log("Resending email to:", email);
    
  };

  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);



  return (


    <div className="min-h-screen bg-white bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.1)_0%,transparent_60%)] flex flex-col">
      <header className="flex justify-between items-center p-4 sm:p-5">
        <Link to="/" className="text-2xl font-bold text-purple-600">
          <svg
            width="167"
            height="43"
            viewBox="0 0 167 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#225FC3] w-32 sm:w-40 md:w-[167px]"
          >
            <path d="M1.61548 33.0539C9.71282 31.5038 28.344 23.8421 38.9368 5.55048C39.0902 5.28543 38.8256 4.97634 38.5419 5.09019L36.9599 5.7251M2.58826 35.6566C10.7022 34.1034 27.9381 29.905 40.39 14.1257C40.5659 13.9029 40.9269 13.99 40.9735 14.2704L41.1753 15.4854M1.93974 37.934H4.20956C4.38865 37.934 4.53383 37.7884 4.53383 37.6087V35.494M36.4735 37.934H33.8794C33.7003 37.934 33.5552 37.7884 33.5552 37.6087V21.8296M10.6948 33.7046V37.6087C10.6948 37.7884 10.84 37.934 11.019 37.934H15.5587C15.7378 37.934 15.883 37.7884 15.883 37.6087V32.2405M10.6948 29.8005V23.4563C10.6948 23.2766 10.5496 23.1309 10.3705 23.1309H4.85809C4.679 23.1309 4.53383 23.2766 4.53383 23.4563V31.9152M15.883 27.035V16.2987C15.883 16.1191 16.0281 15.9734 16.2072 15.9734H21.8818C22.0609 15.9734 22.206 16.1191 22.206 16.2987V23.1309M22.206 29.1498V37.6087C22.206 37.7884 22.3512 37.934 22.5303 37.934H27.7185C27.8976 37.934 28.0427 37.7884 28.0427 37.6087V25.7337M28.0427 18.5761V8.16517C28.0427 7.98549 28.1879 7.83983 28.367 7.83983H33.2309C33.41 7.83983 33.5552 7.98549 33.5552 8.16517V13.208M4.20956 20.6909H10.5326M15.883 13.208H22.206M28.2049 5.39976H34.5279" stroke="currentColor" stroke-width="1.57452" stroke-linecap="round"></path>
            <path d="M73.4873 17.6631L77.9195 31.2105C77.9793 31.3934 78.2392 31.3905 78.2949 31.2063L82.197 18.3056C82.2539 18.1175 82.521 18.1198 82.5747 18.3089L86.2272 31.1722C86.2806 31.3601 86.5456 31.3639 86.6043 31.1775L90.8588 17.6631" stroke="currentColor" stroke-width="2.75541" stroke-linecap="round"></path>
            <path d="M70.1699 21.3253C70.1699 27.5927 65.0891 32.6735 58.8216 32.6735C52.5542 32.6735 47.4734 27.5927 47.4734 21.3253C47.4734 15.0578 52.5542 9.97705 58.8216 9.97705C65.0891 9.97705 70.1699 15.0578 70.1699 21.3253ZM50.3151 21.3253C50.3151 26.0233 54.1236 29.8318 58.8216 29.8318C63.5197 29.8318 67.3282 26.0233 67.3282 21.3253C67.3282 16.6272 63.5197 12.8187 58.8216 12.8187C54.1236 12.8187 50.3151 16.6272 50.3151 21.3253Z" fill="currentColor"></path>
            <path d="M115.575 29.0175C116.148 29.5093 116.219 30.3834 115.637 30.8635C114.724 31.6154 113.651 32.1579 112.492 32.4444C110.888 32.8409 109.2 32.7275 107.664 32.12C106.128 31.5125 104.819 30.4412 103.92 29.0551C103.021 27.669 102.577 26.0372 102.649 24.3867C102.721 22.7362 103.306 21.1493 104.322 19.8467C105.338 18.5441 106.735 17.5908 108.318 17.1194C109.902 16.6479 111.593 16.6819 113.156 17.2165C114.285 17.6028 115.308 18.2367 116.151 19.0653C116.69 19.5942 116.542 20.4587 115.929 20.8988C115.316 21.3389 114.47 21.1799 113.886 20.7016C113.408 20.3106 112.862 20.0052 112.271 19.8031C111.246 19.4525 110.137 19.4302 109.098 19.7394C108.06 20.0486 107.144 20.6739 106.477 21.5282C105.811 22.3825 105.427 23.4233 105.38 24.5058C105.333 25.5883 105.624 26.6586 106.214 27.5677C106.803 28.4768 107.662 29.1794 108.669 29.5779C109.677 29.9763 110.784 30.0507 111.836 29.7906C112.442 29.6407 113.012 29.3841 113.522 29.0361C114.146 28.6105 115.002 28.5257 115.575 29.0175Z" fill="currentColor"></path>
            <path d="M96.7061 31.8047V17.6631" stroke="currentColor" stroke-width="2.75541" stroke-linecap="round"></path>
            <path d="M164.621 31.8047V17.6631" stroke="currentColor" stroke-width="2.75541" stroke-linecap="round"></path>
            <path d="M122.022 31.8038L122.022 11.2024" stroke="currentColor" stroke-width="2.75541" stroke-linecap="round"></path>
            <path d="M122.022 26.04L131.45 18.0089" stroke="currentColor" stroke-width="2.75541" stroke-linecap="round"></path>
            <path d="M131.45 31.449L126.038 24.4655" stroke="currentColor" stroke-width="2.75541" stroke-linecap="round"></path>
            <path d="M67.5511 31.2778L65.2815 28.4844" stroke="currentColor" stroke-width="2.75541" stroke-linecap="round"></path>
            <ellipse cx="137.733" cy="30.9281" rx="2.09506" ry="2.09506" fill="currentColor"></ellipse>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M150.74 16.7836C146.352 16.7836 142.796 20.3401 142.796 24.7273C142.796 29.1146 146.352 32.6711 150.74 32.6711H156.125C157.538 32.6711 158.683 31.5256 158.683 30.1125V24.7273C158.683 20.3401 155.127 16.7836 150.74 16.7836ZM150.672 29.9343C153.516 29.9343 155.822 27.6285 155.822 24.784C155.822 21.9395 153.516 19.6336 150.672 19.6336C147.827 19.6336 145.521 21.9395 145.521 24.784C145.521 27.6285 147.827 29.9343 150.672 29.9343Z" fill="currentColor"></path>
          </svg>
        </Link>
        <Link
          to="/login"
          className="text-[#225FC3] border border-gray-200 bg-white rounded-lg flex items-center gap-1 p-2 sm:p-3 font-medium text-xs sm:text-sm leading-[130%] tracking-normal text-center"
        >
          Login
          <IoMdArrowForward className="w-3 h-3 sm:w-4 sm:h-4" />
        </Link>
      </header>

      <div className="flex items-center justify-center flex-1 px-4 sm:px-6">
        <div className="bg-white p-4 sm:p-6 rounded-lg border border-[#E3E6EA] shadow-[0px_1px_3px_0px_#19213D1A] w-full max-w-[735px]">
          <div className="mb-2">
            {step === 1 && (
              <div className="relative flex flex-row justify-between items-center mb-2">
                <div className="relative flex-1 text-center">
                  <h3 className="font-semibold text-sm sm:text-base leading-none tracking-normal text-[#333333]">
                    Traditional Sign up
                  </h3>
                  <div className="absolute bottom-[-8px] left-0 w-full h-px bg-[#333333]"></div>
                </div>
                <div className="relative flex-1 text-center">
                  <h3 className="font-inter font-normal text-sm sm:text-base leading-none tracking-normal text-[#333333]">
                    <Link to="/">Chat Sign up</Link>
                  </h3>
                  <div className="absolute bottom-[-8px] left-0 w-full h-px bg-gray-400"></div>
                </div>
              </div>
            )}

            <div className="flex items-center space-x-2 sm:space-x-4 mt-6 w-full">
              <div className="flex-1 flex space-x-1 sm:space-x-2">
                <div className="flex-1 bg-gray-200 rounded-full h-1 sm:h-2">
                  <div
                    className="bg-[#225FC3] h-1 sm:h-2 rounded-full"
                    style={{ width: step >= 1 ? "100%" : "0%" }}
                  ></div>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-1 sm:h-2">
                  <div
                    className="bg-[#225FC3] h-1 sm:h-2 rounded-full"
                    style={{ width: step >= 2 ? "100%" : "0%" }}
                  ></div>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-1 sm:h-2">
                  <div
                    className="bg-[#225FC3] h-1 sm:h-2 rounded-full"
                    style={{ width: step >= 3 ? "100%" : "0%" }}
                  ></div>
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-1 sm:h-2">
                  <div
                    className="bg-[#225FC3] h-1 sm:h-2 rounded-full"
                    style={{ width: step >= 4 ? "0%" : "0%" }} 
                  ></div>
                </div>
               
              </div>
              <p className="font-semibold text-xs sm:text-base leading-none tracking-normal text-[#333333] whitespace-nowrap">

                {step === 1
                  ? "0% Complete"
                  : step === 2
                  ? "25% Complete"
                  : step === 3
                  ? "50% Complete"
                  : step === 4
                  ? "50% Complete"
                  : "75% Complete"} 

              </p>
            </div>
          </div>

          {step === 1 ? (
            <>
              <h2 className="font-bold text-xl sm:text-2xl md:text-3xl leading-none tracking-normal text-[#333333] mb-2 mt-4">
                Start for free.
              </h2>
              <p className="font-normal text-sm sm:text-base leading-none tracking-normal text-[#666F8D] mb-4">
                Get 5 free AI Agent for your Business
              </p>

              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="email"
                  className="block font-medium text-sm sm:text-base leading-none tracking-normal text-[#333333] mb-2"
                >
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full md:w-[671px] h-[44px] rounded-lg flex justify-between border p-[10px] border-[#BEC1C5] focus:outline-none mb-2"
                  
                />
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <p className="font-normal text-xs sm:text-sm leading-none tracking-normal text-[#666F8D] mb-4">
                  Example: you@yourcompany.com
                </p>

                <button
                  type="submit"
                  className="w-full md:w-[671px] h-[42px] bg-[#225FC3] hover:bg-[#1A4A9C] text-white p-3 rounded-lg flex items-center justify-center border-[#225FC3] transition cursor-pointer shadow-[inset_0px_2px_1px_0px_#FFFFFF38,inset_0px_-2px_0.3px_0px_#0E387D2E,0px_2px_5px_0px_#1458C92B]"
                >
                  Continue
                  <IoMdArrowForward className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                </button>
              </form>

              <div className="flex items-center my-4">
                <span className="text-[#66658D] font-normal text-xs sm:text-sm leading-none tracking-normal">
                  Or Continue with google
                </span>
              </div>

              <div className="flex justify-start text-[#3C4043]">
                <button
                  className="sm:w-[30%] flex items-center justify-center font-roboto font-normal text-sm sm:text-base leading-none tracking-[0.01%] shadow-[0px_4px_8px_0px_#0000001A] bg-[#F7F8FA] gap-2 p-2 cursor-pointer"
                  onClick={() => console.log("clicked")}
                >
                  <FcGoogle className="h-5 w-5 sm:h-6 sm:w-6" />
                  Register with Google
                </button>
              </div>
            </>
          ) : step === 2 ? (
            <>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#333333] my-4 leading-none tracking-normal">
                Full Name
              </h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={handleFullNameChange}
                  className="w-full md:w-[671px] h-[44px] rounded-lg flex justify-between border p-[10px] border-[#BEC1C5] focus:outline-none mb-2"
                  
                />
                <p className="text-xs sm:text-sm font-normal leading-none tracking-normal text-[#666F8D] mb-4">
                  Example: John Doe
                </p>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>} {/* Added error display */}
                <button
                  type="submit"
                  className="w-full md:w-[671px] h-[42px] bg-[#225FC3] hover:bg-[#1A4A9C] text-white p-3 rounded-lg flex items-center justify-center border-[#225FC3] transition cursor-pointer shadow-[inset_0px_2px_1px_0px_#FFFFFF38,inset_0px_-2px_0.3px_0px_#0E387D2E,0px_2px_5px_0px_#1458C92B]"
                >
                  Continue
                  <IoMdArrowForward className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                </button>
              </form>
            </>
          ) : step === 3 ? (
            <>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#333333] mb-4 mt-6 leading-none tracking-normal">
                Create your password
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full md:w-[671px] h-[44px] rounded-lg flex justify-between border p-[10px] border-[#BEC1C5] focus:outline-none mb-2"
                    
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 sm:right-6 top-1/2 transform -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? (
                      <FaEye className="w-5 sm:w-6 h-5 sm:h-6" />
                    ) : (
                      <FaEyeSlash className="w-5 sm:w-6 h-5 sm:h-6" />
                    )}
                  </button>
                </div>
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <div className="flex flex-wrap gap-2 sm:gap-4 mb-4">
                  <div className="flex items-center">
                    <span
                      className={`mr-1 ${
                        hasMinLength ? "text-[#34A853]" : "text-[#E62515]"
                      }`}
                    >
                      {hasMinLength ? (
                        <PiCheckCircleDuotone className="w-4 h-4" />
                      ) : (
                        <RiCloseCircleLine className="w-4 h-4" />
                      )}
                    </span>
                    <span className="font-light text-xs leading-none tracking-normal text-[#666F8D">
                      8 character
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`mr-1 ${
                        hasNumber ? "text-[#34A853]" : "text-[#E62515]"
                      }`}
                    >
                      {hasNumber ? (
                        <PiCheckCircleDuotone className="w-4 h-4" />
                      ) : (
                        <RiCloseCircleLine className="w-4 h-4" />
                      )}
                    </span>
                    <span className="font-light text-xs leading-none tracking-normal text-[#666F8D">
                      1 number
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`mr-1 ${
                        hasUppercase ? "text-[#34A853]" : "text-[#E62515]"
                      }`}
                    >
                      {hasUppercase ? (
                        <PiCheckCircleDuotone className="w-4 h-4" />
                      ) : (
                        <RiCloseCircleLine className="w-4 h-4" />
                      )}
                    </span>
                    <span className="font-light text-xs leading-none tracking-normal text-[#666F8D">
                      1 uppercase
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`mr-1 ${
                        hasLowercase ? "text-[#34A853]" : "text-[#E62515]"
                      }`}
                    >
                      {hasLowercase ? (
                        <PiCheckCircleDuotone className="w-4 h-4" />
                      ) : (
                        <RiCloseCircleLine className="w-4 h-4" />
                      )}
                    </span>
                    <span className="font-light text-xs leading-none tracking-normal text-[#666F8D">
                      1 lowercase
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full md:w-[671px] h-[42px] bg-[#225FC3] hover:bg-[#1A4A9C] text-white p-3 rounded-lg flex items-center justify-center border-[#225FC3] transition cursor-pointer shadow-[inset_0px_2px_1px_0px_#FFFFFF38,inset_0px_-2px_0.3px_0px_#0E387D2E,0px_2px_5px_0px_#1458C92B]"
                >
                  Continue
                  <IoMdArrowForward className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                </button>
              </form>
            </>
          ) : step === 4 ? (
            <>
              <h2 className="font-bold text-xl sm:text-2xl md:text-3xl leading-none tracking-normal text-[#333333] mb-6 mt-6">
                How many people work at your company
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-y-1 gap-x-2 sm:gap-y-2 sm:gap-x-4 md:gap-x-0 mb-4 mt-4 justify-items-start font-semibold text-sm sm:text-base leading-none tracking-normal ">
                  {["1-5", "6-10", "11-100", "101-500", "501-1000", "1001-2000"].map(
                    (size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => handleCompanySizeChange(size)}
                        className={`w-full sm:w-[261.3999938964844px] h-[39px] rounded-lg gap-[10px] border p-[10px] cursor-pointer ${
                          companySize === size
                            ? "bg-blue-100 border-blue-800 text-blue-700"
                            : "bg-white border-[#225FC3] text-[#333333]"
                        }`}
                      >
                        {size}
                      </button>
                    )
                  )}
                </div>
                <input
                  type="hidden"
                  name="companySize"
                  value={companySize || ""}
                />
                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                <p className="font-normal text-xs sm:text-sm leading-none tracking-normal text-[#666F8D] mb-4">
                  By Clicking "Continue" you agree that you have read Qwick.ai{" "}
                  <Link
                    to="#"
                    className="text-[#225FC3] font-medium text-xs sm:text-sm leading-none tracking-normal underline decoration-solid [text-decoration-offset:0%]"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and have reviewed and agree to Qwick.ai{" "}
                  <Link
                    to="#"
                    className="text-[#225FC3] font-medium text-xs sm:text-sm leading-none tracking-normal underline decoration-solid [text-decoration-offset:0%]"
                  >
                    terms of services
                  </Link>.
                </p>

                <button
                  type="submit"
                  className="w-full md:w-[671px] h-[42px] bg-[#225FC3] hover:bg-[#1A4A9C] text-white p-3 rounded-lg flex items-center justify-center border-[#225FC3] transition cursor-pointer shadow-[inset_0px_2px_1px_0px_#FFFFFF38,inset_0px_-2px_0.3px_0px_#0E387D2E,0px_2px_5px_0px_#1458C92B]"
                >
                  Continue
                  <IoMdArrowForward className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
                </button>
              </form>
            </>
          ) : step === 5 ? (
      
        <>
          <h2 className="text-xl sm:text-2xl md:text-3xl leading-tight tracking-normal text-[#333333] mb-2">
            Verify your email
          </h2>
          <p className="font-bold text-lg sm:text-xl md:text-2xl lg:text-4xl leading-tight tracking-normal text-[#333333] mb-2">
            {email}
          </p>
          <p className="font-normal text-lg sm:text-xl md:text-2xl lg:text-4xl leading-tight tracking-normal text-[#333333] mb-4">
            To start using Qwick.ai
          </p>
          <p className="font-normal text-sm sm:text-base leading-relaxed tracking-normal text-[#666F8D] mb-4">
            Check your spam folder or try resending the email.
          </p>
          <span className="font-normal text-sm sm:text-base leading-relaxed tracking-normal text-[#333333] flex flex-wrap items-center gap-1">
            Didn’t receive the email?{" "}
            <button
              onClick={handleResendEmail}
              className="text-[#225FC3] font-semibold text-sm sm:text-base leading-relaxed tracking-normal text-center underline underline-offset-2 decoration-solid decoration-auto cursor-pointer hover:text-[#1A4A9C] transition-colors"
            >
              Resend
            </button>
          </span>
        </>

          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SignUp;

