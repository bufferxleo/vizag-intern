import './App.css';
import Start from './Start';
import Interface from './Interface';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Start />} />
          <Route path="/interface" element={<Interface />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;