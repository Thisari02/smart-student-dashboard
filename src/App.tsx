
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { MainLayout } from './layouts/MainLayout';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Students = lazy(() => import('./pages/Students'));
const StudentProfile = lazy(() => import('./pages/StudentProfile'));
const Reports = lazy(() => import('./pages/Reports'));

/**
 * Main Application Component.
 * Orchestrates global providers and routing.
 */
const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        <MainLayout>
          <Suspense fallback={<div className="p-6 text-slate-600">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/students/:id" element={<StudentProfile />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </MainLayout>
      </Router>
    </AppProvider>
  );
};

export default App;
