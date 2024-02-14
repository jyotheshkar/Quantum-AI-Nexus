import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PolicyIcon from '@mui/icons-material/Policy';

const Footer = () => {
  return (
    <footer className="bg-transparent mt-6 text-white py-4">
      <div className="container mx-auto text-center">
        <Tooltip title="This website is a frontend development project. None of the features include backend logic. It was developed to enhance my frontend development skills." placement="top">
          <IconButton color="inherit" aria-label="policy">
            <PolicyIcon className='text-[#cfb53b] hover:text-gray-300' fontSize="large" />
          </IconButton>
        </Tooltip>
      </div>
    </footer>
  );
};

export default Footer;