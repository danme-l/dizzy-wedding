import React, {useState, useEffect} from 'react';
import { Box, Grid, Typography, TextField, Button, Container} from '@mui/material';


const Home = ({ guests }) => {
  const [guestString, setGuestString] = useState('');

  useEffect(() => {
    const formatGuestString = () => {
      if (guests.length === 0) return '';

      const fullNames = guests.map(guest => `${guest.first_name} ${guest.last_name}`);

      if (fullNames.length === 1) {
        return fullNames[0];
      } else {
        const lastGuest = fullNames.pop(); // remove the last guest
        return `${fullNames.join(', ')} and ${lastGuest}`;
      }
    };

    setGuestString(formatGuestString());
  }, [guests]);

  // **SECTION** Date Stuff
  const weddingDate = new Date('10 January 2026 12:00 EST');
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // date calculator to get number of days until the wedding
  const dateCalculate = (target) => {
    const now = new Date();
    const totalDays = Math.floor((target - now) / (1000 * 60 * 60 * 24));

    return `${totalDays} days`
  };

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Box sx={{
            p: 1,
            gap: 1
          }}>
            <Typography variant='h2'>
              Welcome!
            </Typography>
            <Typography variant='h3' sx={{ m:2}}>
              {guestString}
            </Typography>
            <br />
            <Typography variant="h1"> 
              The Marriage of Isabel Haziomeric & Daniel Meleras
            </Typography>
            <Typography variant='h2' mx={3}>
              {weddingDate.toLocaleDateString('en-CA', dateOptions)}
            </Typography>
            <Typography variant='h2' mx={3}>
              {dateCalculate(weddingDate)}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              width: '84%',
              m: 0
            }}
            alt="Dan and Izzy"
            src="static/images/danIzzy1.jpg"
            />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;