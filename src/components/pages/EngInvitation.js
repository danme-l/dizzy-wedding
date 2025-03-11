import React from 'react';
import { Container, Typography } from '@mui/material';
import { Box, Grid, TextField, Button} from '@mui/material';


//adding JS to flip the card upon click TODO: find a way to make this function universal
const handletwist = () => {
    document.getElementById('card').classList.toggle('is-flipped');
  };


const EngInv = ({guests}) => {

  let guestString;
  if (guests.length == 2) {
    guestString = `${guests[0].first_name} ${guests[0].last_name} and ${guests[1].first_name} ${guests[1].last_name}`
  } else {
    guestString = `${guests[0].first_name} ${guests[0].last_name}`
  }
  console.log(guests)
  console.log(guestString)


  return (
    <Container>
      {/*Engagement card with link to RSVP */}
      <div id="card" onClick={handletwist}>
      <Container justifyContent={true}>
      <Grid container spacing={1} 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems:'center'
          }}
        >
        <Grid item xs={12} md={6}>
          <Box sx={{
            p: 1,
            gap: 1
          }}>
            <Typography variant='invitation1'>
              Welcome, {guestString}! <br/>
            </Typography>
            <Typography variant="invitation2"> 
              Please join us to celebrate the engagement of Isabel Hadziomerovic & Daniel Meleras
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
            src="https://i.postimg.cc/fT6t77H9/DSC-3975.jpg"
            />
        </Grid>
      </Grid>
    </Container>
    <hr/>
    <Container align='center'>
      <Typography variant="h4" gutterBottom>
        Details
      </Typography>
      <Typography variant="body1">May 31, 2025</Typography>
      <Typography variant="body1">352 Acacia Avenue, Ottawa</Typography>
      <Typography variant="body1">Time: 3 PM</Typography>
      <Typography variant="body1">Dress Code: Business Casual</Typography>
    </Container>
    <hr/>
    </div>
    </Container>
  );
};

export default EngInv;