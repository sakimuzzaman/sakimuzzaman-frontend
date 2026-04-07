'use client';

import { useState } from 'react';
import { Play, ChevronLeft, Moon, Sun, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function BaseComponents() {
  const [isDark, setIsDark] = useState(false); // Set to false for default Light Mode as per your image

  return (
    <section className='min-h-screen p-8 md:p-12 transition-colors duration-300 bg-[#FFFFFF]'>
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-10">
          <h2 className='text-[28px] font-semibold tracking-tight mb-2 transition-colors  text-gray-900'>
            Base Components
          </h2>
          <p className='text-sm max-w-4xl leading-relaxed transition-colors text-gray-500'>
            This is the main interaction color we use throughout the platform. It represents 
            the brand's identity and is consistently applied across all touchpoints.
          </p>
        </div>

        {/* Components Grid */}
        <div className="flex flex-wrap gap-5 items-start">
          
          {/* Button Grid - 3x3 */}
          <div className={`rounded-3xl p-5 transition-colors ${isDark ? 'bg-[#1C1C1E]' : 'bg-[#EFEFF4]'}`}>
            <div className="grid grid-cols-3 gap-3">
              {/* Row 1 */}
              <Link href="icons#icons-section">
                <button className="h-10 px-5 bg-[#007AFF] hover:bg-[#0051D5] text-white text-sm font-medium rounded-xl transition-colors cursor-pointer">
                  Button
                </button>
              </Link>
              
              <Link href="icons#icons-section">
                <button className={`h-10 px-5 text-sm font-medium rounded-xl transition-colors cursor-pointer ${isDark ? 'bg-[#2C2C2E] text-white hover:bg-[#1C1C1E]' : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'}`}>
                  Button
                </button>
              </Link>

              <Link href="icons#icons-section">
                <button className={`h-8 px-3 text-xs font-medium rounded-lg transition-colors self-center cursor-pointer ${isDark ? 'bg-[#2C2C2E] text-white hover:bg-[#1C1C1E]' : 'bg-[#E5F1FF] text-[#007AFF] hover:bg-[#D0E7FF]'}`}>
                  Button
                </button>
              </Link>

              {/* Row 2 */}
              <Link href="icons#icons-section">
                <button className="h-10 px-5 bg-[#5AC8FA] hover:bg-[#007AFF] text-white text-sm font-medium rounded-xl transition-colors cursor-pointer">
                  Button
                </button>
              </Link>

              <Link href="icons#icons-section">
                <button className={`h-10 px-5 text-sm font-medium rounded-xl transition-colors cursor-pointer ${isDark ? 'bg-[#2C2C2E] text-white hover:bg-[#1C1C1E]' : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'}`}>
                  Button
                </button>
              </Link>

              <Link href="icons#icons-section">
                <button className={`h-8 px-3 text-xs font-medium rounded-lg transition-colors self-center cursor-pointer ${isDark ? 'bg-[#2C2C2E] text-white hover:bg-[#1C1C1E]' : 'bg-[#E5F1FF] text-[#007AFF] hover:bg-[#D0E7FF]'}`}>
                  Button
                </button>
              </Link>

              {/* Row 3 */}
              <Link href="icons#icons-section">
                <button className="h-10 px-5 bg-[#1464C0] hover:bg-[#0051D5] text-white text-sm font-medium rounded-xl transition-colors cursor-pointer">
                  Button
                </button>
              </Link>

              <Link href="icons#icons-section">
                <button className={`h-10 px-5 text-sm font-medium rounded-xl transition-colors cursor-pointer ${isDark ? 'bg-[#2C2C2E] text-white hover:bg-[#1C1C1E]' : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'}`}>
                  Button
                </button>
              </Link>

              <Link href="icons#icons-section">
                <button className={`h-8 px-3 text-xs font-medium rounded-lg transition-colors self-center cursor-pointer ${isDark ? 'bg-[#2C2C2E] text-white hover:bg-[#1C1C1E]' : 'bg-[#E5F1FF] text-[#007AFF] hover:bg-[#D0E7FF]'}`}>
                  Button
                </button>
              </Link>
            </div>
          </div>

          {/* Play Buttons Stack */}
          <div className={`rounded-3xl p-6 flex flex-col gap-6 transition-colors ${isDark ? 'bg-[#1C1C1E]' : 'bg-[#EFEFF4]'}`}>
            {/* Row 1: White circular */}
            <Link href="icons#icons-section">
              <div className="flex items-center gap-4">
                <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <Play className="w-6 h-6 text-[#007AFF] fill-[#007AFF] ml-1" />
                </button>
                <button className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <Play className="w-5 h-5 text-[#007AFF] fill-[#007AFF] ml-0.5" />
                </button>
                <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                  <Play className="w-3.5 h-3.5 text-[#007AFF] fill-[#007AFF] ml-0.5" />
                </button>
              </div>
            </Link>

            {/* Row 2: Blue icons only */}
            <Link href="icons#icons-section">
              <div className="flex items-center gap-6 px-2 cursor-pointer">
                <Play className="w-7 h-7 text-[#007AFF] fill-[#007AFF]" />
                <Play className="w-5 h-5 text-[#007AFF] fill-[#007AFF]" />
                <Play className="w-4 h-4 text-[#007AFF] fill-[#007AFF]" />
              </div>
            </Link>

            {/* Row 3: Gray circular */}
            <Link href="icons#icons-section">
              <div className="flex items-center gap-4">
                <button className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors cursor-pointer ${isDark ? 'bg-[#3A3A3C] hover:bg-[#2C2C2E]' : 'bg-[#E5E5EA] hover:bg-[#D1D1D6]'}`}>
                  <Play className="w-6 h-6 text-[#007AFF] fill-[#007AFF] ml-1" />
                </button>
                <button className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors cursor-pointer ${isDark ? 'bg-[#3A3A3C] hover:bg-[#2C2C2E]' : 'bg-[#E5E5EA] hover:bg-[#D1D1D6]'}`}>
                  <Play className="w-5 h-5 text-[#007AFF] fill-[#007AFF] ml-0.5" />
                </button>
                <button className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${isDark ? 'bg-[#3A3A3C] hover:bg-[#2C2C2E]' : 'bg-[#E5E5EA] hover:bg-[#D1D1D6]'}`}>
                  <Play className="w-3.5 h-3.5 text-[#007AFF] fill-[#007AFF] ml-0.5" />
                </button>
              </div>
            </Link>
          </div>

          {/* Arrow Buttons */}
          <div className={`rounded-3xl p-5 transition-colors ${isDark ? 'bg-[#1C1C1E]' : 'bg-[#EFEFF4]'}`}>
            <Link href="icons#icons-section">
              <div className="grid grid-cols-2 gap-3 cursor-pointer">
                <button className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isDark ? 'bg-[#2C2C2E] hover:bg-[#3A3A3C]' : 'bg-white shadow-sm hover:bg-gray-50'}`}>
                  <ChevronLeft className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} strokeWidth={2.5} />
                </button>
                <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDark ? 'bg-[#2C2C2E] hover:bg-[#3A3A3C]' : 'bg-white shadow-sm hover:bg-gray-50'}`}>
                  <ChevronLeft className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-900'}`} strokeWidth={2.5} />
                </button>

                <button className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isDark ? 'bg-[#2C2C2E] hover:bg-[#3A3A3C]' : 'bg-white shadow-sm hover:bg-gray-50'}`}>
                  <ChevronLeft className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-900'}`} strokeWidth={2.5} />
                </button>
                <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${isDark ? 'bg-[#2C2C2E] hover:bg-[#3A3A3C]' : 'bg-white shadow-sm hover:bg-gray-50'}`}>
                  <ChevronLeft className={`w-5 h-5 ${isDark ? 'text-white' : 'text-gray-900'}`} strokeWidth={2.5} />
                </button>
              </div>
            </Link>
          </div>

          {/* Dynamic Theme Toggle Switches - CLICK FUNCTION ADDED HERE */}
          <div className={`rounded-3xl p-5 flex flex-col gap-3 transition-colors ${isDark ? 'bg-[#1C1C1E]' : 'bg-[#EFEFF4]'}`}>
            <div className={`rounded-full p-1 flex items-center w-fit transition-colors ${isDark ? 'bg-[#2C2C2E]' : 'bg-[#E5E5EA]'}`}>
              {/* Moon button will switch theme to dark on click */}
              <button 
                onClick={() => setIsDark(true)} 
                className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors ${isDark ? 'bg-[#3A3A3C] text-white' : 'text-gray-400 hover:text-gray-600'}`}
              >
                <Moon className="w-4 h-4" fill={isDark ? "currentColor" : "none"} />
              </button>
              
              {/* Sun button will switch theme to light on click */}
              <button 
                onClick={() => setIsDark(false)} 
                className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer transition-colors ${!isDark ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400 hover:text-white'}`}
              >
                <Sun className="w-4 h-4" fill={!isDark ? "currentColor" : "none"} />
              </button>
            </div>
          </div>

          {/* Icon Buttons */}
          <div className={`rounded-3xl p-5 flex flex-col gap-3 transition-colors ${isDark ? 'bg-[#1C1C1E]' : 'bg-[#EFEFF4]'}`}>
            <button className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors cursor-pointer ${isDark ? 'bg-[#2C2C2E] hover:bg-[#3A3A3C]' : 'bg-white shadow-sm hover:bg-gray-50'}`}>
              <Lightbulb className={`w-5 h-5 ${isDark ? 'text-white' : 'text-[#007AFF]'}`} fill="currentColor" />
            </button>
            <button className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer ${isDark ? 'bg-[#2C2C2E] hover:bg-[#3A3A3C]' : 'bg-white shadow-sm hover:bg-gray-50'}`}>
              <Sun className={`w-5 h-5 ${isDark ? 'text-white' : 'text-[#007AFF]'}`} />
            </button>
          </div>

          {/* Badge */}
          <div className={`rounded-3xl p-5 transition-colors ${isDark ? 'bg-[#1C1C1E]' : 'bg-[#EFEFF4]'}`}>
            <span className={`inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide transition-colors ${isDark ? 'bg-[#2C2C2E] text-white' : 'bg-white text-gray-900 shadow-sm border border-gray-100'}`}>
              <span className="w-1.5 h-1.5 bg-[#007AFF] rounded-full"></span>
              Badge Label
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}