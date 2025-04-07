// src/App.js
import React from 'react';
import './App.css';

// Components
import Hero from './components/Hero';
import OurStory from './components/OurStory';
import Gallery from './components/Gallery';
import Proposal from './components/Proposal';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Hero />
      <OurStory />
      <Gallery />
      <Proposal />
      <Contact />
    </div>
  );
}

export default App;
