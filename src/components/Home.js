import {useState, useEffect} from 'react';
import FAQ from './pages/FAQ';
import { Box, Grid, Typography, Link, Divider, Container, Button} from '@mui/material';
import CardCarousel from './utils/CardCarousel';
import { useConfig } from '../ConfigContext';


const Home = ({ guests, handleSignOut }) => {
  const [guestString, setGuestString] = useState('');

  const config = useConfig();
  

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
  const weddingDate = new Date(config.wedding.date);
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
              The Marriage of {config.groom.name} & {config.bride.name}
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
            src={config.couplePhotoLinks[0]}
            />
        </Grid>
      </Grid>
    </Container>
    <Divider />
    <Container align='center'>
      <Typography variant="h4" gutterBottom>
        Wedding Details
      </Typography>
      <Typography variant="body1">{weddingDate.toLocaleDateString('en-CA', dateOptions)}</Typography>
      <Typography variant="body1">
        <Link href={config.wedding.venue.link}>{config.wedding.venue.name}</Link>
      </Typography>
      <Typography variant="body1">
        {config.wedding.venue.address}
      </Typography>
      <Typography variant="body1">
        Find other important information on the <Link to='details'>details</Link> page.
      </Typography>
          <Box
            component="img"
            sx={{
              width: '100%',
              m: 2
            }}
            alt="Venue"
            src={config.wedding.venue.photoLinks[0]}
            />
    </Container>
    <Divider />
    <Container align='center'>
      <Typography variant="h4" gutterBottom>
        About {config.wedding.venue.city}
      </Typography>
      <Typography variant="body1">
        {config.wedding.venue.venueNotes.cityNotes}
      </Typography>
      <Typography variant="h3" sx={{my: 2}}>
        Things to do
      </Typography>
      <CardCarousel />
    <Divider />
    <FAQ />
    <Typography variant='body1'>
      Are you not {guestString}? Please help us out! Contact the bride and groom and tell us who the app thinks you are.
    </Typography>
    <Button variant="contained" onClick={handleSignOut}>Not you?</Button>
    </Container>
    </div>
  );
};

export default Home;