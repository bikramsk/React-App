import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const GoogleSignInPopup = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      const originalPaddingRight = window.getComputedStyle(document.body).paddingRight;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      return () => {
        document.body.style.overflow = originalStyle;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50 animate-fadeIn">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>

      <div className="bg-white rounded-lg shadow-lg w-[90%] sm:w-[480px] h-auto min-h-[300px] sm:h-[365px] relative font-roboto">
        {/* Header */}
        <div className="p-4 sm:p-6 bg-white rounded-lg shadow-[0px_2px_4px_0px_#0000001A]">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <FcGoogle className="w-6 h-6 sm:w-8 sm:h-8" />
              <span className="text-base sm:text-lg font-medium text-[#5F6368] leading-none tracking-wide">
                Sign in to MyApp with Google
              </span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              <FaTimes className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-4 sm:px-8 py-4">
          <div className="flex items-center mt-4 sm:mt-6 space-x-2 sm:space-x-3 mb-4">
            <img
              src="/bot.png"
              alt="chat bot"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
            />
            <div className="space-y-0.5 sm:space-y-1">
              <p className="text-base sm:text-lg font-medium text-[#3C4043] leading-none tracking-wider">
                UI August
              </p>
              <p className="text-xs sm:text-sm font-normal leading-none text-[#5F6368] tracking-[0.2%]">
                username@gmail.com
              </p>
            </div>
          </div>

          <button className="w-full sm:w-[400px] h-12 sm:h-14 bg-[#1A73E8] text-white py-2 my-4 rounded-lg hover:bg-[#1A73E8] font-bold text-base sm:text-lg leading-none tracking-normal text-center cursor-pointer">
            Continue as Augustine
          </button>

          <p className="text-sm sm:text-base text-[#5F6368]">
            To create your account, Google will share your name, email address,
            and profile picture with "Qwick.ai". See "Qwick.ai"'s{" "}
            <Link to="#" className="text-[#4285F4] hover:underline">
              privacy policy
            </Link>{" "}
            and{" "}
            <Link to="/terms-conditions" className="text-[#4285F4] hover:underline">
              terms of service
            </Link>.
          </p>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default GoogleSignInPopup;
