import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AuthPage from './components/AuthPage';
import Dashboard from './components/Dashboard';
import CreateApp from './components/CreateApp';
import AppDetail from './components/AppDetail';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-app" element={<CreateApp />} />
          <Route path="/app/:id" element={<AppDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;