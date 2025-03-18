import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import { IoMdArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { PiSpinner } from "react-icons/pi";

function HomePage({ isSettingUp, onStartClick }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepStatus, setStepStatus] = useState({
    1: "pending",
    2: "pending",
    3: "pending",
    4: "pending",
    5: "pending",
  });

  useEffect(() => {
    if (isSettingUp) {
      const steps = [
        () => {
          setStepStatus((prev) => ({ ...prev, 1: "loading" }));
          setCurrentStep(1);
          setTimeout(() => {
            setStepStatus((prev) => ({ ...prev, 1: "completed" }));
          }, 1500);
        },
        () => {
          setStepStatus((prev) => ({ ...prev, 2: "loading" }));
          setCurrentStep(2);
          setTimeout(() => {
            setStepStatus((prev) => ({ ...prev, 2: "completed" }));
          }, 1500);
        },
        () => {
          setStepStatus((prev) => ({ ...prev, 3: "loading" }));
          setCurrentStep(3);
          setTimeout(() => {
            setStepStatus((prev) => ({ ...prev, 3: "completed" }));
          }, 1500);
        },
        () => {
          setStepStatus((prev) => ({ ...prev, 4: "loading" }));
          setCurrentStep(4);
          setTimeout(() => {
            setStepStatus((prev) => ({ ...prev, 4: "completed" }));
          }, 1500);
        },
        () => {
          setStepStatus((prev) => ({ ...prev, 5: "loading" }));
          setCurrentStep(5);
          setTimeout(() => {
            setStepStatus((prev) => ({ ...prev, 5: "completed" }));
          }, 1500);
        },
      ];
      steps.forEach((step, index) => {
        setTimeout(step, index * 3000);
      });
    }
  }, [isSettingUp]);

  if (isSettingUp) {
    return (
      <div
        className="min-h-screen bg-white bg-[radial-gradient(ellipse_at_bottom,rgba(0,0,0,0.1)_0%,transparent_60%)] flex flex-col
"
      >
        <header className="flex justify-between items-center p-5">
          <a href="/" className="text-2xl font-bold text-purple-600">
            Qwick.ai
          </a>
          <a
            href="#"
            className="text-purple-600 text-lg border border-gray-300 bg-white rounded-lg flex items-center gap-2 p-2"
          >
            Login
            <IoMdArrowForward />
          </a>
        </header>

        <main className="flex-grow flex items-center justify-center">
          <div className="bg-white p-4 rounded-lg shadow-md text-left w-[423px] min-h-[303px] border-b border-gray-400 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-gray-800">
              Setting Up Your SEO Page...!
            </h2>
            <p className="text-gray-600">
              We're refining your optimization code for faster performance and
              better rankings.
            </p>
            <p className="text-gray-600">
              This won't take long—thank you for your patience!
            </p>
            <ul className="list-none">
              {currentStep >= 1 && (
                <li className="flex items-center text-gray-600 mb-2">
                  {stepStatus[1] === "loading" ? (
                    <PiSpinner className="text-gray-600 mr-2 animate-spin h-6 w-6" />
                  ) : (
                    <span className="text-green-800 mr-2">
                      <FaCheckCircle className="h-5 w-5" />
                    </span>
                  )}
                  Checking and combining scripts
                </li>
              )}
              {currentStep >= 2 && (
                <li className="flex items-center text-gray-600 mb-2">
                  {stepStatus[2] === "loading" ? (
                    <PiSpinner className="text-gray-600 mr-2 animate-spin h-6 w-6" />
                  ) : (
                    <span className="text-green-800 mr-2">
                      <FaCheckCircle className="h-5 w-5" />
                    </span>
                  )}
                  Minifying CSS and images
                </li>
              )}
              {currentStep >= 3 && (
                <li className="flex items-center text-gray-600 mb-2">
                  {stepStatus[3] === "loading" ? (
                    <PiSpinner className="text-gray-600 mr-2 animate-spin h-6 w-6" />
                  ) : (
                    <span className="text-green-800 mr-2">
                      <FaCheckCircle className="h-5 w-5" />
                    </span>
                  )}
                  Lazy-loading non-critical assets
                </li>
              )}
              {currentStep >= 4 && (
                <li className="flex items-center text-gray-600 mb-2">
                  {stepStatus[4] === "loading" ? (
                    <PiSpinner className="text-gray-600 mr-2 animate-spin h-6 w-6" />
                  ) : (
                    <span className="text-green-800 mr-2">
                      <FaCheckCircle className="h-5 w-5" />
                    </span>
                  )}
                  Preloading critical resources
                </li>
              )}
              {currentStep >= 5 && (
                <li className="flex items-center text-gray-600">
                  {stepStatus[5] === "loading" ? (
                    <PiSpinner className="text-gray-600 mr-2 animate-spin h-6 w-6" />
                  ) : (
                    <span className="text-green-800 mr-2">
                      <FaCheckCircle className="h-5 w-5" />
                    </span>
                  )}
                  Initialising site improvements—your optimized page will be
                  ready soon
                </li>
              )}
            </ul>
          </div>
        </main>
      </div>
    );
  }

  const backgroundImageUrl = "/images/glow-bg.png";

  return (
    <div
      className=" text-white relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="text-white z-50">
        <div className="container mx-auto flex justify-between items-center w-[1244px] max-md:w-[90%] max-sm:w-[90%] mt-10">
          <div className="flex items-center space-x-2">
            <svg
              width="167"
              height="43"
              viewBox="0 0 167 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="max-md:w-[120px] max-md:h-[30px] max-sm:w-[100px] max-sm:h-[25px]"
            >
              <path
                d="M1.61548 33.0539C9.71282 31.5038 28.344 23.8421 38.9368 5.55048C39.0902 5.28543 38.8256 4.97634 38.5419 5.09019L36.9599 5.7251M2.58826 35.6566C10.7022 34.1034 27.9381 29.905 40.39 14.1257C40.5659 13.9029 40.9269 13.99 40.9735 14.2704L41.1753 15.4854M1.93974 37.934H4.20956C4.38865 37.934 4.53383 37.7884 4.53383 37.6087V35.494M36.4735 37.934H33.8794C33.7003 37.934 33.5552 37.7884 33.5552 37.6087V21.8296M10.6948 33.7046V37.6087C10.6948 37.7884 10.84 37.934 11.019 37.934H15.5587C15.7378 37.934 15.883 37.7884 15.883 37.6087V32.2405M10.6948 29.8005V23.4563C10.6948 23.2766 10.5496 23.1309 10.3705 23.1309H4.85809C4.679 23.1309 4.53383 23.2766 4.53383 23.4563V31.9152M15.883 27.035V16.2987C15.883 16.1191 16.0281 15.9734 16.2072 15.9734H21.8818C22.0609 15.9734 22.206 16.1191 22.206 16.2987V23.1309M22.206 29.1498V37.6087C22.206 37.7884 22.3512 37.934 22.5303 37.934H27.7185C27.8976 37.934 28.0427 37.7884 28.0427 37.6087V25.7337M28.0427 18.5761V8.16517C28.0427 7.98549 28.1879 7.83983 28.367 7.83983H33.2309C33.41 7.83983 33.5552 7.98549 33.5552 8.16517V13.208M4.20956 20.6909H10.5326M15.883 13.208H22.206M28.2049 5.39976H34.5279"
                stroke="white"
                strokeWidth="1.57452"
                strokeLinecap="round"
              />
              <path
                d="M73.4873 17.6631L77.9195 31.2105C77.9793 31.3934 78.2392 31.3905 78.2949 31.2063L82.197 18.3056C82.2539 18.1175 82.521 18.1198 82.5747 18.3089L86.2272 31.1722C86.2806 31.3601 86.5456 31.3639 86.6043 31.1775L90.8588 17.6631"
                stroke="white"
                strokeWidth="2.75541"
                strokeLinecap="round"
              />
              <path
                d="M70.1699 21.3253C70.1699 27.5927 65.0891 32.6735 58.8216 32.6735C52.5542 32.6735 47.4734 27.5927 47.4734 21.3253C47.4734 15.0578 52.5542 9.97705 58.8216 9.97705C65.0891 9.97705 70.1699 15.0578 70.1699 21.3253ZM50.3151 21.3253C50.3151 26.0233 54.1236 29.8318 58.8216 29.8318C63.5197 29.8318 67.3282 26.0233 67.3282 21.3253C67.3282 16.6272 63.5197 12.8187 58.8216 12.8187C54.1236 12.8187 50.3151 16.6272 50.3151 21.3253Z"
                fill="white"
              />
              <path
                d="M115.575 29.0175C116.148 29.5093 116.219 30.3834 115.637 30.8635C114.724 31.6154 113.651 32.1579 112.492 32.4444C110.888 32.8409 109.2 32.7275 107.664 32.12C106.128 31.5125 104.819 30.4412 103.9201 29.0551C103.021 27.669 102.577 26.0372 102.649 24.3867C102.721 22.7362 103.306 21.1493 104.322 19.8467C105.338 18.5441 106.735 17.5908 108.318 17.1194C109.902 16.6479 111.593 16.6819 113.156 17.2165C114.285 17.6028 115.308 18.2367 116.151 19.0653C116.69 19.5942 116.542 20.4587 115.929 20.8988C115.316 21.3389 114.47 21.1799 113.886 20.7016C113.408 20.3106 112.862 20.0052 112.271 19.8031C111.246 19.4525 110.137 19.4302 109.098 19.7394C108.06 20.0486 107.144 20.6739 106.477 21.5282C105.811 22.3825 105.427 23.4233 105.38 24.5058C105.333 25.5883 105.624 26.6586 106.214 27.5677C106.803 28.4768 107.662 29.1794 108.669 29.5779C109.677 29.9763 110.784 30.0507 111.836 29.7906C112.442 29.6407 113.012 29.3841 113.522 29.0361C114.146 28.6105 115.002 28.5257 115.575 29.0175Z"
                fill="white"
              />
              <path
                d="M96.7061 31.8047V17.6631"
                stroke="white"
                strokeWidth="2.75541"
                strokeLinecap="round"
              />
              <path
                d="M164.621 31.8047V17.6631"
                stroke="white"
                strokeWidth="2.75541"
                strokeLinecap="round"
              />
              <path
                d="M122.022 31.8038L122.022 11.2024"
                stroke="white"
                strokeWidth="2.75541"
                strokeLinecap="round"
              />
              <path
                d="M122.022 26.04L131.45 18.0089"
                stroke="white"
                strokeWidth="2.75541"
                strokeLinecap="round"
              />
              <path
                d="M131.45 31.449L126.038 24.4655"
                stroke="white"
                strokeWidth="2.75541"
                strokeLinecap="round"
              />
              <path
                d="M67.5511 31.2778L65.2815 28.4844"
                stroke="white"
                strokeWidth="2.75541"
                strokeLinecap="round"
              />
              <ellipse
                cx="137.733"
                cy="30.9281"
                rx="2.09506"
                ry="2.09506"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M150.74 16.7836C146.352 16.7836 142.796 20.3401 142.796 24.7273C142.796 29.1146 146.352 32.6711 150.74 32.6711H156.125C157.538 32.6711 158.683 31.5256 158.683 30.1125V24.7273C158.683 20.3401 155.127 16.7836 150.74 16.7836ZM150.672 29.9343C153.516 29.9343 155.822 27.6285 155.822 24.784C155.822 21.9395 153.516 19.6336 150.672 19.6336C147.827 19.6336 145.521 21.9395 145.521 24.784C145.521 27.6285 147.827 29.9343 150.672 29.9343Z"
                fill="white"
              />
            </svg>
          </div>
          <button className="flex flex-col justify-center items-center space-y-1 focus:outline-none max-md:w-6 max-md:h-6 max-sm:w-5 max-sm:h-5">
            <span className="h-0.5 w-6 bg-white max-md:h-0.5 max-md:w-5 max-sm:h-0.5 max-sm:w-4"></span>
            <span className="h-0.5 w-6 bg-white max-md:h-0.5 max-md:w-5 max-sm:h-0.5 max-sm:w-4"></span>
            <span className="h-0.5 w-6 bg-white max-md:h-0.5 max-md:w-5 max-sm:h-0.5 max-sm:w-4"></span>
          </button>
        </div>
      </div>
      <div className="flex overflow-hidden relative justify-center items-center w-full ">
        <div className="flex relative flex-col gap-8 items-center w-[1244px] z-[1] max-md:px-4 max-md:py-6 max-md:w-full max-md:mt-30">
          <div className="absolute pointer-events-none size-full">
            <div className="absolute top-[5%] left-[8%] w-1 h-1 bg-white opacity-80 rounded-full shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
            <div className="absolute top-[12%] left-[70%] w-1 h-1 bg-white opacity-70 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
            <div className="absolute top-[20%] left-[30%] w-1 h-1 bg-white opacity-80 rounded-full shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
            <div className="absolute top-[25%] left-[85%] w-1 h-1 bg-white opacity-60 rounded-full shadow-[0_0_7px_rgba(255,255,255,0.6)]" />
            <div className="absolute top-[35%] left-[15%] w-1 h-1 bg-white opacity-70 rounded-full shadow-[0_0_6px_rgba(255,255,255,0.5)]" />
            <div className="absolute top-[40%] left-[55%] w-1 h-1 bg-white opacity-80 rounded-full shadow-[0_0_9px_rgba(255,255,255,0.8)]" />
            <div className="absolute top-[48%] left-[78%] w-1 h-1 bg-white opacity-50 rounded-full shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
            <div className="absolute top-[50%] left-[10%] w-1 h-1 bg-white opacity-80 rounded-full shadow-[0_0_7px_rgba(255,255,255,0.7)]" />
            <div className="absolute top-[55%] left-[60%] w-1 h-1 bg-white opacity-60 rounded-full shadow-[0_0_6px_rgba(255,255,255,0.6)]" />
            <div className="absolute top-[65%] left-[25%] w-1 h-1 bg-white opacity-90 rounded-full shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
            <div className="absolute top-[68%] left-[80%] w-1 h-1 bg-white opacity-70 rounded-full shadow-[0_0_8px_rgba(255,255,255,0.7)]" />
            <div className="absolute top-[75%] left-[35%] w-1 h-1 bg-white opacity-60 rounded-full shadow-[0_0_6px_rgba(255,255,255,0.6)]" />
            <div className="absolute top-[80%] left-[90%] w-1 h-1 bg-white opacity-80 rounded-full shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
            <div className="absolute top-[85%] left-[15%] w-1 h-1 bg-white opacity-80 rounded-full shadow-[0_0_7px_rgba(255,255,255,0.7)]" />
            <div className="absolute top-[90%] left-[45%] w-1 h-1 bg-white opacity-90 rounded-full shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
            <div className="absolute top-[95%] left-[65%] w-1 h-1 bg-white opacity-90 rounded-full " />
          </div>

          <div className="flex flex-col gap-2 items-center text-center mt-30">
            <h1 className="mb-2 text-6xl font-bold max-md:text-5xl max-sm:text-4xl w-[897px]">
              <span className="text-white">Instantly Boost </span>
              <span
                className="text-gray-400 text-opacity-10"
                style={{ WebkitTextStroke: "1px white" }}
              >
                Site Speed
              </span>
              <br />
              <span className="text-white">& </span>
              <span
                className="text-gray-400 text-opacity-10"
                style={{ WebkitTextStroke: "1px white" }}
              >
                Automate
              </span>
              <span className="text-white"> On-Page</span>
              <br />
              <span
                className="text-gray-400 text-opacity-10"
                style={{ WebkitTextStroke: "1px white" }}
              >
                SEO
              </span>
              <span className="text-white"> Improvements</span>
            </h1>
            <p className="text-lg text-slate-50 max-sm:text-base">
              AI-Powered Tools to Enhance Speed & SEO in One Click
            </p>
          </div>
          <SearchInput onStartClick={onStartClick} />
        </div>
      </div>

      <div className="absolute bottom-[3.5px] left-[0.17%] right-[-2.15%] h-[374.96px] box-border  border-white/10 bg-[length:100%_100%] max-md:hidden md:block mr-6">
        <svg
          width="1436"
          height="376"
          viewBox="0 0 1436 376"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-0 max-md:h-[200px] max-sm:h-[150px]"
          preserveAspectRatio="xMidYMax meet"
          aria-hidden="true"
        >
          <path
            d="M81.428 250.22C57.4552 266.751 17.4874 271.57 0.5 271.913V375.499H1440.5L1469 90.9987C1448.59 94.0321 1433.35 -24.8409 1404 5.49796C1367.32 43.4216 1325 188.998 1257 90.9991C1229.5 103.499 1205.78 209.571 1181.5 210.706C1157.21 211.842 1126.08 240.455 1108 226.375C1089.92 212.296 1016.08 218.469 976.288 232.734C936.5 246.999 936.5 247.999 892.587 226.375C871.925 219.563 810.44 203.667 766.527 223.196C710 253.371 732 210.706 629.608 225.24C576.813 232.734 540 217.358 511.809 210.706C485.5 204.499 479.247 245.64 431.936 253.371C391.728 256.884 368.239 262.659 325.81 282.012C271.044 306.991 237.977 284.964 212.661 258.168C187.344 231.371 111.394 229.555 81.428 250.22Z"
            fill="url(#paint0_linear_2_396952)"
            fillOpacity="0.1"
          />
          <path
            d="M432.067 254.865L432.122 254.86L432.178 254.851C456.308 250.908 469.978 238.411 480.795 227.887C481.293 227.401 481.785 226.921 482.27 226.447C487.08 221.752 491.267 217.664 495.672 214.943C500.422 212.008 505.341 210.721 511.465 212.166C516.702 213.402 522.263 214.949 528.191 216.599C553.933 223.763 586.611 232.858 629.819 226.725C655.325 223.105 673.018 223.056 686.082 224.523C699.128 225.988 707.613 228.969 714.767 231.498L714.995 231.578C722.049 234.072 728.028 236.186 735.779 235.699C743.576 235.209 753.014 232.106 767.186 224.545C788.786 214.955 814.809 214.028 838.124 216.4C861.356 218.763 881.727 224.381 892.019 227.767C913.804 238.494 925.074 243.817 935.889 244.51C946.127 245.165 955.881 241.66 973.542 235.313C974.597 234.934 975.68 234.545 976.794 234.146C996.519 227.074 1024.78 221.983 1050.37 220.422C1063.17 219.643 1075.24 219.748 1085.21 220.913C1095.26 222.087 1102.91 224.309 1107.08 227.559C1112.01 231.395 1117.78 232.267 1123.88 231.515C1129.94 230.768 1136.45 228.403 1143.01 225.628C1145.73 224.476 1148.44 223.264 1151.14 222.055C1155.05 220.305 1158.95 218.561 1162.87 217.008C1169.44 214.403 1175.75 212.477 1181.57 212.205C1185.15 212.037 1188.51 209.953 1191.65 206.809C1194.8 203.646 1197.9 199.237 1200.96 194.042C1207.09 183.651 1213.22 169.806 1219.41 155.718L1220.12 154.105C1226.1 140.494 1232.14 126.746 1238.33 115.542C1241.54 109.722 1244.77 104.633 1248.02 100.631C1250.9 97.0833 1253.73 94.4678 1256.52 92.9233C1273.32 116.769 1288.88 126.293 1303.55 125.815C1318.34 125.333 1331.53 114.67 1343.4 100.17C1355.12 85.876 1365.85 67.4807 1375.87 50.3244L1376.41 49.394C1386.64 31.8794 1396.06 15.8609 1405.08 6.54086C1408.56 2.93625 1411.59 1.80194 1414.23 2.07756C1416.93 2.36025 1419.69 4.16606 1422.53 7.46297C1428.21 14.0694 1433.43 25.7455 1438.46 38.557C1440.03 42.5525 1441.57 46.6537 1443.11 50.7193C1446.45 59.5593 1449.73 68.2315 1453 75.2844C1455.39 80.4362 1457.84 84.858 1460.4 87.914C1462.44 90.3464 1464.75 92.1601 1467.34 92.4996L1439.14 373.999H2V273.374C10.6988 273.09 24.2915 271.755 38.6658 268.602C53.8569 265.271 70.0605 259.881 82.2796 251.455C96.8657 241.396 122.95 236.68 148.717 237.894C161.56 238.499 174.228 240.575 185.226 244.142C196.243 247.715 205.477 252.749 211.57 259.198C224.296 272.667 239.105 285.09 257.743 290.937C276.431 296.8 298.773 295.993 326.433 283.377C368.71 264.093 392.033 258.363 432.067 254.865Z"
            stroke="white"
            strokeOpacity="0.1"
            strokeWidth="3"
          />
          <defs>
            <linearGradient
              id="paint0_linear_2_396952"
              x1="718"
              y1="216.999"
              x2="718"
              y2="393.767"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4285F4" />
              <stop offset="0.46679" stopColor="#8CB7FF" />
              <stop offset="1" stopColor="#C7DCFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

export default HomePage;
