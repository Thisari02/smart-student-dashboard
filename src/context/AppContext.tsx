
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme, UserRole } from '../types';

interface AppContextType {
  theme: Theme;
  setTheme: (t: Theme) => void;
  role: UserRole;
  setRole: (r: UserRole) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (o: boolean) => void;
  toggleTheme: () => void;
  toggleRole: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

/**
 * Provider for global application state (Theme, Auth role, Layout).
 */
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [role, setRole] = useState<UserRole>('teacher');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  const toggleRole = () => setRole(prev => (prev === 'teacher' ? 'admin' : 'teacher'));

  return (
    <AppContext.Provider value={{ 
      theme, setTheme, 
      role, setRole, 
      isSidebarOpen, setIsSidebarOpen,
      toggleTheme, toggleRole
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};
