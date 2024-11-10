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
      </div>
    </div>
  );
}