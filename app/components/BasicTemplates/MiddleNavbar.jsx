'use client'

import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';

const MiddleNavbar = () => {
  // Only keep mobile menu state - NO theme toggle logic
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Shared navigation data
  const navLinks = ['Overview', 'Curriculum', 'Testimonials', 'Pricing'];

  return (
    <div className="flex flex-col w-full gap-16  min-h-screen">
      
      {/* === VIEWPORT DARK CONTAINER === */}
      <div className="relative w-full rounded-lg">
        
        {/* Animated Dashed Border (OUTSIDE wrapper) */}
        <div className="absolute inset-[-1px] rounded-lg border border-dashed border-purple-500/60 pointer-events-none" />
        
        {/* Content Container */}
        <div className="relative z-10 space-y-8">
          
          {/* === DESKTOP NAVBAR (Top State) === */}
          <div className="border-b border-gray-800 pb-8 px-[60px] lg:px-8 md:px-6 sm:px-4 pt-[60px] lg:pt-8 md:pt-6 sm:pt-4">
            <nav className="flex justify-between items-center flex-wrap gap-4">
              
              {/* Logo */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-[20px] font-semibold text-white tracking-wide">PPA</span>
              </div>

              {/* Navigation Links (Center - Desktop) */}
              <div className="hidden lg:flex items-center gap-8 mx-auto">
                {navLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="text-[14px] font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-4 flex-shrink-0">
                
                {/* Theme Toggle Button (VISUAL ONLY - BOTH SUN & MOON) */}
                <div className="w-[70px] h-[40px] rounded-full bg-gray-800 flex items-center justify-around cursor-pointer px-2">
                  <Moon size={16} className="text-gray-300" />
                  <Sun size={16} className="text-gray-500" />
                </div>

                {/* CTA Button */}
                <button className="bg-blue-600 text-white text-[14px] font-semibold px-6 py-2.5 rounded-lg cursor-pointer hidden md:block">
                  Enroll now
                </button>

                {/* Mobile Hamburger Menu (Visible on Mobile) */}
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="w-[40px] h-[40px] rounded-lg bg-gray-800 flex items-center justify-center cursor-pointer lg:hidden"
                >
                  {isMobileMenuOpen ? <X size={18} className="text-gray-300" /> : <Menu size={18} className="text-gray-300" />}
                </button>
              </div>
            </nav>

            {/* Mobile Navigation Links Dropdown */}
            {isMobileMenuOpen && (
              <div className="mt-8 pt-8 border-t border-gray-800 lg:hidden px-4">
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="text-[16px] font-medium text-gray-300 hover:text-white transition-colors py-2"
                    >
                      {link}
                    </a>
                  ))}
                  
                  {/* Mobile CTA Button */}
                  <button className="bg-blue-600 text-white text-[14px] font-semibold px-6 py-3 rounded-lg cursor-pointer mt-2 w-full">
                    Enroll now
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* === MOBILE NAVBAR (Bottom State) === */}
          <div className="px-[60px] lg:px-8 md:px-6 sm:px-4 pb-[60px] lg:pb-8 md:pb-6 sm:pb-4 pt-4">
            <nav className="flex justify-between items-start flex-wrap gap-4">
              
              {/* Logo */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="text-[20px] font-semibold text-white tracking-wide">PPA</span>
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-4 flex-shrink-0">
                
                {/* Theme Toggle Button (VISUAL ONLY - BOTH SUN & MOON) */}
                <div className="w-[70px] h-[40px] rounded-full bg-gray-800 flex items-center justify-around cursor-pointer px-2">
                  <Moon size={16} className="text-gray-300" />
                  <Sun size={16} className="text-gray-500" />
                </div>

                {/* Mobile Hamburger Menu */}
                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="w-[40px] h-[40px] rounded-lg bg-gray-800 flex items-center justify-center cursor-pointer"
                >
                  {isMobileMenuOpen ? <X size={18} className="text-gray-300" /> : <Menu size={18} className="text-gray-300" />}
                </button>
              </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="mt-8 pl-4 space-y-4">
                {navLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="block text-[16px] font-medium text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800"
                  >
                    {link}
                  </a>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default MiddleNavbar;