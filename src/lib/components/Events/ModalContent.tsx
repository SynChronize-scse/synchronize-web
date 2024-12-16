import React, { useEffect } from "react";

function ModalContent({ onClose, props }) {
  // Disable body scroll when modal is open
  const { title, description, date, time, img } = props;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Cleanup: Restore scroll when modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Close modal when clicking the background
  const handleBackgroundClick = (e) => {
    // Only close modal if the background itself is clicked, not the modal content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Split description by new lines if exists
  const descriptionLines = description
    ? description.split("\n")
    : [
        "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      ];

  return (
    <>
      <div>
        <div
          className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-2 flex items-center justify-center"
          onClick={handleBackgroundClick} // Close modal when background is clicked
        >
          <div
            className="w-5/6 h-fit p-[1px] bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside content
          >
            <div
              className="bg-gradient-to-r from-slate-950  via-slate-900  to-gray-950
                             text-slate-100 h-full w-full py-3 px-4 md:p-6 rounded-lg flex flex-col justify-start items-center"
              style={{
                boxShadow:
                  "0 0 8px rgba(255, 223, 0, 0.3), 0 0 15px rgba(255, 140, 0, 0.3), 0 0 20px rgba(255, 105, 0, 0.3)",
              }}
            >
              <div className="py-2 w-full font-[AdieuLight]">
                <div className="flex justify-between  md:px-4">
                  <h1 className="text-3xl md:text-4xl font-semibold text-center text-gray-100 mb-4 ">
                    {title ? title : "Event Title"}
                  </h1>
                  <h1>
                    <button
                      onClick={onClose}
                      className="text-xl md:text-2xl pt-[1px] text-gray-50 hover:text-slate-100 hover:scale-110 transition duration-100 ease-in-out"
                    >
                      &#10005;
                    </button>
                  </h1>
                </div>

                <div className="flex flex-col lg:flex-row">
                  <div className="flex justify-center">
                    {img && (
                      <img
                        src={img}
                        alt="img"
                        className="h-72 lg:h-[95%]  object-contain  rounded-3xl"
                      />
                    )}
                  </div>

                  <div className="flex flex-col space-between px-4 md:px-10 w-full pt-10 lg:mt-5 md:mt-0">
                    <h1 className="whitespace-nowrap text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-left text-gray-100 mb-4">
                      {title ? title : "Event Title"}
                    </h1>
                    <div className="flex text-sm md:text-base flex-row pb-5 justify-between items-start lg:items-center text-primary-400">
                      <div className="text-center whitespace-nowrap">
                        <p>DATE: {date ? date : "ALL 3 DAYS"}</p>
                      </div>
                      <div className="text-center whitespace-nowrap">
                        <p>TIME: {time ? time : "ALL DAY"}</p>
                      </div>
                    </div>

                    {/* Description with line breaks */}
                    <div className="leading-5 font-mono text-sm md:text-base lg:text-lg mb-1 py-4 text-left text-gray-200  md:pb-16 lg:pb-12 xl:pb-28 2xl:pb-52 ">
                      {descriptionLines.map((line, index) => (
                        <p key={index} className="mb-2">
                          {line}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-row justify-center items-center ">
                      <button className="px-4 py-[10px] shadow-lg shadow-blue-500/40 hover:shadow-indigo-500/40  bg-gradient-to-r from-teal-500 to-blue-600  active:from-orange-600 active:to-pink-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95">
                        REGISTER
                      </button>
                      {/* <a
                        href="#"
                        className="mt-5 group group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-primary-400 hover:before:[box-shadow:_20px_20px_20px_30px_#a21caf] duration-500 before:duration-500 hover:duration-500 hover:after:-right-8 hover:before:right-12 hover:before:-bottom-8 hover:before:blur origin-left hover:decoration-2 hover:text-primary-400 relative bg-neutral-800 h-fit w-fit border border-white text-left p-3 text-gray-50 text-xs sm:text-sm rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg  after:absolute after:z-10 after:w-20 after:h-20 after:content['']  after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg"
                      >
                        <span className="relative z-50">Register</span>
                      </a> */}
                      {/* <button className="border-primary-400 group uppercase flex justify-center items-center gap-2 group-hover:before:duration-500 group-hover:after:duration-500 after:duration-500 hover:border-neutral-900 duration-500 hover:duration-500 underline underline-offset-2 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-neutral-300 relative bg-neutral-900 px-7 py-2 lg:px-9 lg:py-3 border text-left p-3 text-gray-50 text-sm lg:text-base font-bold rounded-lg overflow-hidden after:absolute after:z-10 after:w-12 after:h-12 after:content[''] after:bg-primary-400 after:-left-8 after:top-8 after:rounded-full after:blur-lg hover:after:animate-pulse">
                        Register
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalContent;
