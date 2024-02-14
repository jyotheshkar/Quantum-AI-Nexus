import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloseIcon from '@mui/icons-material/Close';
import bgImage from './images/bg2.png';
import ApiIcon from '@mui/icons-material/Api';
import GitHubIcon from '@mui/icons-material/GitHub';

const RightBox = () => {
  const [popupContent, setPopupContent] = useState(null);

  const closePopup = () => {
    setPopupContent(null);
  };

  // Removed handleButtonClick function as it's no longer needed for Instagram and LinkedIn

  // Specific function for API button click
  const handleApiButtonClick = () => {
    setPopupContent("This is the API content you requested!");
  };

  return (
    <div className="max-w-sm h-[200px] rounded-r-full -rotate-90 md:rotate-0 overflow-hidden relative">
      <style>
        {`
          @media (max-width: 768px) {
            .mobile-bg-hidden {
              background-image: none !important;
            }
          }
        `}
      </style>
      <div
        className="absolute inset-0 bg-transparent mobile-bg-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(50%)',
        }}
      >
        <div className="absolute inset-0 md:bg-black opacity-50"></div>
      </div>

      <div className="flex flex-col justify-center items-center h-full relative">
      <a href="https://www.instagram.com/jyotheshkar?igsh=MTM4eWwyY3A0cWRhZA==" target="_blank" rel="noopener noreferrer">
  <motion.button
    className="text-[#cfb53b] py-2 px-4 w-full hover:shadow-[#E1C564]"
    whileHover={{ scale: 1.1 }}
  >
    <InstagramIcon className="rotate-90 md:rotate-0" />
  </motion.button>
</a>

<a href="https://www.linkedin.com/in/jyothesh-karnam-5a90241bb/" target="_blank" >
  <motion.button
    className="text-[#cfb53b] py-2 px-4 w-full hover:shadow-[#E1C564]"
    whileHover={{ scale: 1.1 }}
  >
    <LinkedInIcon className="rotate-90 md:rotate-0" />
  </motion.button>
</a>

<a href="https://github.com/jyotheshkar" target="_blank" >
        <motion.button
          className="text-[#cfb53b] py-2 px-4 hover:shadow-[#E1C564]"
          // Set to specific API content handler
          whileHover={{ scale: 1.1 }}
        >
          <GitHubIcon className="rotate-90 md:rotate-0" />
        </motion.button>
        </a>
      </div>

      <AnimatePresence>
        {popupContent && (
          <motion.div
            className="popup bg-black text-white p-4 rounded-md fixed top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 z-10"
            initial={{ opacity: 0, y: '-100%', x: '50%' }}
            animate={{ opacity: 1, y: '-50%', x: '50%' }}
            exit={{ opacity: 0, y: '100%', x: '50%' }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
          >
            <div>{popupContent}</div>
            <button className="text-white" onClick={closePopup}>
              <CloseIcon />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RightBox;
