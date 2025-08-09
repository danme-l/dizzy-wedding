import React from 'react';
import { Container, Typography } from '@mui/material';
import { Box, Grid, TextField, Button} from '@mui/material';

const SaveTheDate = ({guests}) => {

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
      <div id="card">
      <Container justifyContent={true}>

      <Grid container spacing={1} 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems:'center'
          }}
        >
        <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
          <Typography variant='h1'>
            Save the Date!
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{
            p: 1,
            gap: 1
          }}>
            <Typography variant='invitation1'>
              Welcome, {guestString}! <br/>
            </Typography>
            <Typography variant="invitation2"> 
              Please save the date for the Wedding of Isabel Hadziomerovic & Daniel Meleras
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
      <Typography variant="body1">May 2, 2026</Typography>
      <Typography variant="body1">La Toundra, Montreal, Quebec</Typography>
      <Box sx={{
        width: '55%'
      }}>
        {/* <Typography variant="body1">Check back here for more details.</Typography> */}
      </Box>

    </Container>
    <hr/>
    <Container>
      {/* https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.parcjeandrapeau.com%2Fmedias%2Fimages%2Fheader%2Fespaces-locatifs-la-toundra-salle-location-mariages-evenements-corporatifs-parc-jean-drapeau-montreal-1920x700.jpg%3Fv2%3Dtrue&f=1&nofb=1&ipt=0f54d5135847ec4c4cdef900135433025f8df59e8f83b471c0aad85be7c9a04b */}
                <Box
            component="img"
            sx={{
              width: '100%',
              m: 0
            }}
            alt="Venue"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.parcjeandrapeau.com%2Fmedias%2Fimages%2Fheader%2Fespaces-locatifs-la-toundra-salle-location-mariages-evenements-corporatifs-parc-jean-drapeau-montreal-1920x700.jpg%3Fv2%3Dtrue&f=1&nofb=1&ipt=0f54d5135847ec4c4cdef900135433025f8df59e8f83b471c0aad85be7c9a04b"
            />
    </Container>
    </div>
    </Container>
  );
};

export default SaveTheDate;