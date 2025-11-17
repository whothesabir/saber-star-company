import React, { useState } from 'react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  onNavigate: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, onNavigate, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => onNavigate(page)}
      className={`px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300 ${
        isActive
          ? 'text-emerald-600'
          : 'text-stone-600 hover:text-emerald-600'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [Page.Home, Page.About, Page.Products, Page.WhyChooseUs, Page.Contact];

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-emerald-700 cursor-pointer" onClick={() => onNavigate(Page.Home)}>
          Saber Star
        </div>
        <nav className="hidden md:flex items-center space-x-2">
          {navLinks.map((page) => (
            <NavLink key={page} page={page} currentPage={currentPage} onNavigate={onNavigate}>
              {page}
            </NavLink>
          ))}
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-stone-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <nav className="flex flex-col items-center py-4">
            {navLinks.map((page) => (
              <NavLink key={page} page={page} currentPage={currentPage} onNavigate={(p) => { onNavigate(p); setIsMenuOpen(false); }}>
                {page}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
