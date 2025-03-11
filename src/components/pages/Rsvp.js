import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';

const Rsvp = ({ guests }) => {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('');

  console.log(guests.map(guest => `${guest.first_name} ${guest.last_name}`))

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! Your RSVP has been received.`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        RSVP
      </Typography>

      {/* TODO form control */}
      <form onSubmit={handleSubmit}>
        {guests.map((g) => (
          <Box>
            <Typography variant='h2' sx={{ m:2}}>
              {g.first_name}
            </Typography>
            <Box  sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

              <TextField
                label="Attendance"
                variant="outlined"
                value={attending}
                onChange={(e) => setAttending(e.target.value)}
                required
                sx={{width: 1/3}}
                />
              <FormControlLabel control={<Checkbox color="secondary" />} label="I'm Coming"></FormControlLabel>
              <FormControlLabel control={<Checkbox color="secondary" />} label="Plus One"></FormControlLabel>
            </Box>
            <hr/>
          </Box>
        ))}

        <Box sx={{
          display: "flex",
          flexDirection: "column"
        }}>
          {/*TODO: add required textfield for plus one if checked*/}
          
          <Button type="submit" variant="contained" color="primary" sx={{m: "0% auto"}}>
            Submit
          </Button>
        </Box>
      </form>
    </Container>
  );
};

export default Rsvp;
