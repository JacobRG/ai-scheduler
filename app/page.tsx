'use client';
import React, { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client'

export default async function Page() {
  const [staffMembers, setStaffMembers] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const supabase = createClient()

  const { data: availability } = await supabase.from('availability').select()

  useEffect(() => {
    fetchStaffMembers();
  }, []);

  const fetchStaffMembers = async () => {
    const { data, error } = await supabase.from('staff').select();

    if (error) {
      console.error('Error fetching staff members:', error);
    } else {
      setStaffMembers(data);
    }
  };

  const handleSelect = (staff) => {
    setSelectedStaff(staff);
  }

  return (
    <div>
      <h1>Staff Members</h1>
      <ul>
        {staffMembers.map((staff) => (
          <li key={staff.id} onClick={() => handleSelect(staff)}>
            {staff.firstName}
          </li>
        ))}
      </ul>
      {selectedStaff && (
        <div>
          <h2>Selected Staff Member</h2>
          <p>First Name: {selectedStaff.firstName}</p>
          <p>ID: {selectedStaff.id}</p>
        </div>
      )}
    </div>
  );
};
