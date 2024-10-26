import React, {useState} from 'react';
import { Box, Grid, Typography, TextField, Button, Container} from '@mui/material';


const Home = ({ name }) => {

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

  //adding JS to flip the card upon click
  const handletwist = () => {
    document.getElementById('card').classList.toggle('is-flipped');
  };

  return (
    <div className='card' id="card" onClick={handletwist}>
    <Container className='front'>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Box sx={{
            p: 1,
            gap: 1
          }}>
            <Typography variant='h2'>
              Welcome, {name}!
            </Typography>
            <Typography variant="h1"> 
              The Marriage of Isabel Haziomerovic & Daniel Meleras
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
    <Container className='back'>
      {/* Ally Prop 0: Rehearsal */}
      <Box
            component="img"
            sx={{
    maxHeight: { xs: 233, md: 600 },
    maxWidth: { xs: 350, md: 600 },
              m: 0
            }}
            alt="Dan and Izzy"
            src="static/images/danIzzy1.jpg"
            />
    </Container>
    </div>
  );
};

export default Home;