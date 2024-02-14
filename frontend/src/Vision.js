import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import backgroundImage from './images/image13.jpg'; // Make sure this path is correct.

const Vision = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState({
    objectsIdentified: ['Object1', 'Object2'],
    details: 'More detailed analysis here...',
  });
  const [error, setError] = useState('');

  const handleBackClick = () => {
    navigate('/');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
    } else {
      setSelectedImage(null);
    }
  };

  const openCamera = () => {
    console.log("Opening camera...");
  };

  const handleSubmit = () => {
    setLoading(true);
    setError('');
    console.log("Analyzing image:", selectedImage);
    
    // Simulate API call delay
    setTimeout(() => {
      setLoading(false);
      setResults({
        sentiment: 'Positive',
        entities: ['Entity1', 'Entity2'],
        keyPhrases: ['Phrase1', 'Phrase2'],
        language: 'Detected Language Here',
      }); // Replace with actual results from your analysis
    }, 2000);
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
                <input type="file" onChange={handleImageChange} accept="image/*" className="hidden" />
              </label>

              <button onClick={openCamera} className="flex flex-col items-center justify-center bg-[#cfb53b] text-black rounded-lg shadow-lg p-6 hover:bg-opacity-80 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                <CameraAltIcon fontSize="large" style={{ color: 'black' }}/>
                <span>Open Camera</span>
              </button>
            </motion.div>

            {/* Image Preview */}
            {selectedImage && (
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img src={URL.createObjectURL(selectedImage)} alt="Preview" className="max-h-60 rounded-lg mt-4"/>
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
                <h2 className="text-xl font-bold mb-2 text-[#cfb53b]">Analysis Results</h2>
                <div className="text-sm text-[#cfb53b] overflow-auto" style={{ maxHeight: '300px' }}>
                  {loading ? (
                    <div className="animate-pulse">Analyzing...</div>
                  ) : (
                    <pre>{JSON.stringify(results, null, 2)}</pre>
                  )}
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
