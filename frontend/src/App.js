import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/home/Home';
import SignIn from './views/signin/SignIn';
import SignUp from './views/signup/SignUp';
import Browse from './views/browse/Browse';
import Play from './views/play/Play';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/play/:id" element={<Play />} />
      </Routes>
    </Router>
  );
};

export default App;
