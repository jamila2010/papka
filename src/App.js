import { useState } from 'react';
import './App.css';
import Modal from './Modal.js'  

function App() {
  const [showContent, setContent]=useState(false)
  return (
    <div className="App">
    {!showContent &&  <button onClick={()=>{
      setContent(true)
     }}>Show Content</button>}
     {showContent && <button onClick={()=>{
      setContent(false)
     }}>Hide Content</button>}
     {showContent && <Modal />}
    </div>
  );
}

export default App;
