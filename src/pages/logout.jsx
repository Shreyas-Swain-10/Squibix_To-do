import React from 'react';
import { useAuth } from '../state/authContext';

function Logout() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.reload(); // Refresh to update auth state
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
    >
      Logout
    </button>
  );
}

export default Logout;
