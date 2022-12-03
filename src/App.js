import React, {useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import NotFound from './pages/NotFound/NotFound';

import './normalize.css';
import './App.css';
import Main from './components/main/main';
import Leftbar from './components/leftbar/leftbar';

function App() {

  useEffect (() => {
    setTimeout(() => {
      document.getElementsByClassName("App")[0].style.width = "100%";
    }, 0);
  });

  return (
    <div id="All_app">
      <Link to="/post">posts</Link>
      <Routes>
        <Route path="*" element={NotFound} />
      </Routes>
      <div className="Left_bar">
        <Leftbar />
      </div>
      <div className="App">
        <Main />
      </div>
    </div>
  );
}

export default App;
