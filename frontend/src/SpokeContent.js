import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import bgImageSpoke from './images/image3.jpg'; // Adjust the path to your image for SpokeContent

const SpokeContent = ({ closePopup }) => {
  return (
    <div className="flex max-w-md mx-auto overflow-hidden bg-gradient-to-b from-gray-100 via-gray-500 to-gray-600 rounded-lg shadow-lg relative">
      <button onClick={closePopup} className="absolute top-0 right-0 p-2">
        <CloseIcon style={{ color: 'black' }} />
      </button>
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${bgImageSpoke})` }}></div>
      <div className="w-1/2 p-4 md:p-4">
        <h1 className="text-2xl text-center mt-4 text-black font-bold">QAIN Vision</h1>
        <p className="mt-2 text-sm text-black">QAIN Vision empowers real-time image analysis with cutting-edge AI, enabling users to upload or capture images for instant object identification. Its intuitive interface offers detailed insights, making complex data analysis accessible and actionable for users across various domains.</p>
      </div>
    </div>
  );
}

export default SpokeContent;
