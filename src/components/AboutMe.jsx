import { useState } from 'react'
import Widget from './Widget'

const AboutMe = () => {
  const [activeTab, setActiveTab] = useState('about')

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'recommended', label: 'Recommended' }
  ]

  const content = {
    about: "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.\n\nI was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...",
    experiences: "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.\n\nI was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...",
    recommended: "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.\n\nI was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a..."
  }

  return (
    <Widget>
      <div className="flex items-center justify-between mb-5">
        <button className="w-6 h-6 flex items-center justify-center text-[#A3ADB2] hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
        
        <div className="flex bg-[#171717] rounded-[23px] p-[6px] gap-[6px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-[16px] text-[16px] font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-[#28292F] text-white shadow-[13px_17px_67px_8px_rgba(0,0,0,0.25)_inset,0px_5px_12px_2px_rgba(255,255,255,0.15)_inset]'
                  : 'text-[#A3ADB2] hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="w-6"></div>
      </div>

      <div className="text-[#969696] text-[16px] font-normal leading-[25px] overflow-y-auto max-h-[175px] pr-2 custom-scrollbar">
        {content[activeTab].split('\n\n').map((paragraph, index) => (
          <p key={index} className={index > 0 ? 'mt-5' : ''}>
            {paragraph}
          </p>
        ))}
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #2E3338;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #888989 0%, #4A4E54 100%);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #999999 0%, #5A5E64 100%);
        }
      `}</style>
    </Widget>
  )
}

export default AboutMe
