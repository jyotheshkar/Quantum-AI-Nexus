//app.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Astra from './Astra';
import Vision from './Vision';
import Nova from './Nova';
// ...

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/astra" element={<Astra />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/nova" element={<Nova />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
};

export default App;