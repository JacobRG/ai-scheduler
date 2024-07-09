'use client';
import React, { useState } from 'react'
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

const Switcher11 = ({ currentView, setCurrentView }) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    setCurrentView(isChecked ? 'schedule' : 'availability');
  }

  return (
    <>
      <label className='themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1'>
        <input
          type='checkbox'
          className='sr-only'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            !isChecked ? 'text-primary bg-[#f4f7ff]' : 'text-body-color'
          }`}
          onClick={() => setCurrentView('schedule')}
        >
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            className='mr-[6px] fill-current'
          >
            <CalendarIcon />
          </svg>
          Schedule
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            isChecked ? 'text-primary bg-[#f4f7ff]' : 'text-body-color'
          }`}
          onClick={() => setCurrentView('availability')}
        >
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            className='mr-[6px] fill-current'
          >
            <ClockIcon />
          </svg>
          Availability
        </span>
      </label>
    </>
  )
}

export default Switcher11
