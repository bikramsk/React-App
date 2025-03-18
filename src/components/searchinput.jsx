import React from "react";

function SearchInput({ onStartClick }) {
  return (
 
    <div className="relative h-[110px] w-[720px] max-lg:w-[90%] max-md:w-[80%] max-sm:w-full max-sm:h-auto mb-41">
      <div className="p-2.5 bg-gray-500 bg-opacity-20 rounded-[36px] size-full">
        <div className="flex items-center bg-white px-5 py-2 rounded-3xl shadow-lg size-full max-sm:flex-col max-sm:gap-4 max-sm:p-4 max-sm:py-6">
          <div className="flex items-center w-full max-sm:w-full">
            <div className="flex justify-center items-center w-12 h-12 rounded-2xl bg-gray-200 max-sm:w-10 max-sm:h-10">
              <svg
                id="2:396963"
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 max-sm:w-6 max-sm:h-6"
              >
                <path
                  d="M19.6619 20.2377C20.2529 21.2377 19.5319 22.5007 18.3699 22.5007H4.12794C2.96594 22.5007 2.24494 21.2377 2.83594 20.2377L9.95794 8.18572C10.5379 7.20372 11.9599 7.20372 12.5399 8.18572L19.6619 20.2377ZM6.74894 19.5007H15.7489L11.2489 12.0007L6.74894 19.5007ZM20.9989 9.00072C20.9989 8.17272 21.6709 7.50072 22.4989 7.50072C23.3269 7.50072 23.9989 8.17272 23.9989 9.00072V21.0007C23.9989 21.8287 23.3269 22.5007 22.4989 22.5007C21.6709 22.5007 20.9989 21.8287 20.9989 21.0007V9.00072Z"
                  fill="url(#paint0_linear_2_396963)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_2_396963"
                    x1="23.9989"
                    y1="14.9371"
                    x2="2.62555"
                    y2="15.0897"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4285F4" />
                    <stop offset="1" stopColor="#131C3F" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Type your URL or Site Map"
              className="flex-1 ml-7 text-xl text-black text-opacity-40 bg-transparent outline-none max-md:ml-4 max-md:text-lg max-sm:ml-4 max-sm:text-base"
            />
          </div>
          <div className="relative h-[50px] w-[178px] ml-auto max-md:w-[177px] max-sm:w-full max-sm:h-[40px] max-sm:ml-0">
            
            <button
              onClick={onStartClick}
              className="flex items-center p-2.5 bg-gradient-to-r from-slate-900 to-blue-500 rounded-2xl cursor-pointer size-full max-sm:justify-center"
            >
              <div className="flex justify-center items-center h-[30px] w-[30px] max-sm:h-[24px] max-sm:w-[24px]">
                <svg
                  id="2:396990"
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[30px] h-[30px] fill-white max-sm:w-[24px] max-sm:h-[24px]"
                >
                  <path d="M13.6792 11.6374C14.0582 11.5534 14.3542 11.2574 14.4382 10.8784L15.3242 6.89237C15.5562 5.84837 17.0442 5.84837 17.2762 6.89237L18.1622 10.8784C18.2462 11.2574 18.5422 11.5534 18.9212 11.6374L22.9072 12.5234C23.9512 12.7554 23.9512 14.2434 22.9072 14.4754L18.9212 15.3614C18.5422 15.4454 18.2462 15.7414 18.1622 16.1204L17.2762 20.1064C17.0442 21.1504 15.5562 21.1504 15.3242 20.1064L14.4382 16.1204C14.3542 15.7414 14.0582 15.4454 13.6792 15.3614L9.69316 14.4754C8.64916 14.2434 8.64916 12.7554 9.69316 12.5234L13.6792 11.6374Z" />
                  <path d="M8.361 19.8192C8.74 19.7352 9.036 19.4392 9.12 19.0602L9.391 17.8402C9.488 17.4022 10.112 17.4022 10.209 17.8402L10.48 19.0602C10.564 19.4392 10.86 19.7352 11.239 19.8192L12.459 20.0902C12.897 20.1872 12.897 20.8112 12.459 20.9082L11.239 21.1792C10.86 21.2632 10.564 21.5592 10.48 21.9382L10.209 23.1582C10.112 23.5962 9.488 23.5962 9.391 23.1582L9.12 21.9382C9.036 21.5592 8.74 21.2632 8.361 21.1792L7.141 20.9082C6.703 20.8112 6.703 20.1872 7.141 20.0902L8.361 19.8192Z" />
                </svg>
              </div>
              <span className="text-lg text-white whitespace-nowrap">
                Start with AI
              </span>
            </button>
      
          </div>
        </div>
      </div>
   
    </div>

    
  );
}

export default SearchInput;
