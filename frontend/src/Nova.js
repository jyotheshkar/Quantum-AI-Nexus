

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Nova = () => {
  const navigate = useNavigate();
  const [text, setText] = useState('');
  const [analysisOptions, setAnalysisOptions] = useState({
    sentiment: false,
    entities: false,
    keyPhrases: false,
    language: false,
  });
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleBackClick = () => {
    navigate('/');
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleOptionChange = (option) => {
    setAnalysisOptions(prev => ({ ...prev, [option]: !prev[option] }));
  };

  const handleSubmit = () => {
    setLoading(true);
    setError('');
    console.log("Performing analysis on:", text, analysisOptions);

    setTimeout(() => {
      setLoading(false);
      setResults({
        sentiment: 'Positive',
        entities: ['Entity1', 'Entity2'],
        keyPhrases: ['Phrase1', 'Phrase2'],
        language: 'Detected Language Here',
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-[#cfb53b] flex flex-col justify-between px-8 py-8">
      <textarea
        className="w-full p-4 rounded-lg bg-[#0a0a0a] border-2 border-[#cfb53b] text-[#cfb53b] placeholder-[#cfb53b]/50"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter text here..."
        rows="4"
      />

      {!loading && results && (
        <motion.div
          className="mt-4 p-4 rounded-lg bg-[#0a0a0a] border-2 border-[#cfb53b]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <pre>{JSON.stringify(results, null, 2)}</pre>
        </motion.div>
      )}

      <div className="mt-4">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-4">
          {Object.keys(analysisOptions).map((option) => (
            <div key={option} onClick={() => handleOptionChange(option)} className="flex items-center gap-2 cursor-pointer">
              <div className={`w-10 h-6 rounded-full p-1 ${analysisOptions[option] ? 'bg-[#cfb53b]' : 'bg-gray-600'}`}>
                <motion.div
                  className="w-4 h-4 bg-black rounded-full"
                  layout
                  transition={{ type: "spring", stiffness: 700, damping: 30 }}
                  initial={false}
                  animate={{ x: analysisOptions[option] ? 16 : 0 }}
                />
              </div>
              <span>{option.charAt(0).toUpperCase() + option.slice(1)}</span>
            </div>
          ))}
        </div>

        <motion.button
          onClick={handleSubmit}
          whileHover={{ scale: 1.05 }}
          className="w-full sm:w-auto bg-[#cfb53b] hover:bg-[#b49e3b] text-black font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Analyze Text
        </motion.button>
      </div>

      {loading && <div className="mt-4 text-center">Analyzing...</div>}
      {!loading && error && <div className="mt-4 text-red-500">{error}</div>}

      <div className="flex justify-center pt-4">
        <motion.button
          onClick={handleBackClick}
          whileHover={{ scale: 1.05 }}
          className="btn btn-circle btn-ghost"
        >
          <DoubleArrowIcon className="text-[#cfb53b] transform rotate-180 hover:animate-pulse" />
        </motion.button>
      </div>
    </div>
  );
};

export default Nova;
