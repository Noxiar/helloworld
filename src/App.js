import logo from './logo.svg';
import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Text = lazy(() => import('./Text'));
const Image = lazy(() => import('./Image'));
const propt = lazy(() => import('./propt'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Image" element={<Image />} />
          <Route path="/Text" element={<Text />} />
          <Route path="/propt" element={<propt />} />
        </Routes>
        </Suspense>
    </Router>
   
  );
}

export default App;
