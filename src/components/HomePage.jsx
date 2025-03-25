import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import { IoMdArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { PiSpinner } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";
import Logo from "./Header/Logo";



function HomePage({ isSettingUp, onStartClick }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([
    { id: "checkingScripts", status: "pending", label: "Checking and combining scripts" },
    { id: "minifyingAssets", status: "pending", label: "Minifying CSS and images" },
    { id: "lazyLoading", status: "pending", label: "Lazy-loading non-critical assets" },
    { id: "preloading", status: "pending", label: "Preloading critical resources" },
    { id: "initializing", status: "pending", label: "Initialising site improvements—your optimized page will be ready soon" },
  ]);

  useEffect(() => {
    if (isSettingUp) {
      const timers = steps.map((_, index) =>
        setTimeout(() => {
          setSteps((prev) =>
            prev.map((step, i) =>
              i === index ? { ...step, status: "loading" } : step
            )
          );
          setCurrentStep(index + 1);
          setTimeout(() => {
            setSteps((prev) =>
              prev.map((step, i) =>
                i === index ? { ...step, status: "completed" } : step
              )
            );
          }, 800);
        }, index * 3000)
      );

      return () => {
        timers.forEach((timer) => clearTimeout(timer));
      };
    }
  }, [isSettingUp]);

  
  if (isSettingUp) {
    return (      
      <div className="min-h-screen bg-white bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.1)_0%,transparent_60%)] flex flex-col">
        <header className="flex justify-between items-center p-4 sm:p-5 ">
          <Link to="/" className="text-2xl font-bold text-purple-600">
            <Logo className="text-[#225FC3] w-32 sm:w-40 md:w-[156px]" color="black" />
          </Link>
          <Link
            to="/signup"
            className="text-[#225FC3] border border-gray-200 bg-white rounded-lg flex items-center gap-1 p-2 sm:p-3 font-medium text-xs sm:text-sm leading-[130%] tracking-normal text-center"
          >
            Login
            <IoMdArrowForward className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        </header>

        <main className="flex-grow flex items-center justify-center px-4 sm:px-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md text-left w-full max-w-[427px] min-h-[250px] sm:min-h-[293px] border-b border-gray-400 flex flex-col gap-3 sm:gap-4">
            <h2 className="text-lg max-sm:text-2xl md:text-3xl text-[#333333] font-semibold text-[28px] leading-[121%] tracking-normal whitespace-nowrap text-center">
              Setting Up Your SEO Page...!
            </h2>
            <p className="text-sm sm:text-base text-center text-[#333333] font-normal leading-[121%] tracking-normal">
              We're refining your optimization code for faster performance and
              better rankings. <br />
              This won't take long—thank you for your patience!
            </p>
            <ul className="list-none text-sm sm:text-base">
              {currentStep >= 1 && (
                <li className="flex items-center text-[#333333] font-medium text-sm leading-none tracking-normal mb-3">
                  {steps[0].status === "loading" ? (
                    <PiSpinner className="text-[#333333] mr-2 animate-spin h-5 sm:h-6 w-5 sm:w-6" />
                  ) : (
                    <span className="text-[#679B22] mr-2">
                      <FaCheckCircle className="h-4 sm:h-5 w-4 sm:w-5" />
                    </span>
                  )}
                  {steps[0].label}
                </li>
              )}
              {currentStep >= 2 && (
                <li className="flex items-center text-[#333333] font-medium text-sm leading-none tracking-normal mb-3">
                  {steps[1].status === "loading" ? (
                    <PiSpinner className="text-[#333333] mr-2 animate-spin h-5 sm:h-6 w-5 sm:w-6" />
                  ) : (
                    <span className="text-[#679B22] mr-2">
                      <FaCheckCircle className="h-4 sm:h-5 w-4 sm:w-5" />
                    </span>
                  )}
                  {steps[1].label}
                </li>
              )}
              {currentStep >= 3 && (
                <li className="flex items-center text-[#333333] font-medium text-sm leading-none tracking-normal mb-3">
                  {steps[2].status === "loading" ? (
                    <PiSpinner className="text-[#333333] mr-2 animate-spin h-5 sm:h-6 w-5 sm:w-6" />
                  ) : (
                    <span className="text-[#679B22] mr-2">
                      <FaCheckCircle className="h-4 sm:h-5 w-4 sm:w-5" />
                    </span>
                  )}
                  {steps[2].label}
                </li>
              )}
              {currentStep >= 4 && (
                <li className="flex items-center text-[#333333] font-medium text-sm leading-none tracking-normal mb-3">
                  {steps[3].status === "loading" ? (
                    <PiSpinner className="text-[#333333] mr-2 animate-spin h-5 sm:h-6 w-5 sm:w-6" />
                  ) : (
                    <span className="text-[#679B22] mr-2">
                      <FaCheckCircle className="h-4 sm:h-5 w-4 sm:w-5" />
                    </span>
                  )}
                  {steps[3].label}
                </li>
              )}
              {currentStep >= 5 && (
                <li className="flex items-center text-[#333333] font-medium text-sm leading-none tracking-normal">
                  {steps[4].status === "loading" ? (
                    <PiSpinner className="text-[#333333] mr-2 animate-spin h-5 sm:h-6 w-5 sm:w-6" />
                  ) : (
                    <span className="text-[#679B22] mr-2">
                      <FaCheckCircle className="h-4 sm:h-5 w-4 sm:w-5" />
                    </span>
                  )}
                  {steps[4].label}
                </li>
              )}
            </ul>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="text-white relative overflow-hidden min-h-screen bg-[#0f0f20] flex flex-col">
      
      {/* Background */}
      <div className="absolute inset-0 z-0 min-h-full">
        <div className="inline-flex h-[768px] items-start justify-center absolute top-0 left-[-500px]">
          <div
            className="relative w-[1200px] h-[812px] mb-[-44px] blur-[0.5px] bg-gradient-to-r from-[rgba(0,187,255,1)] to-[rgba(0,187,255,0)]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(0, 187, 255, 1) 0%, rgba(0, 187, 255, 0) 100%)",
            }}
          />
          <div
            className="relative w-[1240px] h-[812px] mb-[-44px] blur-[0.5px] bg-gradient-to-r from-[rgba(210,97,255,1)] to-[rgba(210,97,255,0)]"
            style={{
              background:
                "radial-gradient(50% 50% at 50% 50%, rgba(210, 97, 255, 1) 0%, rgba(210, 97, 255, 0) 100%)",
            }}
          />
        </div> 
       

        <img
          className="absolute w-[1439px] h-[325px] top-[443px] left-0"
          src="/vector.svg"
          loading="lazy"
        />

        <div
          className="absolute w-[1440px] h-full top-0 left-0"
          style={{
            background:
              "radial-gradient(50% 50% at 50% 50%, rgba(147, 0, 209, 0) 0%, rgba(16, 0, 41, 1) 100%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-grow">
        <div className="text-white">
          <div className=" mx-auto flex justify-between items-center w-[1244px] max-md:w-[90%] max-sm:w-[90%] mt-10 md:px-6 sm:px-3">
            <div className="flex items-center space-x-2 ">
              <Logo className="max-md:w-[120px] max-md:h-[30px] max-sm:w-[100px] max-sm:h-[25px]" />
            </div>
            <button
              className="flex flex-col justify-center items-center space-y-1 focus:outline-none focus:ring-2 focus:ring-white max-md:w-6 max-md:h-6 max-sm:w-5 max-sm:h-5"
              aria-label="Toggle navigation menu"
              aria-expanded="false"
            >
              <span className="h-[2px] w-6 bg-white max-md:h-[1.5px] max-md:w-5 max-sm:h-[1px] max-sm:w-4"></span>
              <span className="h-[2px] w-6 bg-white max-md:h-[1.5px] max-md:w-5 max-sm:h-[1px] max-sm:w-4"></span>
              <span className="h-[2px] w-6 bg-white max-md:h-[1.5px] max-md:w-5 max-sm:h-[1px] max-sm:w-4"></span>
            </button>
          </div>
        </div>
        <div className="flex overflow-hidden relative justify-center items-center w-full">
          <div className="flex relative flex-col gap-6 items-center w-[1244px] min-h-[578px] h-auto max-md:px-4 max-md:py-2 max-md:w-full max-md:mt-10 min-[320px]:w-full bg-transparent ">
            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center mt-10 sm:mt-10 font-montserrat ">
              <h1 className="mb-2 sm:mb-3 text-4xl sm:text-5xl md:text-6xl font-bold w-full px-4">
                <span className="text-[#FFFFFF4D] text-opacity-30 font-bold text-4xl sm:text-5xl md:text-[65px] leading-tight sm:leading-snug tracking-normal [-webkit-text-stroke:0.6px_white]">
                  Generate{" "}
                </span>

                <span className="text-white font-bold text-4xl sm:text-5xl md:text-[65px] leading-tight sm:leading-snug tracking-normal">
                  And<br /> Publish your{" "}
                </span>
                <span className="text-[#FFFFFF4D] text-opacity-30 font-bold text-4xl sm:text-5xl md:text-[65px] leading-tight sm:leading-snug tracking-normal [-webkit-text-stroke:0.6px_white]">
                  site
                </span>
                <span className="text-white font-bold text-4xl sm:text-5xl md:text-[65px] leading-tight sm:leading-snug tracking-normal">
                  {" "}
                  with<br /> AI in{" "}
                </span>
                <span className="text-[#FFFFFF4D] text-opacity-30 font-bold text-4xl sm:text-5xl md:text-[65px] leading-tight sm:leading-snug tracking-normal [-webkit-text-stroke:0.6px_white]">
                  Seconds.
                </span>
              </h1>
              <p className="font-montserrat md:text-md text-[#F7F8FA]  leading-relaxed tracking-normal px-4 text-center max-w-[740px]">
                Turn your website into an interactive experience! Empower users
                with real-time answers and seamless form-filling assistance that
                aligns with your brand.
              </p>
            </div>
            <SearchInput onStartClick={onStartClick} />
            
            {/* Learn more  */}
            <div className="-mt-20 mb-10 text-center flex items-center gap-3">
              <p className="text-base sm:text-lg text-[#7e7f81] font-normal leading-relaxed tracking-normal [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]">
                Learn more about Qwick.ai
              </p>
              <FaArrowDown className="text-[#7e7f81]"/>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default HomePage;
