// app/gamedata.ts
export type Round = {
  id: number;
  audioUrl: string;
  countryName: string;
  lat: number;
  lng: number;
};

export const ROUNDS: Round[] = [
  {
    id: 1,
    audioUrl: "/audio/german.mp3",
    countryName: "Germany",
    lat: 52.52, // Berlin
    lng: 13.405,
  },
  {
    id: 2,
    audioUrl: "/audio/russia.mp3",
    countryName: "Russia",
    lat: 55.7558, // Moscow
    lng: 37.6173,
  },
  {
    id: 3,
    audioUrl: "/audio/china.mp3",
    countryName: "China",
    lat: 39.9042, // Beijing
    lng: 116.4074,
  },
  {
    id: 4,
    audioUrl: "/audio/japan.mp3",
    countryName: "Japan",
    lat: 35.6895, // Tokyo
    lng: 139.6917,
  },
  {
    id: 5,
    audioUrl: "/audio/italy.mp3",
    countryName: "Italy",
    lat: 41.9028, // Rome
    lng: 12.4964,
  },
  {
    id: 6,
    audioUrl: "/audio/spain.mp3",
    countryName: "Spain",
    lat: 40.4168, // Madrid
    lng: -3.7038,
  },
];
