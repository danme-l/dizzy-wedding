import { useState, useEffect } from 'react';
import {Box, Typography, TextField, Button, Paper} from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Details from './components/pages/Details';
import Gallery from './components/pages/Gallery';
import Schedule from './components/pages/Schedule';
import FAQ from './components/pages/FAQ';
import Rsvp from './components/pages/Rsvp';
import OurStory from './components/pages/OurStory';
import AboutUs from './components/pages/AboutUs';
import { useTheme } from '@mui/material/styles';
import NavBar from './components/navigation/NavBar';
import './global.css'

// guests (temporary)
const validCodes = {
  '1': 'Laura Clark and Jeff Meleras, Parents of the Groom',
  '2': 'Claudine Michaud and Adnan Hadziomerovic, Parents of the Bride',
  '3': 'Tommy Wallis',
  '4': 'Lara Kercoglu',
  '5': 'Caroline Meleras',
  '6': 'Jacob Meleras, Best Man',
  '7': 'Ariane Hadziomerovic, Maid of Honour',
  '8': 'Alexa Hadziomerovic, Maid of Honour',
};

const App = () => {
  const theme = useTheme();
  
  // **SECTION** guest validation
  // to be hooked up to a database eventually 
  const [code, setCode] = useState(0)
  const [name, setName] = useState('');

  // assume name in non-production environments
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      // random name
      setName('Let\'ss go');
    }
  }, []);

  // gets the code out of the textbox
  const handleInputChange = (event) => {
    setCode(event.target.value);
  };

  // sets the user code as the State
  // feature desire: the code will query a db where there will be a guest-code mapping 
  // from there, the user will be able to see information specific to their attendance
  // eg: wedding party will see rehearsal dinner, morning of information
  const handleSubmit = () => {
    if (validCodes[code]) {
      setName(validCodes[code]);
    } else {
      alert('Invalid code. Please try again.');
    }
  };

  return (
    <Router>
      <Box>

        {/* SECTION Nav bar */}
        <NavBar />

        {/* SECTION Content */}
        {!name ? (
          <Box sx={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
            <Box>
            <Typography variant="h4" gutterBottom>
              Enter Your Code
            </Typography>
            <Box  sx={{display:'flex', p:2, gap: 2}}>
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
      ) : 
        (<Paper elevation={3} sx={{m: 3, p: 2}}>
          <Routes>
            <Route path="/" element={<Home name={name} />} />
            <Route path="/details" element={<Details />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/rsvp" element={<Rsvp defaultName={name}/>} />
            <Route path="/faq" element={<FAQ />} />s
          </Routes>
        </Paper>
        )}
      </Box>
    </Router>
  );
};

export default App;
