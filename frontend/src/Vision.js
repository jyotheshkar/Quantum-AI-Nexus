import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import backgroundImage from './images/image13.jpg'; // Make sure this path is correct.
import useObjectUrl from './useObjectUrl';
import { imageSelectionError, SUPPORTED_IMAGE_TYPES } from './imageValidation';

const Vision = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState('');
  const previewUrl = useObjectUrl(selectedImage);
  const results = {
    mode: 'illustrative_only',
    objectsIdentified: ['Object1', 'Object2'],
    details: 'No image analysis model is connected to this prototype.',
  };

  const handleBackClick = () => {
    navigate('/');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0] || null;
    const problem = imageSelectionError(file);
    setError(problem);
    if (problem) {
      setSelectedImage(null);
      e.target.value = '';
      return;
    }
    setSelectedImage(file);
  };


  return (
    <div 
      style={{ 
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        filter: 'brightness(105%)'
      }}
    >
      <div className="min-h-screen flex flex-col justify-between px-8 pt-8" style={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}>
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-12 space-y-8 md:space-y-0">
            {/* Left Side: Input Options */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col space-y-6"
            >
              <label className="flex flex-col items-center justify-center bg-[#cfb53b] text-black rounded-lg shadow-lg cursor-pointer p-6 hover:bg-opacity-80 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <UploadFileIcon fontSize="large" style={{ color: 'black' }}/>
                <span>Upload Image</span>
                <input type="file" onChange={handleImageChange} accept={SUPPORTED_IMAGE_TYPES.join(',')} className="hidden" />
              </label>
              <p className="text-[#cfb53b]">PNG, JPEG, WebP, GIF or AVIF. Maximum 5 MiB.</p>
              {error && <p role="alert" className="text-red-300">{error}</p>}

              <button disabled title="Camera capture is not implemented in this prototype" className="flex flex-col items-center justify-center bg-[#cfb53b] text-black rounded-lg shadow-lg p-6 opacity-60 cursor-not-allowed">
                <CameraAltIcon fontSize="large" style={{ color: 'black' }}/>
                <span>Camera unavailable</span>
              </button>
            </motion.div>

            {/* Image Preview */}
            {selectedImage && (
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img src={previewUrl || undefined} alt="Preview" className="max-h-60 rounded-lg mt-4"/>
              </motion.div>
            )}

            {/* Right Side: Results Display */}
            {results && (
              <motion.div
                className="bg-black p-6 rounded-lg shadow-xl border border-[#cfb53b] max-w-md"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-xl font-bold mb-2 text-[#cfb53b]">Illustrative Results</h2>
                <div className="text-sm text-[#cfb53b] overflow-auto" style={{ maxHeight: '300px' }}>
                  <pre>{JSON.stringify(results, null, 2)}</pre>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Back Button */}
      <div className="flex justify-center mb-8">
        <motion.button
          onClick={handleBackClick}
          whileHover={{ scale: 1.05 }}
          className=""
        >
          <DoubleArrowIcon className="text-[#cfb53b] transform rotate-180 hover:animate-pulse" />
        </motion.button>
      </div>
      </div>
    </div>
  );
};

export default Vision;
