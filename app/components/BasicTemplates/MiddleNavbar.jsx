'use client'

import { useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Image from 'next/image';

const MiddleNavbar = ({ isDark = true, onToggleTheme }) => {
  // Separate states for top and bottom mobile menus so they work independently
  const [isTopMobileOpen, setIsTopMobileOpen] = useState(false);
  const [isBottomMobileOpen, setIsBottomMobileOpen] = useState(false);
  
  const navLinks = ['Overview', 'Curriculum', 'Testimonials', 'Pricing'];

  return (
    <div className="flex flex-col w-full gap-16">
      <div className="relative w-full rounded-lg">
        <div className="absolute inset-[-1px] rounded-lg border border-dashed border-purple-500/60 pointer-events-none" />
        
        <div className="relative z-10 space-y-8">
          
          {/* === TOP NAVBAR (Desktop View) === */}
          <div className={`border-b pb-8 px-[60px] lg:px-8 md:px-6 sm:px-4 pt-[60px] lg:pt-8 md:pt-6 sm:pt-4 transition-colors ${isDark ? "border-gray-800" : "border-gray-100 bg-white rounded-t-lg"}`}>
            <nav className="flex justify-between items-center flex-wrap gap-4">
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className={`text-[20px] font-semibold tracking-wide transition-colors ${isDark ? "text-white" : "text-gray-900"}`}>PPA</span>
                <Image src="/InnerNavImg.png" width={30} height={30} alt='innerNavbarImg' />
              </div>

              <div className="hidden lg:flex items-center gap-8 mx-auto">
                {navLinks.map((link, index) => (
                  <a key={index} href="#" className={`text-[14px] font-medium transition-colors ${isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-blue-600"}`}>
                    {link}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-4 flex-shrink-0">
                {/* Theme Toggle */}
                <div onClick={onToggleTheme} className={`w-[70px] h-[40px] rounded-full flex items-center justify-around cursor-pointer px-2 transition-colors ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
                  <Moon size={16} className={isDark ? "text-white" : "text-gray-400"} fill={isDark ? "currentColor" : "none"} />
                  <Sun size={16} className={!isDark ? "text-gray-900" : "text-gray-600"} fill={!isDark ? "currentColor" : "none"} />
                </div>

                <button className="bg-blue-600 text-white text-[14px] font-semibold px-6 py-2.5 rounded-lg cursor-pointer hidden md:block">
                  Enroll now
                </button>

                <button onClick={() => setIsTopMobileOpen(!isTopMobileOpen)} className={`w-[40px] h-[40px] rounded-lg flex items-center justify-center cursor-pointer lg:hidden transition-colors ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
                  {isTopMobileOpen ? <X size={18} className={isDark ? "text-white" : "text-gray-800"} /> : <Menu size={18} className={isDark ? "text-gray-300" : "text-gray-800"} />}
                </button>
              </div>
            </nav>

            {/* Top Mobile Dropdown */}
            {isTopMobileOpen && (
              <div className={`mt-8 pt-8 border-t lg:hidden px-4 transition-colors ${isDark ? "border-gray-800" : "border-gray-100"}`}>
                <div className="flex flex-col space-y-4">
                  {navLinks.map((link, index) => (
                    <a key={index} href="#" className={`text-[16px] font-medium transition-colors py-2 ${isDark ? "text-gray-300 hover:text-white" : "text-gray-700 hover:text-blue-600"}`}>
                      {link}
                    </a>
                  ))}
                  <button className="bg-blue-600 text-white text-[14px] font-semibold px-6 py-3 rounded-lg cursor-pointer mt-2 w-full">
                    Enroll now
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* === BOTTOM NAVBAR (Mobile View) === */}
          <div className={`px-[60px] lg:px-8 md:px-6 sm:px-4 pb-[60px] lg:pb-8 md:pb-6 sm:pb-4 pt-4 transition-colors ${isDark ? "" : "bg-white rounded-b-lg"}`}>
            <nav className="flex justify-between items-start flex-wrap gap-4">
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className={`text-[20px] font-semibold tracking-wide transition-colors ${isDark ? "text-white" : "text-gray-900"}`}>PPA</span>
                <Image src="/InnerNavImg.png" width={30} height={30} alt='innerNavbarImg' />
              </div>

              <div className="flex items-center gap-4 flex-shrink-0">
                {/* Theme Toggle */}
                <div onClick={onToggleTheme} className={`w-[70px] h-[40px] rounded-full flex items-center justify-around cursor-pointer px-2 transition-colors ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
                  <Moon size={16} className={isDark ? "text-white" : "text-gray-400"} fill={isDark ? "currentColor" : "none"} />
                  <Sun size={16} className={!isDark ? "text-gray-900" : "text-gray-600"} fill={!isDark ? "currentColor" : "none"} />
                </div>

                {/* Mobile Hamburger Menu */}
                <button onClick={() => setIsBottomMobileOpen(!isBottomMobileOpen)} className={`w-[40px] h-[40px] rounded-lg flex items-center justify-center cursor-pointer transition-colors ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
                  {isBottomMobileOpen ? <X size={18} className={isDark ? "text-white" : "text-gray-800"} /> : <Menu size={18} className={isDark ? "text-gray-300" : "text-gray-800"} />}
                </button>
              </div>
            </nav>

            {/* Bottom Mobile Dropdown */}
            {isBottomMobileOpen && (
              <div className="mt-8 pl-4 space-y-4">
                {navLinks.map((link, index) => (
                  <a key={index} href="#" className={`block text-[16px] font-medium transition-colors py-2 border-b ${isDark ? "text-gray-300 hover:text-white border-gray-800" : "text-gray-700 hover:text-blue-600 border-gray-100"}`}>
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
