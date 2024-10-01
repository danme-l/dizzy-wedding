import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

const Rsvp = () => {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! Your RSVP has been received.`);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Your Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          select
          label="Will you attend?"
          variant="outlined"
          fullWidth
          margin="normal"
          value={attending}
          onChange={(e) => setAttending(e.target.value)}
          required
        >
          <option value="yes">Let's Go</option>
          <option value="no">I hate you guys</option>
        </TextField>
        
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Rsvp;
