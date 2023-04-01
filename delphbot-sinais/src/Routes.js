import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BotApp from './pages/BotApp';
import WebApp from './pages/WebApp';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BotApp />} />
      <Route path="/webapp" element={<WebApp />} />
    </Routes>
  );
}

export default AppRoutes;
