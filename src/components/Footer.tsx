import React from 'react';
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook, FaEnvelope } from 'react-icons/fa';
import mapImage from '../assets/xim_map.png';

const Footer = () => {
  const handleMapClick = () => {
    window.open('https://www.google.com/maps/place/XIM+University/@20.1586869,85.7600618,17z/data=!3m1!4b1!4m6!3m5!1s0x3a19af103360ec8f:0x734b96dc8afdf0ef!8m2!3d20.1586869!4d85.7600618!16s%2Fg%2F11c1nx4c3b?entry=ttu', '_blank');
  };

  return (
    <footer className="w-full bg-dark-400 text-primary-400 font-[AdieuRegular]">
      <div className="w-full h-64 sm:h-80 lg:h-96 flex flex-col items-center justify-center self-start">
        <h2 className="h-12 text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-4 pt-4 sm:pt-7"> 
          How To Find Us
        </h2>
        <div 
          className="w-full h-full cursor-pointer pt-2 sm:pt-4"
          onClick={handleMapClick}
          style={{ borderBottom: '5px solid white' }}
        >
          <img 
            src={mapImage}
            alt="XIM University Location Map"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="w-full h-auto lg:h-64 py-6 lg:py-8 px-4 flex flex-wrap justify-around pt-8 lg:pt-16">
        <div className="flex flex-col space-y-2 text-xs sm:text-sm lg:text-lg w-1/2 sm:w-auto mb-4 lg:mb-0">
          <a href="#" className="hover:text-gray-400">Events</a>
          <a href="#" className="hover:text-gray-400">Team</a>
          <a href="#" className="hover:text-gray-400">Memories</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>

        <div className="flex flex-col space-y-2 text-xs sm:text-sm lg:text-lg w-1/2 sm:w-auto mb-4 lg:mb-0">
          <a href="#" className="hover:text-gray-400">Gallery</a>
          <a href="#" className="hover:text-gray-400">Synchronize 2.0</a>
          <a href="#" className="hover:text-gray-400">Synchronize 1.0</a>
        </div>

        <div className="w-full sm:w-auto mt-4 lg:mt-0">
          <div className="flex flex-col sm:flex-row lg:flex-col justify-between space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-0 lg:space-y-4">
            <div className="text-xs sm:text-sm lg:text-lg">
              <p className="font-bold">Follow Us</p>
              <div className="flex space-x-4 mt-2 lg:mt-4 text-base sm:text-lg">
                <a href="#" className="hover:text-gray-400 text-2xl"><FaInstagram /></a>
                <a href="#" className="hover:text-gray-400 text-2xl"><FaLinkedin /></a>
                <a href="#" className="hover:text-gray-400 text-2xl"><FaGithub /></a>
                <a href="#" className="hover:text-gray-400 text-2xl"><FaFacebook /></a>
              </div>
            </div>

            <div className="text-xs sm:text-sm lg:text-lg">
              <p className="font-bold">Mail Us</p>
              <p className="flex items-center mt-2 lg:mt-4 text-base sm:text-lg">
                <FaEnvelope className="mr-2" /> 
                <a href="mailto:techfest-scse@xim.edu.in" className="hover:underline">
                techfest-scse@xim.edu.in
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-6 lg:py-8 flex justify-center items-center border-t border-gray-700">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold">SYNCHRONIZE'25</h1>
      </div>
    </footer>
  );
};

export default Footer;