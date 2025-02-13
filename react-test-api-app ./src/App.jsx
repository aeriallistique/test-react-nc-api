import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import axios from 'axios';

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios.get(`https://nc-marketplace-3-2ind.onrender.com/api/items`)
      .then(resp => {
        console.log(resp.data.items);

      });
  }, []);

  return (
    <div className='app'>
      <h1>My App</h1>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>


    </div>
  );
}

export default App;
