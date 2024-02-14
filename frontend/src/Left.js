import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PixIcon from '@mui/icons-material/Pix';
import SpokeIcon from '@mui/icons-material/Spoke';
import TokenIcon from '@mui/icons-material/Token';
import CloseIcon from '@mui/icons-material/Close';
import bgImage from './images/bg1.png'; // Adjust the path accordingly
import PixContent from './PixContent'; // Import PixContent component
import SpokeContent from './SpokeContent'; // Import SpokeContent component
import TokenContent from './TokenContent'; // Import TokenContent component

const Left = () => {
  const [popupContent, setPopupContent] = useState(null);

  const closePopup = () => {
    setPopupContent(null);
  };



  const handleButtonClick = (Component) => {
    // Pass closePopup function as a prop to the dynamically rendered component
    setPopupContent(<Component closePopup={closePopup} />);
  };

  return (
    // Initially hidden, but made visible on md screens and larger
    <div className="hidden md:flex max-w-sm h-[200px] rounded-l-full overflow-hidden relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(50%)',
        }}
      ></div>
      <div className="flex flex-col justify-center items-center h-full relative z-0">
        <motion.button
          className="text-[#cfb53b] py-2 px-4 w-full hover:shadow-[#E1C564]"
          onClick={() => handleButtonClick(PixContent)}
          whileHover={{ scale: 1.1 }}
        >
          <PixIcon />
        </motion.button>

        <motion.button
          className="text-[#cfb53b] py-2 px-4 w-full hover:shadow-[#E1C564]"
          onClick={() => handleButtonClick(SpokeContent)}
          whileHover={{ scale: 1.1 }}
        >
          <SpokeIcon />
        </motion.button>
        <motion.button
          className="text-[#cfb53b] py-2 px-4 hover:shadow-[#E1C564]"
          onClick={() => handleButtonClick(TokenContent)}
          whileHover={{ scale: 1.1 }}
        >
          <TokenIcon />
        </motion.button>
      </div>

      <AnimatePresence>
  {popupContent && (
    <motion.div
      className="popup bg-transparent text-white p-4 rounded-md fixed inset-0 m-auto flex items-center justify-center z-20"
      style={{ maxWidth: '31.5vw', maxHeight: '31.5vh' }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      {popupContent}
      <button className="absolute hidden top-0 right-0 p-2" onClick={closePopup}>
        <CloseIcon />
      </button>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default Left;
