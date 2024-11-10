import React from 'react';

export function Scanner() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="min-h-[300px] flex flex-col items-center justify-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-4">
          Coming Soon
        </h2>
        <p className="text-xl md:text-2xl text-gray-400 text-center">
          Our magical scanner is being enchanted with powerful spells
        </p>
        <i className="fas fa-hat-wizard text-purple-500 text-4xl mt-8 animate-bounce"></i>

        <p className="text-lg md:text-xl text-center text-gray-500 mt-8">
          In the meantime, you may seek guidance from our enchanted Telegram bot
        </p>
        <a
          href="https://t.me/gigglyeth_bot"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition"
        >
          Summon the Bot
        </a>
      </div>
    </div>
  );
}
