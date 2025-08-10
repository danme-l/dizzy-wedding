import React, {useState, useEffect} from 'react';
import FAQ from './pages/FAQ';
import ThingToDoCard from './utils/ThingToDoCard';
import { Box, Grid, Typography, TextField, Button, Container, Link, useTheme} from '@mui/material';
import CardCarousel from './utils/CardCarousel';


const Home = ({ guests }) => {
  const [guestString, setGuestString] = useState('');
  const theme = useTheme();
  

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
  const weddingDate = new Date('02 May 2026 12:00 EST');
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
    <div id="card"> 
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
            src="https://i.postimg.cc/fT6t77H9/DSC-3975.jpg"
            />
        </Grid>
      </Grid>
    </Container>
    <hr/>
    <Container align='center'>
      <Typography variant="h4" gutterBottom>
        Wedding Details
      </Typography>
      <Typography variant="body1">Date: {weddingDate.toLocaleDateString('en-CA', dateOptions)}</Typography>
      <Typography variant="body1">
        Location: <Link href="https://maps.app.goo.gl/PJhCz1GjBgRXTbHWA">La Toundra, Montreal</Link>
      </Typography>
      <Typography variant="body1">Time: Half Past Three</Typography>
      <Container>
      {/* https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.parcjeandrapeau.com%2Fmedias%2Fimages%2Fheader%2Fespaces-locatifs-la-toundra-salle-location-mariages-evenements-corporatifs-parc-jean-drapeau-montreal-1920x700.jpg%3Fv2%3Dtrue&f=1&nofb=1&ipt=0f54d5135847ec4c4cdef900135433025f8df59e8f83b471c0aad85be7c9a04b */}
                <Box
            component="img"
            sx={{
              width: '100%',
              m: 2
            }}
            alt="Venue"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.parcjeandrapeau.com%2Fmedias%2Fimages%2Fheader%2Fespaces-locatifs-la-toundra-salle-location-mariages-evenements-corporatifs-parc-jean-drapeau-montreal-1920x700.jpg%3Fv2%3Dtrue&f=1&nofb=1&ipt=0f54d5135847ec4c4cdef900135433025f8df59e8f83b471c0aad85be7c9a04b"
            />
    </Container>
    </Container>
    <hr/>
    <Container align='center'>
      <Typography variant="h4" gutterBottom>
        About Montreal
      </Typography>
      <Typography variant="body1">
        Dan and Izzy became friends in Montreal in late 2018/early 2019. 
        It is a city that remains near and dear to their hearts.
      </Typography>
      <Typography variant="h3" sx={{my: 2}}>
        Things to do
      </Typography>
      <CardCarousel />

    </Container>
    <hr/>
    <FAQ dateCalculate={dateCalculate} />
    </div>
  );
};

export default Home;