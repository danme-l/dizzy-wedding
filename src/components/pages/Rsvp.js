import React, {useState} from 'react';
import { Typography,Modal, Box, TextField, FormLabel, Button, Radio, RadioGroup, FormControl, FormControlLabel, Select, MenuItem, InputLabel } from '@mui/material';
import { useSubmitRSVP } from '../hooks/useSubmitRSVP';
import { useConfig } from "../../ConfigContext"

export default function Rsvp({ guests, refreshGuests }) {
  // states for the return array that gets posted
  const [attendance, setAttendance] = React.useState({});
  const [foodChoice, setFoodChoice] = React.useState({});
  const [plusOneName, setPlusOneName] = React.useState('');

  // states for the modal
  const [open, setOpen] = useState(false);
  const [rsvpArray, setRsvpArray] = useState([]);
  const [submitted, setSubmitted] = useState(false); // to handle the button

  const { submitRSVP, loading, error, success } = useSubmitRSVP();

  // get config
  const config = useConfig();
  const foodOptions = config.wedding.catering.foodOptions

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // this rsvp array gets posted to the API
    const newRsvpArray = guestsToRender
      .filter((g) => {
        if (!g.isPlusOne) return true;
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

    setRsvpArray(newRsvpArray);
    setOpen(true); // open the modal
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = async () => {
    await submitRSVP(rsvpArray);
    setSubmitted(true); 

    // reset state after 4 seconds 
    setTimeout(() => {
      setSubmitted(false);
      setOpen(false); 
      setRsvpArray([]); // clear the RSVP array if needed
    }, 3000);

    // after saving, re-fetch latest info from server 
    // to re-render the component (and show the cute little gif)
    await refreshGuests();
  };


  // make attendance flag
  const isAnyAttending = guests.some(guest => guest.attending !== null);

  // check for attendance, then return the cute little gif if so
  if (isAnyAttending) {
    return <Box sx={{
      justifyContent:'center',
      alignItems:'center',
      display: 'flex',
      flexDirection:'column'
    }}>
      <Typography variant='h5'>
        Looks like you've RSVP'ed! We can't wait to see you there.
      </Typography>
      <Typography variant='body1'>
        If you need to make any changes, please don't hesitate to contact the bride and groom.
      </Typography>
      <Box
        component="img"
        sx={{
          width: '40%',
          my: 3
        }}
        alt="Cute attendance gif"
        src="https://i.postimg.cc/3xgjGznB/doggies.gif"
        // source: https://giphy.com/gifs/wedding-bride-and-groom-h85sDYSl23vvoI3SiB
        />
    </Box>;
  }

  // check for rsvp weirdness
  const checkRSVP = (arrToCheck) => {
    return arrToCheck.some(
      e => e.attending & !e.food_choice
    )
  }

  return (
    <div>

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
                {/* drop down for food  */}
                <InputLabel id={`food-label-${g.id}`}>Food Choice</InputLabel>
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

    <Modal open={open} onClose={handleClose}>
        <Box sx={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          bgcolor: 'background.paper', 
          boxShadow: 24, 
          p: 4 
        }}>
          {submitted ? (
            // just been submitted, say thank you to our guests
            <Typography variant="h6" component="h2">
              Thanks!
            </Typography>
          ) :
          // if the check is true, someone's hit attending without picking their meal 
          checkRSVP(rsvpArray) ? 
          <Typography variant='body1'>
            Looks like someone hasn't made a food choice. Please check again!
          </Typography>
          :
          <div>
            <Typography variant="h6" component="h2">
              Does this look correct?
            </Typography>
            <Typography sx={{ mt: 2 }}>
              {rsvpArray.map((entry, index) => (
                <div>
                  <Typography variant='h3'>
                    {guestsToRender[index].first_name}
                  </Typography>
                  {entry.attending ? "Looking forward to seeing you!" : "Can't make it"}                
                </div>
              )
              )}
            </Typography>
            <Button onClick={handleConfirm} color="primary" variant="contained" sx={{ mt: 2 }}>
              Confirm
            </Button>
            <Button onClick={handleClose} color="secondary" variant="contained" sx={{ mt: 2, ml: 2 }}>
              Cancel
            </Button>
          </div>
          }
        </Box>
      </Modal>
    </div>
  );
}