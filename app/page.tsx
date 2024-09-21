'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Calendar from '@/components/Calendar'
import SportSelector from '@/components/SportSelector'

export default function Home() {
  const [selectedSports, setSelectedSports] = useState<string[]>(['Football'])

  useEffect(() => {
    if (!selectedSports.includes('Football')) {
      setSelectedSports(prev => [...prev, 'Football'])
    }
  }, [])

  const handleSportToggle = (sport: string) => {
    setSelectedSports(prev =>
      prev.includes(sport)
        ? prev.filter(s => s !== sport)
        : [...prev, sport]
    )
  }

  return (
    <main className="min-h-screen bg-black text-white p-4 md:p-6">
      <div className="flex items-center justify-center mb-6 md:mb-8">
        <Image
          src="/logos/gamecocklogo.png"
          alt="Gamecock Logo"
          width={60}
          height={60}
          className="mr-3"
          priority
        />
        <h1 className="text-2xl md:text-3xl font-bold">Gamecock Schedule</h1>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center">
        <div className="w-full md:w-48 mb-4 md:mb-0 md:absolute md:left-6">
          <SportSelector selectedSports={selectedSports} onSportToggle={handleSportToggle} />
        </div>
        <div className="w-full md:w-[calc(75%-12rem)] md:mx-auto">
          <Calendar selectedSports={selectedSports} />
          <div className="text-center text-sm mt-4 text-gray-400">
            <p>Built because I was tired of seeing ads when trying to view the schedule - Go Cocks!</p>
            <p className="mt-2">Thomas Faulds</p>
          </div>
        </div>
      </div>
    </main>
  )
}
