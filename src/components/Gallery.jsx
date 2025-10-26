import { useState } from 'react'
import Widget from './Widget'

const Gallery = () => {
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400&h=300&fit=crop'
  ])

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleAddImage = () => {
    setImages([...images, `https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=300&fit=crop`])
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < Math.max(0, images.length - 3) ? prev + 1 : prev))
  }

  return (
    <Widget>
      <div className="flex items-center justify-between mb-8">
        <button className="w-6 h-6 flex items-center justify-center text-[#A3ADB2] hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>

        <h2 className="text-white text-[20px] font-semibold bg-[#171717] px-6 py-3 rounded-[20px]">Gallery</h2>

        <div className="flex items-center gap-4">
          <button
            onClick={handleAddImage}
            className="px-6 py-3 bg-[#FFFFFF08] hover:bg-[#FFFFFF15] text-white text-[12px] font-semibold rounded-[104px] shadow-[0px_3px_3px_0px_rgba(255,255,255,0.15)_inset,0px_0px_49px_0px_rgba(255,255,255,0.05)_inset,9px_10px_7px_0px_rgba(0,0,0,0.4),-0.5px_-0.5px_7px_0px_rgba(255,255,255,0.25)] transition-all duration-300 flex items-center gap-1"
          >
            <span className="text-[16px]">+</span>
            ADD IMAGE
          </button>

          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`w-[45px] h-[45px] rounded-full flex items-center justify-center transition-all duration-300 ${
              currentIndex === 0
                ? 'bg-[#101213] text-[#6F787C] cursor-not-allowed opacity-50'
                : 'bg-gradient-to-r from-[#303439] to-[#161718] text-[#6F787C] hover:text-white shadow-[4px_5px_30px_5px_rgba(16,18,19,1),-5px_-3px_30px_-10px_rgba(150,190,231,0.3)]'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex >= Math.max(0, images.length - 3)}
            className={`w-[45px] h-[45px] rounded-full flex items-center justify-center transition-all duration-300 ${
              currentIndex >= Math.max(0, images.length - 3)
                ? 'bg-[#101213] text-[#6F787C] cursor-not-allowed opacity-50'
                : 'bg-gradient-to-r from-[#303439] to-[#161718] text-[#6F787C] hover:text-white shadow-[4px_5px_30px_5px_rgba(16,18,19,1),-5px_-3px_30px_-10px_rgba(150,190,231,0.3)]'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      <div className="flex gap-4 overflow-hidden">
        <div 
          className="flex gap-4 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3 + 5.33)}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[190px] h-[179px] rounded-[24px] overflow-hidden hover:scale-105 hover:rotate-2 transition-all duration-300 grayscale hover:grayscale-0"
            >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/190x179/4a5568/ffffff?text=Image'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </Widget>
  )
}

export default Gallery
