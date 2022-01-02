import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

import pizza from './assets/pizza.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pizza} className="App-logo" alt="logo" />
        <p>
          Welcome to Bepoz Pizza
        </p>
        <Box sx={{ '& button': { m: 1 } }}>
          <div>
          <Button variant="outlined" href="/login" >Login</Button>
          <Button variant="outlined" >Signup</Button>
          </div></Box>
      </header>
    </div>
  );
}

export default App;
