import { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import EngInv from './components/pages/EngInvitation';
import { useTheme } from '@mui/material/styles';
import NavBar from './components/navigation/NavBar';
import useFetchGuestGroup from './components/hooks/useFetchGuestGroup';
import './global.css'

const App = () => {
  const [userValid, setUserValid] = useState(false);
  const [code, setCode] = useState('');
  const { guests, fetchGuestGroup, loading, error } = useFetchGuestGroup();

  const theme = useTheme();

  const handleInputChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = async () => {
    if (code) {
      const isValidUser = await fetchGuestGroup(code);
      if (isValidUser) {
        setUserValid(true);
      } else {
        setUserValid(false);
        alert("You sure you're invited to this?");
      }
    }
  };

  return (
    <Router>
      <Box sx={{ bgcolor: theme.palette.background.default }}>

        {/* SECTION Nav bar 
        Izzy is pretty teeheehees
        */}
        <NavBar />

        {/* SECTION Content */}
        {!userValid ? ( // this is what's shown before the user is validated
          <Box sx={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            <Box>
              <Typography variant="h4" gutterBottom>
                Enter Your Code
              </Typography>
              {
                loading ? (
                <Typography variant="h4" gutterBottom>
                loading...
                </Typography>) : (
                    <></>
                )
              }
              <Box sx={{ display: 'flex', p: 2, gap: 2 }}>
                <TextField
                  label="Invite Code"
                  variant="outlined"
                  value={code}
                  onChange={handleInputChange}
                />
                <Button variant="contained" color="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
      ) : // this is shown after the user is validated
        (<Paper elevation={3} sx={{m: 3, p: 2}}>
          <Routes>
            <Route path="/"  element={<EngInv guests={guests}/>} />
          </Routes>
        </Paper>
        )}
      </Box>
    </Router>
  );
};

export default App;