import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Calendar, Clock, UserCircle, PlusCircle, History, ClipboardList, LogIn, LogOut } from 'lucide-react';

const Sidebar = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkUserStatus = () => {
      const user = localStorage.getItem('user');
      if (user) {
        const userData = JSON.parse(user);
        setIsAdmin(userData.role === 'admin');
        setIsLoggedIn(true);
      } else {
        setIsAdmin(false);
        setIsLoggedIn(false);
      }
    };

    checkUserStatus();
    // Add event listener for storage changes
    window.addEventListener('storage', checkUserStatus);
    
    return () => {
      window.removeEventListener('storage', checkUserStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsAdmin(false);
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  return (
    <div className="w-64 bg-secondary shadow-lg h-screen sticky top-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Calendar className="w-8 h-8 text-primary animate-pulse-subtle" />
          <span>EventHub</span>
        </h1>
      </div>
      
      <nav className="mt-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 transform hover:translate-x-2 ${
              isActive ? 'bg-primary text-white' : ''
            }`
          }
        >
          <Calendar className="w-5 h-5" />
          <span>All Events</span>
        </NavLink>

        {isLoggedIn && (
          <>
            <NavLink
              to="/registered-events"
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 transform hover:translate-x-2 ${
                  isActive ? 'bg-primary text-white' : ''
                }`
              }
            >
              <ClipboardList className="w-5 h-5" />
              <span>Registered Events</span>
            </NavLink>

            {isAdmin && (<NavLink
              to="/my-events"
              className={({ isActive }) =>
                `flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 transform hover:translate-x-2 ${
                  isActive ? 'bg-primary text-white' : ''
                }`
              }
            >
              <Clock className="w-5 h-5" />
              <span>My Events</span>
            </NavLink>)}

            {isAdmin && (
              <NavLink
                to="/host-event"
                className={({ isActive }) =>
                  `flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 transform hover:translate-x-2 ${
                    isActive ? 'bg-primary text-white' : ''
                  }`
                }
              >
                <PlusCircle className="w-5 h-5" />
                <span>Host an Event</span>
              </NavLink>
            )}
          </>
        )}

        <NavLink
          to="/previous-events"
          className={({ isActive }) =>
            `flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 transform hover:translate-x-2 ${
              isActive ? 'bg-primary text-white' : ''
            }`
          }
        >
          <History className="w-5 h-5" />
          <span>Previous Events</span>
        </NavLink>

        {!isLoggedIn ? (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 transform hover:translate-x-2 ${
                isActive ? 'bg-primary text-white' : ''
              }`
            }
          >
            <LogIn className="w-5 h-5" />
            <span>Login</span>
          </NavLink>
        ) : (
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-6 py-3 text-gray-300 hover:bg-primary hover:text-white transition-all duration-300 transform hover:translate-x-2 w-full"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;