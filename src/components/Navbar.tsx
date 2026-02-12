
import React, { useState } from 'react';
import { 
  Bell, 
  Search, 
  Moon, 
  Sun, 
  Menu, 
  ShieldCheck, 
  UserCircle
} from 'lucide-react';
import { Theme, UserRole } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
  role: UserRole;
  toggleRole: () => void;
  setSidebarOpen: (open: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, role, toggleRole, setSidebarOpen }) => {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className={`h-16 border-b flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30 backdrop-blur-md transition-all
      ${theme === 'dark' ? 'bg-slate-900/80 border-slate-700' : 'bg-white/80 border-gray-200'}`}>
      
      <div className="flex items-center gap-4 flex-1">
        <button 
          onClick={() => setSidebarOpen(true)} 
          className="p-2 lg:hidden text-slate-500 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg"
        >
          <Menu size={24} />
        </button>

        <div className={`relative hidden md:flex items-center transition-all duration-300 ${searchFocused ? 'w-96' : 'w-64'}`}>
          <Search className="absolute left-3 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search student, report..."
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            className={`w-full bg-gray-100 dark:bg-slate-800 pl-10 pr-4 py-2 rounded-xl text-sm outline-none border-2 transition-all
              ${searchFocused ? 'border-indigo-500 bg-white shadow-sm' : 'border-transparent'}`}
          />
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        {/* Role Toggle Mock */}
        <button 
          onClick={toggleRole}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all
            ${role === 'admin' 
              ? 'bg-rose-50 text-rose-600 border border-rose-200' 
              : 'bg-indigo-50 text-indigo-600 border border-indigo-200'}`}
        >
          <ShieldCheck size={14} />
          <span className="hidden sm:inline">Mode: {role === 'teacher' ? 'Teacher' : 'Admin'}</span>
        </button>

        {/* Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="p-2 text-slate-500 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
        >
          {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Notifications */}
        <div className="relative">
          <button className="p-2 text-slate-500 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-xl transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-slate-900" />
          </button>
        </div>

        <div className="h-8 w-px bg-gray-200 dark:bg-slate-700 mx-1 hidden sm:block" />

        {/* Profile */}
        <div className="flex items-center gap-3 pl-2">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold leading-none">James H.</p>
            <p className="text-[10px] text-slate-400 font-medium">Head of Science</p>
          </div>
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/20">
            JH
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
