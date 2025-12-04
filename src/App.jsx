import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import TopPage from './pages/TopPage';
import PregnancyPage from './pages/PregnancyPage';
import ChildbirthPage from './pages/ChildbirthPage';
import ChildcarePage from './pages/ChildcarePage';
import PointsCalculationPage from './pages/PointsCalculationPage';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<TopPage />} />
          <Route path="pregnancy" element={<PregnancyPage />} />
          <Route path="childbirth" element={<ChildbirthPage />} />
          <Route path="childcare" element={<ChildcarePage />} />
          <Route path="childcare/points" element={<PointsCalculationPage />} />
          <Route path="todo" element={<TodoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
