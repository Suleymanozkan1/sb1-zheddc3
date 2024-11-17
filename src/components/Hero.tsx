import React, { useState } from 'react';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const contractAddress = "0x3Fb5cdcfB47f863867ED75c15eA2E2BBfa35d2CF"; // Replace with actual contract address
  const SOLcontractAddress = "B5o5Lzfbk7iNLprGctpiVrEy3g6R544UZrJ3xoxipump"; // Replace with actual contract address

  const scrollToScanner = () => {
    const scanner = document.getElementById('scanner');
    scanner?.scrollIntoView({ behavior: 'smooth' });
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const copyToSOL = () => {
    navigator.clipboard.writeText(SOLcontractAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="pt-20 pb-8 md:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <i className="fas fa-hat-wizard text-purple-500 text-4xl md:text-6xl animate-bounce" aria-hidden="true"></i>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold">
            <span className="block">Discover Safe Tokens</span>
            <span className="block text-purple-500">With Magical Analysis</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-sm md:text-base text-gray-300 md:mt-5 lg:text-xl lg:max-w-3xl">
            Advanced token scanner powered by ancient wizardry to help you find secure and promising tokens on the Ethereum network.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button 
              onClick={scrollToScanner}
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg flex items-center justify-center space-x-2"
            >
              <i className="fas fa-hat-wizard text-xl" aria-hidden="true"></i>
              <span>Cast Scanning Spell</span>
            </button>
            <a 
              href="https://t.me/gigglyeth"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg flex items-center justify-center space-x-2"
            >
              <i className="fab fa-telegram text-xl"></i>
              <span>Telegram</span>
            </a>
            <a 
              href="https://x.com/GigglyEthBot"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-black hover:bg-gray-800 px-6 py-3 rounded-lg flex items-center justify-center space-x-2"
            >
              <i className="fab fa-x-twitter text-xl"></i>
              <span>Twitter</span>
            </a>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0">
            <div className="inline-flex bg-gray-800/50 border-2 border-purple-500 rounded-lg p-4 items-center w-auto">
              <span className="text-gray-400 text-lg font-semibold">ETH Contract:</span>
              <span className="text-purple-500 font-mono text-lg mx-4 truncate w-48 sm:w-auto" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                {contractAddress}
              </span>
            </div>
            <button
              onClick={copyToClipboard}
              className="ml-4 p-2 hover:bg-gray-700 rounded-lg transition-colors bg-gray-800/50 border-2 border-purple-500"
              title="Copy to clipboard"
            >
              <i className={`fas ${copied ? 'fa-check text-green-500' : 'fa-copy text-gray-400'}`}></i>
            </button>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0">
              <div className="inline-flex bg-gray-800/50 border-2 border-purple-500 rounded-lg p-4 items-center w-auto">
                <span className="text-gray-400 text-lg font-semibold">SOL Contract:</span>
                <span className="text-purple-500 font-mono text-lg mx-4 truncate w-48 sm:w-auto" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {SOLcontractAddress}
                </span>
              </div>
              <button
                onClick={copyToSOL}
                className="ml-4 p-2 hover:bg-gray-700 rounded-lg transition-colors bg-gray-800/50 border-2 border-purple-500"
                title="Copy to clipboard"
              >
              <i className={`fas ${copied ? 'fa-check text-green-500' : 'fa-copy text-gray-400'}`}></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

