import React from 'react';
import './App.css';
import Header from './header.js';
import IncrementButtons from './incrementButtons.js';
import InputGreeting from './inputGreeting.js';
import Calculator from './calculator.js';

function App() {
  return (
  <div id="app">
    
    <IncrementButtons />
    <InputGreeting />
    <Calculator />
  </div>
  )
}

export default App;
