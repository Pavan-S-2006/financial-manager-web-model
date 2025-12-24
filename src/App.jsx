import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import DashboardLayout from './pages/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import NotepadPage from './pages/NotepadPage';
import BudgetPage from './pages/BudgetPage';
import AiInsightsPage from './pages/AiInsightsPage';
import SandboxPage from './pages/SandboxPage';
import InsurancePage from './pages/InsurancePage';
import AssetsPage from './pages/AssetsPage';
import EmergencyPage from './pages/EmergencyPage';
import ProfilesPage from './pages/ProfilesPage';
import LiteracyPage from './pages/LiteracyPage';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="ai-insights" element={<AiInsightsPage />} />
            <Route path="sandbox" element={<SandboxPage />} />
            <Route path="insurance" element={<InsurancePage />} />
            <Route path="assets" element={<AssetsPage />} />
            <Route path="emergency" element={<EmergencyPage />} />
            <Route path="profiles" element={<ProfilesPage />} />
            <Route path="literacy" element={<LiteracyPage />} />
            {/* Legacy Routes kept for safety or if linked internally */}
            <Route path="notepad" element={<NotepadPage />} />
            <Route path="budgets" element={<BudgetPage />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
