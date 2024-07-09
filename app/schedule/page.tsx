'use client';
import React, { useState } from 'react'
import '../globals.css';
import { UserIcon } from '@heroicons/react/16/solid'
import Switcher11 from './components/Switcher';
import WeeklyCalendar from './WeeklyCalendar';
import Availability from './Availability';
import Default from './Default';

const staffMembers = [
    {
        id: 205,
        firstName: "Jacob",
        lastName: "Gambrell",
        team: "Takeout"
    },
    {
        id: 169,
        firstName: "Chari",
        lastName: "Rothrock",
        team: "Takeout"
    },
    {
        id: 199,
        firstName: "Beverly",
        lastName: "Manager",
        team: "Takeout"
    },
    {
        id: 147,
        firstName: "Madison",
        lastName: "Deaton",
        team: "Takeout, Server"
    },
    {
        id: 235,
        firstName: "Jason",
        lastName: "Le",
        team: "Takeout"
    },
]

const availability = [
    {
        id: 205,
        mon: "allday",
        tues: "allday",
        wed: "allday",
        thurs: "morning",
        fri: "unavailable",
        sat: "unavailable",
        sun: "unavailable"
    }
]

const Dashboard = () => {
    // const [smallView, setSmallView] = useState(true);
    const [selectedMember, setSelectedMember] = useState();
    const [currentView, setCurrentView] = useState('schedule');
    const smallView = false;

  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen'>
        <div className='flex flex-col size-7/12 transition-all duration-100 ease-out hover:size-7/12 rounded-3xl border-2 overflow-auto'>
            <div className='flex flex-row h-full'>

                <div className={`flex flex-col transition-all duration-500 border-r-2 px-5 py-2 pt-5 space-y-2 w-3/12 h-full items-center overflow-auto no-scrollbar shrink-0 ${smallView ? 'opacity-0 max-h-0' : 'opacity-100 max-h-full'}`}>
                    <div className='w-full h-96'>
                        <h1 className='font-bold'>Staff</h1>
                        <ul className='divide-y-2'>
                            { staffMembers.map((member) => 
                                <li key={member.id} className='py-1'>
                                    <StaffMember 
                                        member={member} 
                                        onClick={() => setSelectedMember(member)} 
                                        isSelected={selectedMember?.id === member.id}    
                                    />
                                </li>
                            )}
                            {/* <li><AddStaffButton /></li> */}
                        </ul>
                    </div>
                </div>

                {/* Main View  */}
                <div className='flex flex-col pt-2 h-full w-full items-center'>
                    <Switcher11 currentView={currentView} setCurrentView={setCurrentView} />
                    {!selectedMember ? (
                        <Default />
                    ) : (
                        currentView === 'schedule' ? <WeeklyCalendar member={selectedMember} /> : <Availability member={selectedMember} />
                    )}
                </div>

            </div>
        </div>

        {/* <button onClick={() => setSmallView(!smallView)}>
            View
        </button> */}
    </div>
  )
}

export default Dashboard



const StaffMember = ({ member, onClick, isSelected }) => {
    return (
        <div>
             <div
            onClick={onClick}
            className={`flex flex-row h-12 px-2 space-x-5 items-center cursor-pointer hover:bg-[#f4f7ff] hover:rounded-lg ${isSelected ? 'bg-[#f4f7ff] rounded-lg' : ''}`}
            >
                <div className='size-6 shrink-0'><UserIcon /></div>
                <div className='flex flex-col whitespace-nowrap overflow-hidden'>
                    <h1 className='font-medium text-base'>{member.firstName} {member.lastName}</h1>
                    <h2 className='text-gray-400 text-xs'>{member.team}</h2>
                </div>
            </div>
        </div>
    )
}

const AddStaffButton = () => {
  return (
    <div className='h-12'>
        <button className='border rounded-lg bg-black text-white font-light px-8 py-2'>
            + Add Member
        </button>
    </div>
  )
}