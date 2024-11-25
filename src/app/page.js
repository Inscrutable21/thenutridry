'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function UnderConstructionPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-green-100 to-green-50 relative overflow-hidden">
      {/* Animated Logo Background */}
      <div className="absolute inset-0 opacity-10">
      <svg 
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 500 500" 
  className="absolute w-full h-full"
>
  <rect width="100%" height="100%" fill="white"/>
  <defs>
    <pattern 
      id="logoPattern" 
      x="0" 
      y="0" 
      width="500" 
      height="500" 
      patternUnits="userSpaceOnUse"
    >
      <image 
        href="/logo.svg" 
        x="0" 
        y="0" 
        width="500" 
        height="500" 
        preserveAspectRatio="xMidYMid slice"
      />
    </pattern>
  </defs>
  
  <path 
    d="M250 500 
       Q220 450 200 400 
       T180 300 
       Q210 250 250 200 
       T300 150 
       Q280 100 250 50 
       T250 0 
       T300 100 
       T400 200 
       T450 300 
       T500 500" 
    fill="url(#logoPattern)"
    className="animate-pulse"
    style={{ opacity: 0.6 }}
  >
    <animateTransform
      attributeName="transform"
      type="scale"
      from="1 1"
      to="1.2 1.2"
      dur="6s"
      repeatCount="indefinite"
    />
  </path>
</svg>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <Image 
            src="/logo.svg" 
            alt="NutriDiet Logo" 
            width={250} 
            height={250} 
            className="animate-bounce"
          />
        </div>

        <div className="mb-12 space-y-4">
          <h1 className="text-5xl font-extrabold text-green-800 animate-pulse">
            Website Under Construction
          </h1>
          
          <p className="text-xl text-green-900 font-medium tracking-wide leading-relaxed px-4">
            We're nurturing something extraordinary, just like a growing tree. 
            Get ready for a sustainable digital experience that will 
            revolutionize the way you interact with our platform.
          </p>
        </div>
        
        <div className="bg-white/70 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-green-100 transform transition-all hover:scale-105 duration-300">
          <h2 className="text-3xl font-bold text-green-900 mb-4 tracking-tight">
            Growing Soon
          </h2>
          
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="font-semibold text-green-800">Nutrition</h3>
              <p className="text-sm text-green-600">Wholesome Approach</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="font-semibold text-green-800">Wellness</h3>
              <p className="text-sm text-green-600">Holistic Solutions</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-100">
              <h3 className="font-semibold text-green-800">Growth</h3>
              <p className="text-sm text-green-600">Sustainable Progress</p>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center">
            <button 
              onClick={() => {
                const phoneNumber = '9984001117';
                const message = encodeURIComponent('I am interested in your upcoming NutriDiet project!');
                window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
              }}
              className="bg-green-600 text-white px-8 py-4 rounded-full flex items-center space-x-2 hover:bg-green-700 transition-all transform hover:scale-105 hover:shadow-lg"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.447l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.767.967-.941 1.165-.174.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.174-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.174.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.041 1.017-1.041 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.174-1.413z"/>
              </svg>
              <span>Contact on WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}