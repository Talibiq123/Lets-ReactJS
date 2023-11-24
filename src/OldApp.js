import React, { useState } from "react";
import './App.css';
import Hello from './Components/Hello';



function App() {
  let [name, setName] = useState('');

  return (
    <div>
      <Hello changeName={setName} />
      {name && <h1>Hello {name}</h1>}
    </div>
  );
}

export default App;
