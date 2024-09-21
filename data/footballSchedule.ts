export interface Game {
  date: string;
  opponent: string;
  location: 'home' | 'away';
  result?: string;
  time?: string;
  logoUrl: string;
}

export const footballSchedule: Game[] = [
  {
    date: '2024-08-31',
    opponent: 'Old Dominion',
    location: 'home',
    result: 'W23-19',
    logoUrl: '/logos/odu.png', // Changed from olddominion.png
  },
  {
    date: '2024-09-07',
    opponent: 'Kentucky',
    location: 'away',
    result: 'W31-6',
    logoUrl: '/logos/kentucky.png',
  },
  {
    date: '2024-09-14',
    opponent: 'LSU',
    location: 'home',
    result: 'L36-33',
    logoUrl: '/logos/lsu.png', // Verify this matches the actual file name
  },
  {
    date: '2024-09-21',
    opponent: 'Akron',
    location: 'home',
    time: '4:30 PM',
    logoUrl: '/logos/akron.png',
  },
  {
    date: '2024-10-05',
    opponent: 'Ole Miss',
    location: 'home',
    time: 'TBD',
    logoUrl: '/logos/olemiss.png',
  },
  {
    date: '2024-10-12',
    opponent: 'Alabama',
    location: 'away',
    time: 'TBD',
    logoUrl: '/logos/alabama.png',
  },
  {
    date: '2024-10-19',
    opponent: 'Oklahoma',
    location: 'away',
    time: 'TBD',
    logoUrl: '/logos/oklahoma.png',
  },
  {
    date: '2024-11-02',
    opponent: 'Texas A&M',
    location: 'home',
    time: 'TBD',
    logoUrl: '/logos/texasanm.png', // Changed from texasam.png
  },
  {
    date: '2024-11-09',
    opponent: 'Vanderbilt',
    location: 'away',
    time: 'TBD',
    logoUrl: '/logos/vanderbilt.png',
  },
  {
    date: '2024-11-16',
    opponent: 'Missouri',
    location: 'home',
    time: 'TBD',
    logoUrl: '/logos/missouri.png',
  },
  {
    date: '2024-11-23',
    opponent: 'Wofford',
    location: 'home',
    time: '1:00 PM',
    logoUrl: '/logos/wofford.png',
  },
  {
    date: '2024-11-30',
    opponent: 'Clemson',
    location: 'away',
    time: 'TBD',
    logoUrl: '/logos/clemson.png',
  },
];