import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-stone-300">
      <div className="container mx-auto px-6 py-8 text-center">
        <p>&copy; {new Date().getFullYear()} Saber Star Company. All rights reserved.</p>
        <p className="text-sm text-stone-400 mt-2">Made with excellence in Saudi Arabia.</p>
      </div>
    </footer>
  );
};

export default Footer;
