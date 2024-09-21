import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { footballSchedule, Game } from '@/data/footballSchedule'

interface CalendarProps {
  selectedSports: string[];
}

const Calendar: React.FC<CalendarProps> = ({ selectedSports }) => {
  const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const footballMonths = ['August', 'September', 'October', 'November']
  
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0)

  useEffect(() => {
    const now = new Date()
    const currentMonth = now.getMonth()
    const footballMonthIndex = footballMonths.findIndex(month => allMonths.indexOf(month) === currentMonth)
    setCurrentMonthIndex(footballMonthIndex !== -1 ? footballMonthIndex : 0)
  }, [])

  const getGameForDate = (date: Date): Game | undefined => {
    if (selectedSports.includes('Football')) {
      return footballSchedule.find(game => {
        const gameDate = new Date(game.date)
        return gameDate.toDateString() === new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1).toDateString()
      });
    }
    return undefined;
  }

  const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate()
  const getFirstDayOfMonth = (year: number, month: number) => new Date(year, month, 1).getDay()

  const handlePrevMonth = () => {
    setCurrentMonthIndex(prev => (prev > 0 ? prev - 1 : footballMonths.length - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonthIndex(prev => (prev < footballMonths.length - 1 ? prev + 1 : 0))
  }

  const month = footballMonths[currentMonthIndex]
  const actualMonthIndex = allMonths.indexOf(month)
  const daysInMonth = getDaysInMonth(2024, actualMonthIndex)
  const firstDayOfMonth = getFirstDayOfMonth(2024, actualMonthIndex)

  return (
    <div className="w-full bg-gray-200 p-3 rounded-lg min-h-[300px] border-2 border-[#730000] text-sm">
      <div className="flex justify-between items-center mb-3">
        <button onClick={handlePrevMonth} className="text-gray-800 text-lg">&lt; Prev</button>
        <h2 className="text-xl font-bold text-gray-900">{month}</h2>
        <button onClick={handleNextMonth} className="text-gray-800 text-lg">Next &gt;</button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center font-bold text-gray-700">{day}</div>
        ))}
        {[...Array(firstDayOfMonth)].map((_, i) => (
          <div key={`empty-${i}`} className="aspect-square"></div>
        ))}
        {[...Array(daysInMonth)].map((_, i) => {
          const date = new Date(2024, actualMonthIndex, i + 1)
          const game = getGameForDate(date)
          
          return (
            <div 
              key={i} 
              className={`aspect-square border border-[#730000] p-1 ${
                game ? 'bg-white bg-opacity-80 relative' : ''
              }`}
            >
              {game && (
                <div className="absolute inset-0 bg-[#730000] opacity-20"></div>
              )}
              <div className="font-bold text-gray-900 text-sm relative z-10">{i + 1}</div>
              {game && (
                <div className="text-xs text-gray-900 flex flex-col items-center relative z-10">
                  <Image 
                    src={game.logoUrl}
                    alt={`${game.opponent} logo`}
                    width={32}
                    height={32}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      console.error(`Failed to load image: ${game.logoUrl}`);
                      target.onerror = null;
                      target.src = '/logos/default.png'; // Fallback to a default image
                    }}
                  />
                  <div className="font-semibold">{game.opponent}</div>
                  <div>{game.location.charAt(0).toUpperCase() + game.location.slice(1)}</div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Calendar