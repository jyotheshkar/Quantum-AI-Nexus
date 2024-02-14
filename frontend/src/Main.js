import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LeftBox from './Left';
import RightBox from './RightBox';
import image4 from './images/image4.jpg';
import image3 from './images/image3.jpg';
import image5 from './images/image5.jpg';
import Footer from './mainfooter';
import PixIcon from '@mui/icons-material/Pix';
import SpokeIcon from '@mui/icons-material/Spoke';
import TokenIcon from '@mui/icons-material/Token';

const Main = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Placeholder for any specific loading logic
  }, [loading, navigate]);

  const handleButtonClick = (route) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate(route);
    }, 2000);
  };

  return (
    <div className='relative bg-gradient-to-b from-gray-100 via-gray-500 to-black min-h-screen lg:h-full'>
      <div className="flex flex-col justify-evenly items-center">
        <h1 className="text-6xl font-bold text-center text-black mt-[55px]">
          QAIN
        </h1>
        <h3>Quantum AI Nexus</h3>

        <div className="flex flex-col items-center mt-10 justify-evenly gap-[40px] sm:flex-row">
  {/* Left box */}
  <LeftBox />


{/* Box 1 - Corrected for consistent image size on desktop, with specified height and curvature adjustments */}
<div className="max-w-sm h-[190px] sm:h-[430px] rounded-lg sm:rounded-bl-full overflow-hidden shadow-2xl relative hover:shadow-[#E1C564] hover:shadow-md transition-all transform hover:translate-y-[-5px]">
  <div className="block sm:hidden"> {/* Show on small screens */}
    <div className="flex flex-row items-center">
      <div className="w-1/2">
        <img className="w-full rounded-r-full h-full object-cover" src={image4} alt="Sunset in the mountains" />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="font-bold text-xl mb-2 flex justify-center items-center">
          <PixIcon />
        </div>
        <button onClick={() => handleButtonClick('/astra')}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-white to-yellow-600 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300">
          <span className="relative text-[#cfb53b] bg-[#111820] hover:text-black px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0">
            Launch Astra
          </span>
        </button>
      </div>
    </div>
  </div>
  <div className="hidden sm:block"> {/* Hide on small screens, show on larger */}
    <div className="w-full  h-[180px] overflow-hidden transition-transform transform hover:scale-105 relative">
      <img className="w-full rounded-bl-full h-full object-cover" src={image4} alt="Sunset in the mountains" />
      <div className="absolute inset-0  rounded-bl-full bg-white bg-opacity-0 hover:bg-opacity-25 transition-opacity flex items-center justify-center">
        <div className="text-white font-bold text-xl text-center opacity-0 transition-opacity absolute inset-0 flex items-center justify-center hover:opacity-100">
          Astra
        </div>
      </div>
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-center mb-2 text-gradient-to-r from-cyan-500 to-blue-500">
        <PixIcon />
      </div>
      <button onClick={() => handleButtonClick('/astra')}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-white to-yellow-600 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-[#cfb53b] bg-[#111820] hover:text-black rounded-md group-hover:bg-opacity-0">
          Launch Astra
        </span>
      </button>
    </div>
  </div>
</div>



{/* Box 2 - Adjusted for consistent image size on desktop, with specified height and curvature adjustments */}
<div className="max-w-sm h-[190px] sm:h-[430px] rounded-lg sm:rounded-b-full overflow-hidden shadow-2xl relative hover:shadow-[#E1C564] hover:shadow-md transition-all transform hover:translate-y-[-5px]">
  <div className="block sm:hidden"> {/* Show on small screens */}
    <div className="flex flex-row items-center">
      <div className="w-1/2">
        <img className="w-full rounded-r-full h-full object-cover" src={image3} alt="Vision" />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="font-bold text-xl mb-2 flex justify-center items-center">
          <SpokeIcon />
        </div>
        <button onClick={() => handleButtonClick('/vision')}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-white to-yellow-600 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-[#cfb53b] bg-[#111820] hover:text-black rounded-md group-hover:bg-opacity-0">
            Launch Vision
          </span>
        </button>
      </div>
    </div>
  </div>
  <div className="hidden sm:block"> {/* Hide on small screens, show on larger */}
    <div className="w-full h-[180px] overflow-hidden transition-transform transform hover:scale-105 relative">
      <img className="w-full h-full rounded-b-full object-cover" src={image3} alt="Vision" />
      <div className="absolute inset-0 rounded-b-full bg-white bg-opacity-0 hover:bg-opacity-25 transition-opacity flex items-center justify-center">
        <div className="text-white font-bold text-xl text-center opacity-0 transition-opacity absolute inset-0 flex items-center justify-center hover:opacity-100">
          Vision
        </div>
      </div>
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-center mb-2 text-gradient-to-r from-cyan-500 to-blue-500">
        <SpokeIcon />
      </div>
      <button onClick={() => handleButtonClick('/vision')}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-white to-yellow-600 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-[#cfb53b] bg-[#111820] hover:text-black rounded-md group-hover:bg-opacity-0">
          Launch Vision
        </span>
      </button>
    </div>
  </div>
</div>

{/* Box 3 - Corrected for consistent image size on desktop, with specified height and curvature adjustments */}
<div className="max-w-sm h-[190px] sm:h-[430px] rounded-lg sm:rounded-br-full overflow-hidden shadow-2xl relative hover:shadow-[#E1C564] hover:shadow-md transition-all transform hover:translate-y-[-5px]">
  <div className="block sm:hidden"> {/* Show on small screens */}
    <div className="flex flex-row items-center">
      <div className="w-1/2">
        <img className="w-full rounded-r-full h-full object-cover" src={image5} alt="Nova" />
      </div>
      <div className="w-1/2 flex flex-col items-center justify-center">
        <div className="font-bold text-xl mb-2 flex justify-center items-center">
          <TokenIcon />
        </div>
        <button onClick={() => handleButtonClick('/nova')}
          className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-white to-yellow-600 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-[#cfb53b] bg-[#111820] hover:text-black rounded-md group-hover:bg-opacity-0">
            Launch Nova
          </span>
        </button>
      </div>
    </div>
  </div>
  <div className="hidden sm:block"> {/* Hide on small screens, show on larger */}
    <div className="w-full h-[180px] overflow-hidden transition-transform transform hover:scale-105 relative">
      <img className="w-full rounded-br-full h-full object-cover" src={image5} alt="Nova" />
      <div className="absolute rounded-br-full inset-0 bg-white bg-opacity-0 hover:bg-opacity-25 transition-opacity flex items-center justify-center">
        <div className="text-white font-bold text-xl text-center opacity-0 transition-opacity absolute inset-0 flex items-center justify-center hover:opacity-100">
          Nova
        </div>
      </div>
    </div>
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-center mb-2 text-gradient-to-r from-cyan-500 to-blue-500">
        <TokenIcon />
      </div>
      <button onClick={() => handleButtonClick('/nova')}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-white to-yellow-600 hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-[#cfb53b] bg-[#111820] hover:text-black rounded-md group-hover:bg-opacity-0">
          Launch Nova
        </span>
      </button>
    </div>
  </div>
</div>


          {/* Right box */}
          <RightBox />
        </div>

{/* Loading Screen */}
{loading && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center loading-background z-50">
    <div className="dot-flashing-container">
      <div className="dot-flashing"></div>
      <div className="dot-flashing"></div>
      <div className="dot-flashing"></div>
      <div className="dot-flashing"></div>
      <div className="dot-flashing"></div>
      <div className="dot-flashing"></div>
      <div className="dot-flashing"></div>
      <div className="dot-flashing"></div>
    </div>
  </div>
)}

        <Footer />
      </div>
    </div>
  );
};

export default Main;

