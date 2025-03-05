import React from 'react';
import { Container, Typography } from '@mui/material';
import { Box, Grid, TextField, Button} from '@mui/material';


//adding JS to flip the card upon click TODO: find a way to make this function universal
const handletwist = () => {
    document.getElementById('card').classList.toggle('is-flipped');
  };
const EngInv = () => {
  return (
    <Container>
      {/*Engagement card with link to RSVP */}
      <div id="card" onClick={handletwist}>
      <Container justifyContent={true}>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Box sx={{
            p: 1,
            gap: 1
          }}>
            <Typography variant='h2'>
              Welcome, X!
            </Typography>
            <Typography variant="h1"> 
              Isabel Hadziomerovic & Daniel Meleras's Engagement Party
            </Typography>
            <Typography variant='h2' mx={3}>
              May 31st, 2025
            </Typography>
            <Typography variant='h2' mx={3}>
              XXX
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} >
          <Box
            component="img"
            sx={{
              width: '84%',
              m: 0
            }}
            alt="Dan and Izzy"
            src="static/images/DSC_3975.jpg"
            
            />
        </Grid>
      </Grid>
    </Container>
    <hr/>
    <Container align='center'>
      <Typography variant="h4" gutterBottom>
        Details
      </Typography>
      <Typography variant="body1">Date: XXX</Typography>
      <Typography variant="body1">Location: 352 Acacia ave, Ottawa</Typography>
      <Typography variant="body1">Time: 3 PM</Typography>
      <Typography variant="body1">Dress Code: Business Casual</Typography>
    </Container>
    <hr/>
    <Container align='center'>
      <Typography variant="invitation1" gutterBottom>
        About Ottawa
      </Typography>
      <Typography variant="body1">Blurb</Typography>
      <Typography variant="body1">Things to do</Typography>

    </Container>
    </div>
    </Container>
  );
};

export default EngInv;