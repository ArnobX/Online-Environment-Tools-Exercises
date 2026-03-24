import React from 'react';
// Import the newly created component
import { Profile } from './components/Profile';
import { TeamCard } from "./components/TeamCard";
export default function App() {
  return (
    <div className="bg-green-100 min-h-screen">
    <div className="p-8  flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-8 text-slate-700">Welcome to React!</h1>
      {/* Use the component and pass it the required props */}
      <Profile name="Arnob Bhattacharjee" role="Junior Developer" />
    </div>

    <div className="p-10 flex gap-6 justify-center">
      <TeamCard name="Arnob" role="Frontend"/>
      <TeamCard name="Priya" role="Backend"/>
      <TeamCard name="Anush" role="Designer"/>
    </div>
    </div>
  );
}
