import React from 'react';

export default function Roadmap() {
  const milestones = [
    {
      title: 'Q4 2024',
      items: [
        'Launch of basic token scanner',
        'Security audit implementation',
        'Community building'
      ]
    },
    {
      title: 'Q1 2025',
      items: [
        'AI model enhancement',
        'Advanced risk detection',
        'Mobile app development'
      ]
    },
    {
      title: 'Q2 2025',
      items: [
        'Multi-chain support',
        'Premium features launch',
        'Partnership program'
      ]
    },
    {
      title: 'Q3 2025',
      items: [
        'Global expansion',
        'Institutional API access',
        'Advanced trading features'
      ]
    }
  ];

  return (
    <section id="roadmap" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Magical Journey Ahead
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Our enchanted development timeline
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {milestones.map((milestone, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-8 hover:bg-gray-800/80 transition-all">
              <h3 className="text-xl font-bold mb-6">{milestone.title}</h3>
              <ul className="space-y-4">
                {milestone.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-400">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}