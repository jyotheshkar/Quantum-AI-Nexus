import React from 'react';
import CloseIcon from '@mui/icons-material/Close'; // Ensure you have this import for the icon
import bgImage from './images/image4.jpg'; // Adjust the path to your image

const PixContent = ({ closePopup }) => {
  return (
    <div className="flex max-w-md mx-auto overflow-hidden bg-gradient-to-b from-gray-100 via-gray-500 to-gray-600 rounded-lg shadow-lg relative">
      <button onClick={closePopup} className="absolute top-0 right-0 p-2">
        <CloseIcon style={{ color: 'black' }} /> {/* Apply black color here */}
      </button>
      {/* Adjust backgroundImage style to center the image */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}></div>
      <div className="w-1/2 p-4 md:p-4">
        <h1 className="text-2xl text-center mt-4 text-black font-bold">QAIN Astra</h1>
        <p className="mt-2 text-sm text-black">QAIN Astra offers a dynamic dashboard for intuitive data analysis and visualization. With features for uploading, analyzing, and downloading data, it simplifies decision-making through engaging charts and forecasts, providing actionable insights in a user-friendly interface.</p>
      </div>
    </div>
  );
}

export default PixContent;
