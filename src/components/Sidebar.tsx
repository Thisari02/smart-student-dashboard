
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  BarChart3, 
  Settings, 
  ChevronLeft, 
  GraduationCap,
  LogOut,
  Sparkles
} from 'lucide-react';
import { Theme, UserRole } from '../types';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  theme: Theme;
  role: UserRole;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, theme, role }) => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Students', path: '/students', icon: Users },
    { name: 'Reports', path: '/reports', icon: BarChart3 },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <aside 
      className={`fixed inset-y-0 left-0 z-40 w-64 transform transition-all duration-300 ease-in-out border-r
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:relative md:translate-x-0 md:h-screen
        ${isOpen ? 'md:w-64' : 'md:w-20'}
        ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'}`}
    >
      <div className="flex flex-col h-full">
        {/* Logo Section */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-transparent">
          <div className={`flex items-center gap-3 transition-opacity duration-300 ${!isOpen && 'lg:opacity-0'}`}>
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
              <GraduationCap size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight">EduPulse</span>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 hidden lg:block ${!isOpen && 'rotate-180'}`}
          >
            <ChevronLeft size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group
                ${isActive 
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20' 
                  : 'text-slate-500 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-slate-900 dark:hover:text-white'}
              `}
            >
              <item.icon size={20} className={isOpen ? '' : 'mx-auto'} />
              {isOpen && <span className="font-medium">{item.name}</span>}
            </NavLink>
          ))}
        </nav>

        {/* AI Insight Card (Only when open) */}
        {isOpen && (
          <div className="px-4 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white relative overflow-hidden group">
              <Sparkles className="absolute -right-2 -top-2 opacity-20 group-hover:scale-125 transition-transform" size={48} />
              <h4 className="font-semibold mb-1 text-sm">AI Tutor Insight</h4>
              <p className="text-xs text-indigo-100 opacity-90 leading-relaxed">
                "Class 10-A performance rose 12% after new lab sessions."
              </p>
              <button className="mt-3 w-full bg-white/20 hover:bg-white/30 text-white text-[10px] font-bold py-1.5 rounded-lg backdrop-blur-md transition-all">
                VIEW DETAILS
              </button>
            </div>
          </div>
        )}

        {/* User Footer */}
        <div className={`p-4 border-t ${theme === 'dark' ? 'border-slate-700' : 'border-gray-100'}`}>
          <div className={`flex items-center gap-3 ${!isOpen && 'justify-center'}`}>
            <img 
              src="https://picsum.photos/seed/admin/100/100" 
              className="w-10 h-10 rounded-full border-2 border-indigo-500/30" 
              alt="Admin"
            />
            {isOpen && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold truncate">Prof. Harrison</p>
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">{role}</p>
              </div>
            )}
            {isOpen && (
              <button className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                <LogOut size={18} />
              </button>
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
