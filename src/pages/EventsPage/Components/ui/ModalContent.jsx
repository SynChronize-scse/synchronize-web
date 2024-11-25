import React, { useEffect } from "react";

function ModalContent({ onClose, props }) {
    // Disable body scroll when modal is open
    const { title, description, date, time } = props;

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

    return (
        <>
            <div>
                <div
                    className="modal fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center"
                    onClick={handleBackgroundClick} // Close modal when background is clicked
                >
                    <div
                        className="w-5/6 h-[90%] p-[1px] bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside content
                    >
                        <div
                            className="bg-gradient-to-b from-black to-slate-900 text-slate-100 h-full w-full p-6 rounded-lg flex flex-col justify-start items-center"
                            style={{
                                boxShadow: "0 0 8px rgba(255, 223, 0, 0.3), 0 0 15px rgba(255, 140, 0, 0.3), 0 0 20px rgba(255, 105, 0, 0.3)"
                            }}
                        >
                            <div className="mb-4 w-full font-[AdieuLight]">
                                <div className="flex justify-between px-8">
                                    <h1 className="text-4xl font-semibold text-center text-gray-100 mb-4 ">
                                        {title ? title : "Event Title"}
                                    </h1>
                                    <h1>
                                        <button
                                            onClick={onClose}
                                            className="text-2xl text-gray-50 hover:text-slate-100 hover:scale-110 transition duration-100 ease-in-out"
                                        >
                                            &#10005;
                                        </button>
                                    </h1>
                                </div>

                                <div className="h-1/4">
                                    <img src="https://wallpaperaccess.com/full/6923230.jpg" alt="img"
                                        className="w-full h-full object-cover rounded-lg "
                                    />
                                </div>

                                <div className="flex flex-row py-5 justify-around items-center text-gray-100">
                                    <div className="text-center ">
                                        <p>DATE: {date ? date : "ALL 3 DAYS"}</p>
                                    </div>
                                    <div className="text-center">
                                        <p>TIME: {time ? time : "ALL DAY"}</p>
                                    </div>
                                </div>

                                <div className="lg:h-1/6 md:h-2/6 h-3/6 mb-1 p-6 flex-grow text-center text-gray-100">
                                    {description ? description : 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}
                                </div>

                                <div className="flex flex-row justify-center items-center ">
                                    <button
                                        className="px-4 py-2 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 active:scale-95"
                                    >
                                        REGISTER
                                    </button>
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
