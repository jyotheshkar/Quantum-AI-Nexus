import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import CloseIcon from '@mui/icons-material/Close';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Scatter,
  Tooltip,
  Legend,
  AreaChart,
  Area,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';






const AstraPage = () => {
  const navigate = useNavigate();
  const [popupContent, setPopupContent] = useState(null);

  const handleBackClick = () => {
    navigate('/');
  };

  // Dummy data for the graphs
  // Dummy data for the graphs
  const analysisData = [
    { name: 'A', uv: 400, pv: 2400 },
    { name: 'B', uv: 362, pv: 1200 },
    { name: 'C', uv: 20, pv: 4000 },
    { name: 'D', uv: 698, pv: 7000 },
    { name: 'E', uv: 489, pv: 4280 },
    { name: 'F', uv: 239, pv: 6290 },
    { name: 'G', uv: 359, pv: 1030 },
  ];

  const forecastData = [
    { name: 'A', uv: 450, pv: 2890 },
    { name: 'B', uv: 1230, pv: 560 },
    { name: 'C', uv: 780, pv: 2450 },
    { name: 'D', uv: 1650, pv: 950 },
    { name: 'E', uv: 590, pv: 3000 },
    { name: 'F', uv: 2300, pv: 670 },
    { name: 'G', uv: 880, pv: 1580 },
  ];
  
  const predictiveData = [
    { name: 'A', uv: 2900, pv: 400 },
    { name: 'B', uv: 600, pv: 2700 },
    { name: 'C', uv: 2100, pv: 1200 },
    { name: 'D', uv: 400, pv: 2200 },
    { name: 'E', uv: 1900, pv: 800 },
    { name: 'F', uv: 100, pv: 2900 },
    { name: 'G', uv: 2800, pv: 500 },
  ];
  
  
  const data = [
    { name: 'Segment A', value: 30 },
    { name: 'Segment B', value: 40 },
    { name: 'Segment C', value: 30 },
  ];
  
  const GOLD_SHADES = ['#D4AF37', '#FFD700', '#B8860B']; // Different shades of gold for each segment
  
  const donutNames = ['Data Analysis', 'Forcasting Model', 'Predictive Analysis']; 
  return (
    <motion.div className="bg-black text-[#cfb53b] min-h-screen flex flex-col justify-between px-4 md:px-8 py-8 md:h-screen overflow-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
      <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-4">


      <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-3 gap-4">
  {/* Graphs */}
  {[analysisData, forecastData, predictiveData].map((data, index) => (
    <motion.div className="bg-[#1a1a1a] p-4 rounded flex flex-col items-center justify-center shadow-lg"
      style={{ minHeight: '60vh' }} // Adjusted to remove minWidth
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      key={index}>
      <h3 className="text-[#cfb53b] mb-4">{['Data Analysis', 'Forecasting Model', 'Predictive Analysis'][index]}</h3>
      <ResponsiveContainer width="100%" height={400}>
        {index === 0 ? (
          // AreaChart for Analysis Graph with Gradient Fill
          <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <defs>
              <linearGradient id={`colorUv${index}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="gold" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="black" stopOpacity={0.8}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" stroke="#cfb53b" />
            <YAxis stroke="#cfb53b" angle={-90} dx={-10} textAnchor="end" />
            <Tooltip className="bg-gray-300 round-md" />
            <Legend />
            <Area type="monotone" dataKey="pv" stroke="#cfb53b" fillOpacity={1} fill={`url(#colorUv${index})`} />
          </AreaChart>
        ) : (
          // LineChart for Forecast and Predictive Analysis Graphs with specified lines and scatter plots
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" stroke="#cfb53b"/>
            <YAxis stroke="#cfb53b" angle={-90} dx={-10} textAnchor="end" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="gray" />
            <Scatter dataKey="uv" fill="gold" />
            <Line type="monotone" dataKey="pv" stroke="gold" />
            <Scatter dataKey="pv" fill="white" />
          </LineChart>
        )}
      </ResponsiveContainer>
    </motion.div>
  ))}
</div>





<div className="md:col-span-3 bg-[#1a1a1a] p-6 rounded-lg shadow-xl flex flex-col md:flex-row justify-evenly items-center h-auto md:h-full">
  <h2 className="text-lg font-semibold text-[#cfb53b] mb-4 md:mb-0">Data Analytics Dashboard</h2>
  <div className="flex justify-center items-center space-x-4">
    {Array.from({ length: 3 }).map((_, index) => {
      // Calculate different filling levels for each donut
      const fillPercentage = 25 + index * 25; // Example: 25%, 50%, 75%
      const circleCircumference = 2 * Math.PI * 15.91549430918954;
      const filledLength = (circleCircumference * fillPercentage) / 100;
      const unfilledLength = circleCircumference - filledLength;

      return (
<div key={index} className="flex flex-col items-center">
  <svg width="60" height="60" viewBox="0 0 42 42" className="mx-8">
    <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#292929" strokeWidth="5"></circle>
    <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#cfb53b" strokeWidth="5" strokeDasharray={`${filledLength} ${unfilledLength}`} strokeDashoffset="25"></circle>
  </svg>
  <span className="text-xs mt-2 text-[#cfb53b]">{donutNames[index]}</span>
</div>
      );
    })}
  </div>
  {/* Pie Chart section remains unchanged */}
  <div className="flex items-center ">
    <PieChart width={80} height={80}>
      <Pie data={data} cx="40" cy="40" outerRadius={30} fill="#8884d8" dataKey="value">
        {
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={GOLD_SHADES[index % GOLD_SHADES.length]} />
          ))
        }
      </Pie>
    </PieChart>
    <span className="text-sm text-[#cfb53b] ml-4">Pie Chart</span>
  </div>
</div>




<div className="md:col-span-1 bg-[#1a1a1a] p-6 rounded-lg shadow-xl mt-1 flex justify-center items-center">
  {/* Flex container for buttons in a row */}
  <div className="flex space-x-4">
    {/* Upload a File Button */}
    <button
      aria-label="Upload a File"
      className="bg-[#FFD700] hover:bg-[#B8860B] p-2 rounded-full flex items-center justify-center transform hover:scale-110 duration-300"
    >
      <CloudUploadIcon style={{ color: 'black' }} />
    </button>
    
    {/* Analyse Data Button */}
    <button
      aria-label="Analyse Data"
      className="bg-[#FFD700] hover:bg-[#B8860B] p-2 rounded-full flex items-center justify-center transform hover:scale-110 duration-300"
    >
      <AnalyticsIcon style={{ color: 'black' }} />
    </button>
    
    {/* Download Data Button */}
    <button
      aria-label="Download Data"
      className="bg-[#FFD700] hover:bg-[#B8860B] p-2 rounded-full flex items-center justify-center transform hover:scale-110 duration-300"
    >
      <CloudDownloadIcon style={{ color: 'black' }} />
    </button>
  </div>
</div>


      </motion.div>



      

      <div className="flex justify-center mt-4">
        <button onClick={handleBackClick} className="text-[#cfb53b] transform hover:scale-110 duration-300">
          <DoubleArrowIcon className="transform rotate-180" />
        </button>
      </div>

      <AnimatePresence>
        {popupContent && (
          <motion.div className="fixed inset-0 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="bg-[#292929] rounded-lg p-4 shadow-xl relative">
              {popupContent}
              <button onClick={() => setPopupContent(null)} className="absolute top-2 right-2">
                <CloseIcon className="text-[#cfb53b]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AstraPage;
