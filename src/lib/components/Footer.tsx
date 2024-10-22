import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaEnvelope,
} from "react-icons/fa";
import mapImage from "../../assets/xim_map.png";

const Footer = () => {
  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/place/XIM+University/@20.1586869,85.7600618,17z/data=!3m1!4b1!4m6!3m5!1s0x3a19af103360ec8f:0x734b96dc8afdf0ef!8m2!3d20.1586869!4d85.7600618!16s%2Fg%2F11c1nx4c3b?entry=ttu",
      "_blank"
    );
  };

  return (
    <footer className="w-full bg-dark-400 text-primary-400 font-[AdieuRegular] relative z-[1] pt-10">
      <div className="relative w-full flex flex-col items-center justify-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl self-start pl-3 sm:pl-5">
          How To Find Us
        </h2>
        <div
          className="w-full h-full cursor-pointer pt-2 sm:pt-4"
          onClick={handleMapClick}
          style={{ borderBottom: "5px solid white" }}
        >
          <img
            src={mapImage}
            alt="XIM University Location Map"
            className="h-64 sm:h-80 lg:h-96 w-full object-cover"
          />
        </div>
      </div>

      <div className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl w-full h-auto flex flex-col gap-10 md:flex-row justify-between px-3 sm:px-5 xl:px-5 pt-8 pb-8 lg:pt-16 lg:pb-8 xl:pt-24 xl:pb-12">
        <div className="flex flex-row max-[320px]:flex-col max-[320px]:items-start gap-3 sm:gap-12 md:gap-14 lg:gap-28 xl:gap-52 justify-between items-end">
          <div className="flex flex-col space-y-5 sm:w-auto">
            <a href="#" className="hover:text-gray-400">
              Events
            </a>
            <a href="#" className="hover:text-gray-400">
              Team
            </a>
            <a href="/memories" className="hover:text-gray-400">
              Memories
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </div>

          <div className="flex flex-col space-y-5 sm:w-auto">
            <a href="#" className="hover:text-gray-400">
              Gallery
            </a>
            <a href="#" className="hover:text-gray-400">
              Synchronize 2.0
            </a>
            <a href="#" className="hover:text-gray-400">
              Synchronize 1.0
            </a>
          </div>
        </div>

        <div className="w-full sm:w-auto mt-4 lg:mt-0">
          <div className="flex flex-col h-full sm:flex-row md:flex-col justify-between gap-y-10 sm:gap-y-5">
            <div className="flex flex-col gap-5">
              <p className="">Follow Us</p>
              <div className="flex flex-row gap-5 sm:gap-0 sm:justify-between text-base sm:text-lg">
                <a
                  href="#"
                  className="hover:text-gray-400 text-2xl border border-input rounded-full p-1"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="hover:text-gray-400 text-2xl border border-input rounded-full p-1"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="hover:text-gray-400 text-2xl border border-input rounded-full p-1"
                >
                  <FaGithub />
                </a>
                <a
                  href="#"
                  className="hover:text-gray-400 text-2xl border border-input rounded-full p-1"
                >
                  <FaFacebook />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <p className="">Mail Us</p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2 text-base" />
                <a
                  href="mailto:techfest-scse@xim.edu.in"
                  className="hover:underline text-xl  font-sans"
                >
                  techfest-scse@xim.edu.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold">SYNCHRONIZE'25</h1> */}
      <div className="w-full flex justify-center items-center border-t border-gray-700 px-3 sm:px-0">
        <div className="text-[#E3E0D1] flex flex-row justify-evenly w-full text-[calc(100vw/12)] font-black leading-none pb-3 pt-2 sm:pt-0">
          <span className="m-0 p-0">S</span>
          <span className="m-0 p-0">Y</span>
          <span className="m-0 p-0">N</span>
          <span className="m-0 p-0">C</span>
          <span className="m-0 p-0">H</span>
          <span className="m-0 p-0">R</span>
          <span className="m-0 p-0">O</span>
          <span className="m-0 p-0">N</span>
          <span className="m-0 p-0">I</span>
          <span className="m-0 p-0">Z</span>
          <span className="m-0 p-0">E</span>
          <span className="m-0 p-0">'</span>
          <span className="m-0 p-0">2</span>
          <span className="m-0 p-0">5</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
