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
      <div className='card' id="card" onClick={handletwist}>
    <Container className='front'>
      <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Box sx={{
            p: 1,
            gap: 1
          }}>
            <Typography variant='invitation2'>
              Welcome, Person A!
            </Typography>
            <Typography variant="invitation1"> 
              The Engagement Party of Isabel Haziomerovic & Daniel Meleras
            </Typography>
            <Typography variant='invitation2' mx={3}>
                Saturday May 31st, 2025 at 3 PM
              {/*weddingDate.toLocaleDateString('en-CA', dateOptions)*/}
            </Typography>
            <Typography variant='invitation2' mx={3}>
                In XXX days
              {/*dateCalculate(weddingDate)*/}
            </Typography>
            <Typography variant='invitation2' mx={3}>
                352 Acacia ave 
              {/*dateCalculate(weddingDate)*/}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
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
    </Container>
  );
};

export default EngInv;