import React from 'react';
import Editor from './components/Editor';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My React Editor</h1>
      </header>
      <Editor placeholder="Write something..." />
    </div>
  );
}

export default App;
