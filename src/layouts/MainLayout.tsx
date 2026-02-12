
import React, { Suspense, lazy } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useApp } from '../context/AppContext';

const AIChatBot = lazy(() => import('../components/AIChatBot'));

/**
 * Root layout component that orchestrates Navigation, Main Content, and Overlays.
 */
export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isSidebarOpen, setIsSidebarOpen, theme, role, toggleTheme, toggleRole } = useApp();
  const location = useLocation();
  const hasGeminiKey = Boolean(import.meta.env.VITE_GEMINI_API_KEY);

  return (
    <div className={`min-h-screen flex transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-900 text-white' : 'bg-gray-50 text-slate-900'}`}>
      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {!isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(true)}
          />
        )}
      </AnimatePresence>
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        setIsOpen={setIsSidebarOpen} 
        theme={theme}
        role={role}
      />

      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <Navbar 
          theme={theme} 
          toggleTheme={toggleTheme} 
          role={role} 
          toggleRole={toggleRole}
          setSidebarOpen={setIsSidebarOpen}
        />
        
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 lg:p-8 custom-scrollbar">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {hasGeminiKey && (
        <Suspense fallback={null}>
          <AIChatBot />
        </Suspense>
      )}
    </div>
  );
};
