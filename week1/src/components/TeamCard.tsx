import { useState } from 'react'

interface CardProps{
    name: string;
    role: string;
}

export function TeamCard({name, role}: CardProps){
    const [votes, setVotes] = useState(0);

    return(
        <div className="bg-blue-50 rounded-xl shadow-lg p-6 text-center w-44 border-t-4 border-blue-400">
            <h2 className="font-bold text-slate-800">{name}</h2>
            <p className="text-slate-500 text-sm mb-4">{role}</p>
            <button 
                onClick={()=> setVotes((prev) => prev + 1)}
                className="bg-blue-800 text-white px-4 py-2 rounded-lg w-full"
                >
                    <span>Vote</span>
                    <span> ({votes}) </span>


            </button>
        </div>
    );
}