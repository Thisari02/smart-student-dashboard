
import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { MainLayout } from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Students from './pages/Students';
import StudentProfile from './pages/StudentProfile';
import Reports from './pages/Reports';

/**
 * Main Application Component.
 * Orchestrates global providers and routing.
 */
const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <MainLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:id" element={<StudentProfile />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </MainLayout>
      </Router>
    </AppProvider>
  );
};

export default App;
