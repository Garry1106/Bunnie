'use client'
import React from 'react';
import { useClerk } from '@clerk/clerk-react'; // Import useClerk or useSignOut

type Props = {};

export default function DashboardPage({}: Props) {
  

  const { signOut } = useClerk();

  const handleSignOut = async () => {
    try {
      await signOut(); // Call the signOut method
      console.log('User signed out successfully');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div>
      <h1>Dashboard Page</h1>
      <button
        onClick={handleSignOut}
        style={{
          padding: '10px 20px',
          backgroundColor: '#ff4444',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Sign Out
      </button>
    </div>
  );
}