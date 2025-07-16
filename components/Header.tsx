import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">
        Job Assignment Video Prep
      </h1>
      <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
        Ace your code walkthrough. Use this AI assistant to generate a clear and professional script for your video presentation based on your notes.
      </p>
    </header>
  );
};

export default Header;
