import React, {useState} from 'react';
import { Box, Grid, Typography, Paper, TextField, Button, Container} from '@mui/material';

// temporary
const validCodes = {
  '1': 'Laura Clark and Jeff Meleras, Parents of the Groom',
  '2': 'Claudine Michaud and Adnan Hadziomerovic, Parents of the Bride',
  '3': 'Tommy Wallis',
  '4': 'Lara Kercoglu',
  '5': 'Caroline Meleras',
  '6': 'Jacob Meleras, Best Man',
  '7': 'Ariane Hadziomerovic, Maid of Honour',
  '8': 'Alexa Hadziomerovic, Maid of Honour',
};


const Home = () => {
  // **SECTION** guest validation
  // to be hooked up to a database eventually 
  const [code, setCode] = useState(0)
  const [name, setName] = useState('');
  const [isValid, setIsValid] = useState(false);

  // gets the code out of the textbox
  const handleInputChange = (event) => {
    setCode(event.target.value);
  };

  // sets the user code as the State
  // feature desire: the code will query a db where there will be a guest-code mapping 
  // from there, 
  const handleSubmit = () => {
    if (validCodes[code]) {
      setName(validCodes[code]);
    } else {
      alert('Invalid code. Please try again.');
    }
  };
  

  // **SECTION** Date Stuff
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
    <Container>
      {!name ? (
        <Box>
          <Typography variant="h4" gutterBottom>
            Enter Your Code
          </Typography>
          <Box  sx={{display:'flex', p:2, gap: 2}}>
            <TextField
              label="Invite Code"
              variant="outlined"
              value={code}
              onChange={handleInputChange}
              />
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Box>
      ) :  
      (<Grid container spacing={1}>
        <Grid item xs={12} md={6}>
          <Box sx={{
            p: 1,
            gap: 1
          }}>
            <Typography variant='h2'>
              Welcome, {name}
            </Typography>
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
      )}
    </Container>
  );
};

export default Home;