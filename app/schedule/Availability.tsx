import React from 'react'
import InputWithLabel from './components/InputWithLabel'
import Selecter from './components/Selecter'
import ToggleGrouper from './components/ToggleGrouper'
import { Label } from '@radix-ui/react-label'

const Teams = ["Host", "Takeout", "Server"]
const DaysOfWeek = ["Mon", "Tues", "Wed", "Thur", "Fri", "Sat", "Sun"]
const Times = ["N/a", "AM", "PM", "Open"]

const Availability = ({ member }) => {
  return (
    <div className='flex flex-row w-full h-full py-5'>
        <div className='flex flex-col w-1/2 h-full items-start justify-start px-5 space-y-5'>
          <h1 className='font-bold'>Profile</h1>
          <InputWithLabel type="First name" placeholder={member.firstName} />
          <InputWithLabel type="Last name" placeholder={member.lastName} />
          <div>
            <Label>Team</Label>
            <Selecter title="Teams" list={Teams} placeholder={member.team} /> 
          </div>
        </div>
        
        <div className='flex flex-col w-1/2 h-full items-start justify-start px-5 space-y-1'>
          <h1 className='font-bold'>Availability</h1>
          {DaysOfWeek.map((day) => (
            <div className='flex flex-row w-full items-center'>
              <h1 className='grow text-base'>{day}</h1>
              <ToggleGrouper />
            </div>
          ))}
        </div>

    </div>
  )
}

export default Availability