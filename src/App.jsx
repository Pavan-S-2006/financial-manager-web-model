import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardLayout from './pages/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import NotepadPage from './pages/NotepadPage';
import BudgetPage from './pages/BudgetPage';
import InvestPage from './pages/InvestPage';
import ScorePage from './pages/ScorePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="notepad" element={<NotepadPage />} />
          <Route path="budgets" element={<BudgetPage />} />
          <Route path="invest" element={<InvestPage />} />
          <Route path="score" element={<ScorePage />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
