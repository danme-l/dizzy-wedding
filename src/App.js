import { useState, useEffect } from 'react';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Home from './components/Home';
import Gallery from './components/pages/Gallery';
import Schedule from './components/pages/Schedule';
import FAQ from './components/pages/FAQ';
import Rsvp from './components/pages/Rsvp';
import AboutUs from './components/pages/AboutUs';
import NavBar from './components/navigation/NavBar';
import Details from './components/pages/Details';
import useFetchGuestGroup from './components/hooks/useFetchGuestGroup';
import CircularProgress from '@mui/material/CircularProgress';

// configs
import { ConfigProvider } from "./ConfigContext";


const App = () => {
  const [userValid, setUserValid] = useState(false);
  const [code, setCode] = useState('');
  const { guests, fetchGuestGroup, loading, error } = useFetchGuestGroup();
  const [appMode, setAppMode] = useState('null');

  const handleInputChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmit = async () => {
    if (code) {
      const isValidUser = await fetchGuestGroup(code);
      if (isValidUser) {
        setUserValid(true);
        localStorage.setItem("guestCode", code);  // store code in localStorage
        
        // set appMode depending on code
        if (code === "sample123") {
          setAppMode("sample");
        } else {
          setAppMode(null);
        }

      } else {
        setUserValid(false);
        alert("Oops, that didn't work. Check your code again!");
      }
    }
  };

  useEffect(() => {
    const savedCode = localStorage.getItem("guestCode");
    if (savedCode) {
      (async () => {
        const isValidUser = await fetchGuestGroup(savedCode);
        if (isValidUser) {
          setUserValid(true);
          setCode(savedCode); // keep it in state too

          // set appMode depending on saved code
          if (savedCode === "sample123") {
            setAppMode("sample");
          } else {
            setAppMode(null);
          }
        }
      })();
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("guestCode");
    setUserValid(false);
    setCode('');
  };
 

  if (loading) {
    return (
      <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems: 'center'}}>
        Loading...
        <CircularProgress />
      </Box>
    )
  }

  return (
    <ConfigProvider appMode={appMode}>
      <Router>
        <Box>
          {/* SECTION Nav bar */}
          <NavBar />

          {/* SECTION Content */}
          {!userValid ? ( // this is what's shown before the user is validated
            <Box sx={{display: 'flex', justifyContent:'center', alignItems: 'center'}}>
              <Box>
                <Typography variant="h4" gutterBottom>
                  Enter Your Code
                </Typography>
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
              <Route path="/" element={<Home guests={guests} handleSignOut={handleSignOut} />} />
              <Route path="/details" element={<Details />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/aboutus" element={<AboutUs />} />
              <Route path="/schedule" element={<Schedule/>} />
              <Route path="/rsvp" element={<Rsvp guests={guests} refreshGuests={() => fetchGuestGroup(code)} appMode={appMode} />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </Paper>
          )}
        </Box>
      </Router>
    </ConfigProvider>
  );
};

export default App;
