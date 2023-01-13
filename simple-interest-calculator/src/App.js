import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const App = () => {
  const [p, setP] = useState(0);
  const [t, setT] = useState(0);
  const [r, setR] = useState(0);
  const [si, setSi] = useState(0)

  const calculateInterest = () => {
    setSi(p * t * r / 100)
  }

  let myStyle = {
    marginLeft: '20px',
  }


  return (
    <div >
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest Calculator
          </Typography>

        </Toolbar>

      </AppBar>
      <br></br>
      <TextField style={myStyle} onChange={(event) => setP(event.target.value)} id="outlined-basic" label="EnterP" variant="outlined" /><br></br>

      <TextField style={myStyle} onChange={(event) => setT(event.target.value)} id="outlined-basic" label="EnterT" variant="outlined" /><br></br>

      <TextField style={myStyle} onChange={(event) => setR(event.target.value)} id="outlined-basic" label="EnterR" variant="outlined" />
      <br></br><br></br>
      <Button style={myStyle} onClick={() => calculateInterest()} variant="text">calculate</Button>

      <Typography style={myStyle} variant="h6" gutterBottom>
        Simple Interest Calculate is: {si}
      </Typography>
    </div>
  );
}

export default App;
