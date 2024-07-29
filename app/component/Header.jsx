"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bell, Menu, Moon, Search, Sun, User } from 'react-feather';
// import { Menu, Bell, User, Sun, Moon } from 'react-feather';

const Header = () => {
  const [theme, setTheme] = useState("light");
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    console.log("theme:",theme)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleSearch = () => {
    //query
    console.log(query);
    setQuery('');
  };

  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md focus:outline-none">
              <Menu className="h-6 w-6 text-gray-800 dark:text-white" />
            </button>
            <div className='flex justify-between gap-3 opacity-60 rounded-[24px] px-4 py-2 border w-[400px] mx-2 dark:text-white ml-5 bg-white dark:bg-gray-800'>
              {/* <Search className='w-4 text-gray-500 dark:text-gray-400' /> */}
              <input
                type='text'
                value={query}
                onChange={handleChange}
                placeholder='Search'
                className='flex-1 bg-transparent outline-none text-gray-800 dark:text-white'
              />
              <Search onClick={handleSearch} className='w-4 text-gray-500 dark:text-gray-400 mr-2 cursor-pointer' />
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <button onClick={handleThemeSwitch} className="p-2 rounded-full focus:outline-none">
              {theme == "dark" ? (
                  <Sun className="h-6 w-6 text-yellow-500" />
                ) : (
                  <Moon className="h-6 w-6 text-gray-800 dark:text-white" />
                )}
            </button>
            <button className="p-2 rounded-md focus:outline-none">
              <Bell className="h-6 w-6 text-gray-800 dark:text-white" />
            </button>
            <button className="p-2 rounded-full focus:outline-none">
              <User className="h-6 w-6 text-gray-800 dark:text-white" />
              {/* <Avatar src="" alt=""/> */}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

  