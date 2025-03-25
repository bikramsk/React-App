import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { PiSpinner } from "react-icons/pi";
import QwickChat from "./QwickChat";
import GoogleSignInPopup from "./GoogleSignInPopup";

const SEMPage = () => {
  const [currentPair, setCurrentPair] = useState(0);
  const [showTick, setShowTick] = useState({});
  const [isAllSet, setIsAllSet] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

const openPopup = () => {
  setIsPopupOpen(true);
};

const closePopup = () => {
  setIsPopupOpen(false);
};

  const totalPairs = Math.max(4, 2);

  useEffect(() => {
    if (currentPair < totalPairs) {
      const spinnerTimer = setTimeout(() => {
        setShowTick((prev) => ({ ...prev, [currentPair]: true }));
        if (currentPair < 2) {
          setShowTick((prev) => ({ ...prev, [currentPair + 4]: true }));
        }
        console.log(`Pair ${currentPair + 1}: PiSpinner -> FaCheckCircle`);
      }, 1500);

      const tickTimer = setTimeout(() => {
        setCurrentPair((prev) => prev + 1);
        console.log(`Moving to next pair: ${currentPair + 2}`);
      }, 2000);

      return () => {
        clearTimeout(spinnerTimer);
        clearTimeout(tickTimer);
      };
    } else {
      setIsAllSet(true);
    }
  }, [currentPair]);

  const allPointsLoaded = isAllSet || currentPair >= totalPairs;

  return (
    <div className="flex flex-col lg:flex-row items-start justify-start p-1 h-[796px] rounded-2xl border border-[#F0F2F5] pb-6 gap-4 max-w-[1400px] mx-auto">
        
      {/* Main-Content */}
      <div className="w-full lg:max-w-[950px] bg-white rounded-lg shadow-md"> 
       
        <div className="flex space-x-4 mb-4 rounded-lg border-b border-[#E3E6EA] pt-[12px] pb-[12px] px-4">
          <button className="bg-[#625DCD] text-white w-[102px] h-[37px] rounded-lg gap-2 py-2 px-3">
            SEM Page
          </button>
          <button className=" text-[#666F8D] border border-[#F0F2F5] w-[99px] h-[37px] rounded-lg py-2 px-3 gap-2 whitespace-nowrap">
            SEO Page
          </button>
        </div>
        <div className="w-full bg-white rounded-2xl px-3 pb-6 gap-6">
          <div className="p-6 bg-[#F8F9FC] shadow-[0px_4px_8px_0px_#0000001A]">
            <div className="flex items-start space-x-3 mb-4">
             <div className="w-20 sm:w-14 md:w-16 h-20 sm:h-14 md:h-16 mt-2 sm:mt-1">
                {allPointsLoaded ? (
                    <img
                    src="/all-ok.gif"
                    alt="all ok"
                    className="w-full h-full object-contain"
                    />
                ) : (
                    <img
                    src="/hold-on.gif"
                    alt="hold on"
                    className="w-full h-full object-contain"
                    />
                )}
                </div>
              <div>
                {allPointsLoaded ? (
                  <h2 className="text-xl font-semibold text-[#27303A]">ALL SET!</h2>
                ) : (
                  <h2 className="text-xl font-semibold mb-2 text-[#27303A]">
                    Hold On For A Moment.
                  </h2>
                )}

                {allPointsLoaded ? (
                  <p className="text-[#2F3F53] text-sm sm:text-base">
                    Qwick.ai has successfully updated all settings. Your website is
                    now ready to publish! 🚀
                  </p>
                ) : (
                  <p className="text-[#2F3F53] text-sm sm:text-base">
                    Qwick.ai is updating and configuring settings based on your shared website. You can modify them anytime.
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2 h-auto">
              <h3 className="text-lg font-semibold mb-4">Branding</h3>
              {Array.from({ length: 4 }, (_, i) => (
                <div
                  key={i}
                  className={`bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F6FF_100%)] min-h-[55px] h-auto transition-opacity duration-500 rounded-lg py-1 shadow-sm ${
                    currentPair >= i
                      ? showTick[i]
                        ? "border rounded-lg shadow-sm"
                        : "opacity-100"
                      : "opacity-0"
                  }`}
                  style={
                    currentPair >= i && showTick[i]
                      ? { borderColor: "#625DCD", borderWidth: "1px" }
                      : {}
                  }
                >
                 <div className="flex items-center justify-between mx-1 sm:mx-4 max-sm:mt-2">
                        <div className="flex items-center space-x-2 sm:space-x-2 flex-1">
                            <div className="bg-[linear-gradient(180deg,#19213D_0%,#625DCD_100%)] text-white w-6 h-6 sm:w-8 sm:h-9 flex items-center justify-center flex-shrink-0">
                            {i + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-[10px] sm:text-xs md:text-sm">
                                {i === 0 && (
                                <>
                                    Brand Logo - <span className="text-[#666F8D]">Smart AI</span>
                                </>
                                )}
                                {i === 1 && "Theme"}
                                {i === 2 && (
                                <>
                                    Greeting Message - <span className="text-[#666F8D]">Smart AI</span>
                                </>
                                )}
                                {i === 3 && (
                                <>
                                    Links - <span className="text-[#666F8D]">Smart AI</span>
                                </>
                                )}
                                {i !== 0 && i !== 2 && i !== 3 && (
                                <span className="text-[#666F8D]"> (Default)</span>
                                )}
                            </h4>
                            <p className="font-inter text-[#7A7A7A] text-[10px] sm:text-xs md:text-sm break-words leading-relaxed">
                                {i === 0 && "Upload your brand identity for a personalized experience."}
                                {i === 1 && "Select a color scheme that matches your brand."}
                                {i === 2 && "Define your key message to attract users."}
                                {i === 3 &&
                                "Necessary links such as Home, Privacy Policy, and Terms & Conditions will be attached to your landing page."}
                            </p>
                            </div>
                        </div>

                    <div className="flex-shrink-0 w-5 sm:w-8 flex items-center justify-center">
                        {currentPair >= i ? (
                        showTick[i] ? (
                            
                            <img
                            src="/Vector.png"
                            alt="Vector"
                            className="w-full h-full object-contain"
                            />

                        ) : (
                            <PiSpinner className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 animate-spin text-[#7A7A7A]transition-opacity duration-500" />
                        )
                        ) : null}
                    </div>
                    </div>
                </div>
              ))}
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-4">Agent</h3>
            <div className="space-y-4">
              {Array.from({ length: 2 }, (_, i) => {
                const adjustedIndex = i + 4;
                return (
                  <div
                    key={i}
                    className={`bg-[linear-gradient(180deg,#FFFFFF_0%,#F7F6FF_100%)] min-h-[55px] h-auto transition-opacity duration-500 rounded-lg py-1 shadow-sm ${
                      currentPair >= i
                        ? showTick[adjustedIndex]
                          ? "opacity-100 border rounded-lg shadow-sm"
                          : "opacity-100"
                        : "opacity-0"
                    }`}
                    style={
                      currentPair >= i && showTick[adjustedIndex]
                        ? { borderColor: "#625DCD", borderWidth: "1px" }
                        : {}
                    }
                  >
                    <div className="flex items-center justify-between mx-1 sm:mx-4 max-sm:mt-2">
                            <div className="flex items-center space-x-2 sm:space-x-2 flex-1 ">
                                <div className="bg-[linear-gradient(180deg,#19213D_0%,#625DCD_100%)] text-white w-6 h-6 sm:w-8 sm:h-9 flex items-center justify-center flex-shrink-0">
                                {i + 1}
                                </div>
                                <div className="flex-1 min-w-[150px]">
                                <h4 className="font-semibold text-[10px] sm:text-xs md:text-sm">
                                    {i === 0 && "Agent Picture"}
                                    {i === 1 && "Agent Name"}
                                    <span className="text-[#666F8D]"> (Default)</span>
                                </h4>
                                <p className="text-[#7A7A7A] font-inter text-[10px] sm:text-xs md:text-sm break-words leading-tight sm:leading-relaxed">
                                    {i === 0 &&
                                    "Choose an avatar or upload a custom image for your assistant."}
                                    {i === 1 && "Give your chatbot a recognizable name."}
                                </p>
                                </div>
                            </div>

                     <div className="flex-shrink-0 w-5 sm:w-8 flex items-center justify-center">
                        {currentPair >= i ? (
                        showTick[i] ? (
                            
                            <img
                            src="/Vector.png"
                            alt="Vector"
                            className="w-full h-full object-contain"
                            />

                        ) : (
                            <PiSpinner className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 animate-spin text-[#7A7A7A]transition-opacity duration-500" />
                        )
                        ) : null}
                    </div>
                            </div>
                  </div>
                );
              })}
            </div>

           
            {allPointsLoaded && (
                <div className="flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-3 mt-4 sm:mt-6">
                    <button
                    className="font-inter w-full sm:w-28 h-9 sm:h-11 text-[#333333] rounded-lg border border-[#F0F2F5] py-2 px-4 bg-white shadow-sm cursor-pointer text-sm sm:text-base"
                    >
                    Edit
                    </button>
                    <button
                    className="font-montserrat w-full sm:w-44 h-9 sm:h-11 py-2 rounded-lg flex items-center justify-center shadow-[0px_1px_2px_0px_#0000000D] text-white bg-[#625DCD] gap-2 cursor-pointer text-sm sm:text-base hover:bg-[#625DCD] focus:bg-[#625DCD]"
                    onClick={openPopup}
                    >
                    <span className="whitespace-nowrap">Publish</span>
                    <FaArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                </div>
                )}
          </div>
        </div>
      </div>

      {/* Qwick-Chat Component*/}
      {/* <div className=" w-[340px] mt-4 lg:mt-0">
        <QwickChat currentPair={currentPair} />
      </div> */}

      <div className="w-[90%] min-w-[340px] sm:w-[400px] mt-4 lg:mt-0 mx-auto">
        <QwickChat currentPair={currentPair} />
        </div>

{/* Google SignIn Component */}
    <GoogleSignInPopup isOpen={isPopupOpen} onClose={closePopup} />

    </div>
  );
};

export default SEMPage;
