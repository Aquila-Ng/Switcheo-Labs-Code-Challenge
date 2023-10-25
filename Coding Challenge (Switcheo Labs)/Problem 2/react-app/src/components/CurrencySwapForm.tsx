import React, { useState, useEffect } from 'react';

function CurrencySwapForm() {
  // State variables to manage form input and data
  const [fromToken, setFromToken] = useState('');
  const [toToken, setToToken] = useState('');
  const [amountFrom, setAmountFrom] = useState(0);
  const [amountTo, setAmountTo] = useState(0);
  const [exchangeRate, setExchangeRate] = useState(0);
  const [tokens, setTokens] = useState([]); // List of available tokens

  useEffect(() => {
    // Fetch token list and exchange rate data here (not shown in this example)
  }, []);

  const handleSwap = () => {
    // Implement the currency swap action here
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Update the amount and calculate the corresponding amount in the other token
    const inputAmount = parseFloat(e.target.value);
    setAmountFrom(inputAmount);
    setAmountTo(inputAmount * exchangeRate);
  };

  return (
    <div className="container mt-4">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">My App</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Swap</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/trending-nft">Trending NFT</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Currency Swap Form */}
      <div className="row">
        <div className="col-md-6">
          <h2>Currency Swap</h2>
          <form>
            <div className="form-group">
              <label>From Token</label>
              <select
                className="form-control"
                value={fromToken}
                onChange={(e) => setFromToken(e.target.value)}
              >
                {/* Render options for available tokens */}
                {/* {tokens.map((token) => (
                  <option key={token.id} value={token.id}>
                    {token.name}
                  </option>
                ))} */}
              </select>
            </div>
            <div className="form-group">
              <label>Amount</label>
              <input
                type="number"
                className="form-control"
                value={amountFrom}
                onChange={handleAmountChange}
              />
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <h2>Swap Summary</h2>
          <p>Amount to Receive: {amountTo} {toToken}</p>
        </div>
      </div>

      {/* Swap Button */}
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSwap}>Swap</button>
      </div>
    </div>
  );
}

export default CurrencySwapForm;
