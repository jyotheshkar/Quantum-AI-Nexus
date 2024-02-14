import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import bgImageToken from './images/image5.jpg'; // Adjust the path to your image for TokenContent

const TokenContent = ({ closePopup }) => {
  return (
    <div className="flex max-w-md mx-auto overflow-hidden bg-gradient-to-b from-gray-100 via-gray-500 to-gray-600 rounded-lg shadow-lg relative">
      <button onClick={closePopup} className="absolute top-0 right-0 p-2">
        <CloseIcon style={{ color: 'black' }} />
      </button>
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${bgImageToken})` }}></div>
      <div className="w-1/2 p-4 md:p-4">
        <h1 className="text-2xl text-center mt-4 text-black font-bold">QAIN Astra</h1>
        <p className="mt-2 text-sm text-black">Nova transforms text analysis, offering customizable options for sentiment, entities, key phrases, and language detection. Its user-centric design simplifies complex analyses, providing insightful results to enhance understanding and decision-making in a sleek, interactive interface..</p>
      </div>
    </div>
  );
}

export default TokenContent;
