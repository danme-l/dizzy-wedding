import React, { useState } from 'react';
import { Container, Typography, Box, TextField, FormLabel, Button, Radio, RadioGroup, FormControl, FormControlLabel, Select, MenuItem, InputLabel } from '@mui/material';


              {/* <TextField
                label="Attendance"
                variant="outlined"
                value={attending}
                onChange={(e) => setAttending(e.target.value)}
                required
                sx={{width: 1/3}}
                /> */}

export default function Rsvp({ guests }) {
  // console.log(guests)
  const [attendance, setAttendance] = React.useState({});
  const [foodChoice, setFoodChoice] = React.useState({});
  const [plusOneName, setPlusOneName] = React.useState('');

const guestsToRender = (() => {
  if (guests.length === 1) {
    if (guests[0].plus_one) {
      // plus_one flag true: render main + synthetic plus one
      return [guests[0], { id: 'plus_one', isPlusOne: true }];
    } else {
      // just main guest, no plus one
      return [guests[0]];
    }
  } else if (guests.length === 2) {
    // render both real guests only (no synthetic plus one)
    return guests;
  } else {
    return [];
  }
})();

  const foodOptions = [
    { value: 'chicken', label: 'Chicken Supreme' },
    { value: 'beef', label: 'Wine Braised Lamb Shank' },
    { value: 'vegetarian', label: 'Eggplant Parmesan' },
  ];

  console.log(guestsToRender)

  const handleSubmit = (e) => {
    e.preventDefault();

    const rsvpArray = guestsToRender
      .filter((g) => {
        if (!g.isPlusOne) return true;
        // only include plus ones if attending
        return attendance['plus_one'] === '1';
      })
      .map((g) => ({
        guest_id: g.isPlusOne ? null : g.id,           // real guests keep their guest_id
        invited_id: g.isPlusOne ? guests[0].id : null, // plus one links to invited guest
        food_choice: g.isPlusOne ? foodChoice['plus_one'] : foodChoice[g.id],
        plus_one_name: g.isPlusOne ? plusOneName : null,
        attending: g.isPlusOne
          ? attendance['plus_one'] === '1'
          : attendance[g.id] === '1'
      }));

    console.log(rsvpArray);
    // TODO push to DB here
};

  return (
    <form onSubmit={handleSubmit}>
      {guestsToRender.map((g) => (
        <Box key={g.id} sx={{ mb: 3 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              maxWidth: { xs: '100%', md: '60%' },
              gap: 3,
            }}
          >
            <FormControl>
              <FormLabel id={`label-attendance-${g.id}`}>
                {g.isPlusOne ? (
                  // the text field renders if it's for a a plus one
                  <TextField
                    label="Plus One Name"
                    value={plusOneName}
                    onChange={(e) => setPlusOneName(e.target.value)}
                    size="small"
                    sx={{ minWidth: 200 }}
                    disabled={attendance['plus_one'] === '0'}
                    required={attendance['plus_one'] === '1'}
                  />
                ) : (
                  // otherwise just the name
                  `${g.first_name} ${g.last_name}`
                )}
              </FormLabel>

              {/* radio buttons for attendance */}
              <RadioGroup
                aria-labelledby={`label-attendance-${g.id}`} 
                name={`attendance-${g.id}`}                  // unique name per guest to avoid radio group conflicts
                row
                value={
                  g.isPlusOne
                    ? attendance['plus_one'] || ''            // for plus one, use attendance state at key "plus_one"
                    : attendance[g.id] || ''                   // for invited guest, use attendance state keyed by guest ID
                }
                onChange={(e) => {
                  if (g.isPlusOne) {
                    // if this is the plus one, store attendance under the "plus_one" key
                    setAttendance((prev) => ({
                      ...prev,                                 // keep existing attendance values
                      ['plus_one']: e.target.value,            // update plus one's attendance (1 = attending, 0 = not attending)
                    }));
                  } else {
                    // if this is the invited guest, store attendance under their guest ID
                    setAttendance((prev) => ({
                      ...prev,                                 // keep existing attendance values
                      [g.id]: e.target.value,                  // update invited guest's attendance
                    }));
                  }
                }}
              >


                <FormControlLabel value="1" control={<Radio />} label="Attending!" />
                <FormControlLabel value="0" control={<Radio />} label={g.isPlusOne ? "No Plus One" : "Won't be able to make it"} />
              </RadioGroup>
            </FormControl>

            <FormControl sx={{ minWidth: 220 }}>
              <InputLabel id={`food-label-${g.id}`}>Food Choice</InputLabel>
              {/* drop down for food  */}
              <Select
                labelId={`food-label-${g.id}`}
                id={`food-select-${g.id}`}                    // unique ID for this select
                disabled={
                  g.isPlusOne
                    ? attendance['plus_one'] === '0'          // disable plus one's food choice if they are not attending
                    : attendance[g.id] === '0'                 // disable invited guest's food choice if they are not attending
                }
                value={
                  g.isPlusOne
                    ? foodChoice['plus_one'] || ''             // for plus one, use food choice stored at "plus_one"
                    : foodChoice[g.id] || ''                    // for invited guest, use food choice stored at guest ID
                }
                onChange={(e) => {
                  if (g.isPlusOne) {
                    // if this is the plus one, store food choice under "plus_one"
                    setFoodChoice((prev) => ({
                      ...prev,                                 // keep existing food choices
                      ['plus_one']: e.target.value,            // update plus one's food choice
                    }));
                  } else {
                    // if this is the invited guest, store food choice under their guest ID
                    setFoodChoice((prev) => ({
                      ...prev,                                 // keep existing food choices
                      [g.id]: e.target.value,                  // update invited guest's food choice
                    }));
                  }
                }}
              >


                {foodOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <hr />
        </Box>
      ))}

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Button type="submit" variant="contained" color="primary" sx={{ m: '0% auto' }}>
          Submit
        </Button>
      </Box>
    </form>
  );
}