import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '.documents/game traker/frontend/src/pages';
import JuegoDetalle from '.documents/game traker/frontend/src/pages';
export default function App() {
  return (
    <div className="app">
      <header className="header">
        <h1><Link to="/">GameTracker</Link></h1>
        <nav>
          <Link to="/">Biblioteca</Link>
        </nav>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/juego/:id" element={<JuegoDetalle />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>GameTracker • Proyecto final</p>
      </footer>
    </div>
  );
}
