import React, { useState } from 'react';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';

const DisplayInputField = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayValue, setDisplayValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    setDisplayValue(inputValue);
  };

  return (
    <div className="flex flex-col h-full max-w-[1000px] w-full mx-auto">
      <div className="bg-black p-4 rounded-lg shadow-lg overflow-y-auto text-white flex-grow">
        {displayValue || "Your response will appear here..."}
      </div>

      <div className="flex items-center w-full justify-center mt-4">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="w-full max-w-[800px] p-2 border border-[#cfb53b] rounded-lg bg-black text-white focus:outline-none"
          placeholder="Type your message here..."
          style={{ maxWidth: 'calc(100% - 64px)' }} // Prevent overlapping with right card
        />
        <button
          onClick={handleSubmit}
          className="ml-4 text-[#cfb53b] p-2 hover:animate-pulse"
          style={{ fontSize: '24px' }}
        >
          <LabelImportantIcon style={{ fontSize: 'inherit' }} />
        </button>
      </div>
    </div>
  );
};

export default DisplayInputField;