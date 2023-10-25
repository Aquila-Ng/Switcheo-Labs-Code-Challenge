import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CurrencySwapForm from './components/CurrencySwapForm';
import TrendingNFTPage from './components/TrendingNFTPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CurrencySwapForm />} />
        <Route path="/trending-nft" element={<TrendingNFTPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
