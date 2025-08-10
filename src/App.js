import { useState } from 'react';
import { Box, Paper } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Gallery from './components/pages/Gallery';
import Schedule from './components/pages/Schedule';
import FAQ from './components/pages/FAQ';
import Rsvp from './components/pages/Rsvp';
import OurStory from './components/pages/OurStory';
import AboutUs from './components/pages/AboutUs';
import { useTheme } from '@mui/material/styles';
import TokenizedNav from './components/navigation/TokenizedNav';
import useFetchGuestGroup from './components/hooks/useFetchGuestGroup';

// render the navbar and the main content for all /:token routes
const TokenizedApp = ({ setUserValid }) => {
  const { token } = useParams();
  const { guests, fetchGuestGroup, loading, error } = useFetchGuestGroup();

  React.useEffect(() => {
    if (token) {
      fetchGuestGroup(token).then(isValidUser => {
        setUserValid(isValidUser);
      });
    }
  }, [token, fetchGuestGroup, setUserValid]);

  if (loading) {
    return <Box sx={{ p: 3 }}>Loading...</Box>;
  }

  if (error) {
    return <Box sx={{ p: 3, color: 'red' }}>Invalid or expired link.</Box>;
  }

  return (
    <>
      <TokenizedNav /> {/* ensure useParams() gets token */}
      <Paper elevation={3} sx={{ m: 3, p: 2 }}>
        <Routes>
          <Route path="" element={<Home guests={guests} />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="ourstory" element={<OurStory />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="rsvp" element={<Rsvp guests={guests} />} />
          <Route path="faq" element={<FAQ />} />
        </Routes>
      </Paper>
    </>
  );
};

const App = () => {
  const [userValid, setUserValid] = useState(false);
  const theme = useTheme();

  return (
    <Router>
      <Box sx={{ bgcolor: theme.palette.background.default }}>
        <Routes>
          {/* everything under /:token/* */}
          <Route path="/:token/*" element={<TokenizedApp setUserValid={setUserValid} />} />
          {/* TODO add landing or 404 routes  */}
        </Routes>
      </Box>
    </Router>
  );
};

export default App;
