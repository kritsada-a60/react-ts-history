import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';
import History from './components/HistoryPage/history';

import './style.css';

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}
