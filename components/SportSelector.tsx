import React, { useState } from 'react'

const sports = ['Football', 'Basketball', 'Baseball', 'Soccer', 'Volleyball']

interface SportSelectorProps {
  selectedSports: string[];
  onSportToggle: (sport: string) => void;
}

const SportSelector: React.FC<SportSelectorProps> = ({ selectedSports, onSportToggle }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-[#730000] p-3 rounded-lg w-56"> {/* Garnet background */}
      <div className="flex items-center justify-between mb-2">
        <label className="flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="form-checkbox h-4 w-4 text-blue-600"
            checked={selectedSports.includes('Football')}
            onChange={() => onSportToggle('Football')}
          />
          <span className="ml-2 text-sm">Football</span>
        </label>
        <div className="relative">
          <button 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="bg-gray-700 p-1 rounded text-xs"
          >
            {isDropdownOpen ? '▲' : '▼'}
          </button>
          {isDropdownOpen && (
            <div className="absolute top-full right-0 w-40 bg-gray-700 mt-1 rounded shadow-lg z-10">
              {sports.filter(sport => sport !== 'Football').map((sport) => (
                <label key={sport} className="flex items-center p-2 hover:bg-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-blue-600"
                    checked={selectedSports.includes(sport)}
                    onChange={() => onSportToggle(sport)}
                  />
                  <span className="ml-2 text-sm">{sport}</span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SportSelector