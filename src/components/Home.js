import React from 'react';
import { Box, Grid, Typography, Paper} from '@mui/material';
const Home = () => {
  const weddingDate = new Date('10 January 2026 12:00 EST');
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  // date calculator
  const dateCalculate = (target) => {
    const now = new Date();
    const totalDays = Math.floor((target - now) / (1000 * 60 * 60 * 24));

    const years = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays % 365) / 30);
    const days = totalDays % 30;

    // return `${years} year, ${months} months, ${days} days`;
    return `${totalDays} days`
  };


  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <Box sx={{
          m: "50px",
          p: "20px"
        }}>
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
  );
};

export default Home;