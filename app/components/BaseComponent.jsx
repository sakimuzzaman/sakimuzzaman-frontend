import { Play, ChevronLeft, Moon, Sun, Lightbulb } from 'lucide-react';
import Link from 'next/link';

export default function BaseComponents() {
  return (
    <section className="bg-[#FFFFFF] min-h-screen p-8 md:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-[28px] font-semibold text-gray-900 tracking-tight mb-2">
            Base Components
          </h2>
          <p className="text-gray-500 text-sm max-w-8xl leading-relaxed">
            This is the main interaction color we use throughout the platform. It represents 
            the brand's identity and is consistently applied across all touchpoints.
          </p>
        </div>

        {/* Components Grid */}
        <div className="flex flex-wrap gap-5 items-start">
          
          {/* Button Grid - 3x3 */}
          <div className="bg-[#F2F2F7] rounded-3xl p-5">
            <div className="grid grid-cols-3 gap-3">
              {/* Row 1 */}

              <Link href="icons#icons-section">
                <button className="h-10 px-5 bg-[#007AFF] hover:bg-[#0051D5] text-white text-sm font-medium rounded-xl transition-colors">
                  Button
                </button>
              </Link>
              

              <Link href="icons#icons-section">
                <button className="h-10 px-5 bg-[#1C1C1E] hover:bg-[#000000] text-white text-sm font-medium rounded-xl transition-colors">
                  Button
                </button>
              </Link>
              

              <Link href="icons#icons-section">
                <button className="h-8 px-3 bg-[#1C1C1E] hover:bg-[#000000] text-white text-xs font-medium rounded-lg transition-colors self-center">
                  Button
                </button>
              </Link>
              

              {/* Row 2 - Slightly lighter/different state */}
              <Link href="icons#icons-section">
                <button className="h-10 px-5 bg-[#5AC8FA] hover:bg-[#007AFF] text-white text-sm font-medium rounded-xl transition-colors">
                  Button
                </button>
              </Link>
              
              
              <Link href="icons#icons-section">
                <button className="h-10 px-5 bg-[#2C2C2E] hover:bg-[#1C1C1E] text-white text-sm font-medium rounded-xl transition-colors">
                  Button
                </button>
              </Link>
              

              <Link href="icons#icons-section">
                <button className="h-8 px-3 bg-[#2C2C2E] hover:bg-[#1C1C1E] text-white text-xs font-medium rounded-lg transition-colors self-center">
                  Button
                </button>
              </Link>
              

              {/* Row 3 */}
              <Link href="icons#icons-section">
                <button className="h-10 px-5 bg-[#007AFF] hover:bg-[#0051D5] text-white text-sm font-medium rounded-xl transition-colors">
                  Button
                </button>
              </Link>
              
              <Link href="icons#icons-section">
                <button className="h-10 px-5 bg-[#1C1C1E] hover:bg-[#000000] text-white text-sm font-medium rounded-xl transition-colors">
                  Button
                </button>
              </Link>
              

              <Link href="icons#icons-section">
                <button className="h-8 px-3 bg-[#1C1C1E] hover:bg-[#000000] text-white text-xs font-medium rounded-lg transition-colors self-center">
                  Button
                </button>
              </Link>
              
            </div>
          </div>

          {/* Play Buttons Stack */}
          <div className="bg-[#F2F2F7] rounded-3xl p-6 flex flex-col gap-6">
            {/* Row 1: White circular */}
            <Link href="icons#icons-section">
            <div className="flex items-center gap-4">
              <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow">
                <Play className="w-6 h-6 text-[#007AFF] fill-[#007AFF] ml-1" />
              </button>
              <button className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow">
                <Play className="w-5 h-5 text-[#007AFF] fill-[#007AFF] ml-0.5" />
              </button>
              <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow">
                <Play className="w-3.5 h-3.5 text-[#007AFF] fill-[#007AFF] ml-0.5" />
              </button>
            </div>
            </Link>
            

            {/* Row 2: Blue icons only */}
            <Link href="icons#icons-section">
            <div className="flex items-center gap-6 px-2">
              <Play className="w-7 h-7 text-[#007AFF] fill-[#007AFF]" />
              <Play className="w-5 h-5 text-[#007AFF] fill-[#007AFF]" />
              <Play className="w-4 h-4 text-[#007AFF] fill-[#007AFF]" />
            </div>
            </Link>
            

            {/* Row 3: Gray circular */}
            <Link href="icons#icons-section">
            <div className="flex items-center gap-4">
              <button className="w-16 h-16 bg-[#D1D1D6] rounded-full flex items-center justify-center hover:bg-[#C7C7CC] transition-colors">
                <Play className="w-7 h-7 text-[#007AFF] fill-[#007AFF] ml-1" />
              </button>
              <button className="w-11 h-11 bg-[#D1D1D6] rounded-full flex items-center justify-center hover:bg-[#C7C7CC] transition-colors">
                <Play className="w-5 h-5 text-[#007AFF] fill-[#007AFF] ml-0.5" />
              </button>
              <button className="w-8 h-8 bg-[#D1D1D6] rounded-full flex items-center justify-center hover:bg-[#C7C7CC] transition-colors">
                <Play className="w-3.5 h-3.5 text-[#007AFF] fill-[#007AFF] ml-0.5" />
              </button>
            </div>
            </Link>
            

            {/* Row 4: Gray icons */}
            <Link href="icons#icons-section">
              <div className="flex items-center gap-6 px-3">
                <Play className="w-6 h-6 text-[#C7C7CC] fill-[#C7C7CC]" />
                <Play className="w-5 h-5 text-[#C7C7CC] fill-[#C7C7CC]" />
                <Play className="w-4 h-4 text-[#C7C7CC] fill-[#C7C7CC]" />
              </div>
            </Link>
            
          </div>

          {/* Arrow Buttons */}
          <div className="bg-[#F2F2F7] rounded-3xl p-5">
          <Link href="icons#icons-section">
          <div className="grid grid-cols-2 gap-3">
              {/* Large dark */}
              <button className="w-12 h-12 bg-[#2C2C2E] rounded-full flex items-center justify-center hover:bg-[#1C1C1E] transition-colors">
                <ChevronLeft className="w-6 h-6 text-white" strokeWidth={2.5} />
              </button>
              <button className="w-10 h-10 bg-[#2C2C2E] rounded-full flex items-center justify-center hover:bg-[#1C1C1E] transition-colors">
                <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
              </button>

              {/* Medium gray */}
              <button className="w-12 h-12 bg-[#3A3A3C] rounded-full flex items-center justify-center hover:bg-[#2C2C2E] transition-colors">
                <ChevronLeft className="w-6 h-6 text-white" strokeWidth={2.5} />
              </button>
              <button className="w-10 h-10 bg-[#3A3A3C] rounded-full flex items-center justify-center hover:bg-[#2C2C2E] transition-colors">
                <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
              </button>

              {/* Black */}
              <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-[#1C1C1E] transition-colors">
                <ChevronLeft className="w-6 h-6 text-white" strokeWidth={2.5} />
              </button>
              <button className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-[#1C1C1E] transition-colors">
                <ChevronLeft className="w-5 h-5 text-white" strokeWidth={2.5} />
              </button>
            </div>
          </Link>
            
          </div>

          {/* Toggle Switches */}
          <div className="bg-[#F2F2F7] rounded-3xl p-5 flex flex-col gap-3">
            {/* Moon active */}
            <div className="bg-[#1C1C1E] rounded-full p-1 flex items-center w-fit">
              <button className="w-8 h-8 bg-[#2C2C2E] rounded-full flex items-center justify-center text-white">
                <Moon className="w-4 h-4" fill="currentColor" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-gray-500">
                <Sun className="w-4 h-4" />
              </button>
            </div>

            {/* Sun active */}
            <div className="bg-[#1C1C1E] rounded-full p-1 flex items-center w-fit">
              <button className="w-8 h-8 flex items-center justify-center text-gray-500">
                <Moon className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-[#2C2C2E] rounded-full flex items-center justify-center text-white">
                <Sun className="w-4 h-4" fill="currentColor" />
              </button>
            </div>
          </div>

          {/* Icon Buttons */}
          <div className="bg-[#F2F2F7] rounded-3xl p-5 flex flex-col gap-3">
            <button className="w-14 h-14 bg-[#1C1C1E] rounded-full flex items-center justify-center hover:bg-black transition-colors">
              <Lightbulb className="w-6 h-6 text-white" fill="currentColor" />
            </button>
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-shadow">
              <Sun className="w-5 h-5 text-[#1C1C1E]" />
            </button>
          </div>

          {/* Badge */}
          <div className="bg-[#F2F2F7] rounded-3xl p-5">
            <span className="inline-flex items-center gap-2 bg-[#1C1C1E] text-white text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide">
              <span className="w-1.5 h-1.5 bg-[#007AFF] rounded-full"></span>
              Badge Label
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}