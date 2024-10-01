import { Fab, Box, Typography, AppBar, Toolbar, Button, Paper, Menu, MenuItem } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { Home as HomeIcon, Info as DetailsIcon, Photo as GalleryIcon, EventAvailable as RsvpIcon } from '@mui/icons-material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React from 'react';
import Home from './components/Home';
import Details from './components/Details';
import Gallery from './components/Gallery';
import Schedule from './components/Schedule';
import FAQ from './components/FAQ';
import Rsvp from './components/Rsvp';
import OurStory from './components/OurStory';
import AboutUs from './components/AboutUs';
import { useTheme } from '@mui/material/styles';


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: 'rgb(55, 65, 81)',
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
    ...theme.applyStyles('dark', {
      color: theme.palette.grey[300],
    }),
  },
}));

const App = () => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
      <Box>

        {/* floating circular buttons as navigation ????*/}
        {/*</Box><Box
          sx={{
            position: 'fixed',
            top: '6%',
            right: '20px',
            padding: '20px',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            zIndex: 10,
            overflow: 'hidden',
          }}
        >
          <Fab
            color="primary"
            component={Link}
            to="/"
            sx={{
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.2)',
                backgroundColor: 'secondary.main',
              },
            }}
          >
            <HomeIcon />
          </Fab>
          <Fab
            color="primary"
            component={Link}
            to="/details"
            sx={{
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.2)',
                backgroundColor: 'secondary.main',
              },
            }}
          >
            <DetailsIcon />
          </Fab>
          <Fab
            color="primary"
            component={Link}
            to="/gallery"
            sx={{
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.2)',
                backgroundColor: 'secondary.main',
              },
            }}
          >
            <GalleryIcon />
          </Fab>
          <Fab
            color="primary"
            component={Link}
            to="/rsvp"
            sx={{
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.2)',
                backgroundColor: 'secondary.main',
              },
            }}
          >
            <RsvpIcon />
          </Fab>
        </Box>*/}

        {/* Traditional nav bar as navigation ??? */}
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none', 
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h1"
              sx={{ fontWeight: 'bold' }}
            >
              D & I
            </Typography>
            {/* Links on the right */}
            <Box>
              <Button
                component={Link}
                to="/"
                sx={{
                  color: 'black',
                  fontSize: '1.5rem',
                  fontStyle: 'italic',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main, // Highlight on hover
                  },
                }}
              >
                Home
              </Button>
              <Button
              aria-controls={open ? 'details-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              disableElevation
              onClick={handleClick}
                color="inherit"
                sx={{
                  color: 'black',
                  fontSize: '1.5rem',
                  fontStyle: 'italic',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main, // Highlight on hover
                  },
                }}
              >
                Details
              </Button>
              <StyledMenu id="details-menu"
                MenuListProps={{ 'aria-labelledby': 'details-button',}}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                <MenuItem onClick={handleClose} disableRipple
                  component={Link}
                  to="/details">
                  Details Orig
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple
                  component={Link}
                  to="/schedule">
                  Schedule
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple
                  component={Link}
                  to="/faq">
                  FAQ
                </MenuItem>
              </StyledMenu>
              <Button
                aria-controls={open ? 'about-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                disableElevation
                onClick={handleClick}
                  color="inherit"
                  sx={{
                    color: 'black',
                    fontSize: '1.5rem',
                    fontStyle: 'italic',
                    textTransform: 'none',
                    '&:hover': {
                      backgroundColor: theme.palette.primary.main, // Highlight on hover
                    },
                  }}
              >
                About Us
              </Button>
              <StyledMenu id="about-menu"
                MenuListProps={{ 'aria-labelledby': 'about-button',}}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                <MenuItem onClick={handleClose} disableRipple
                  component={Link}
                  to="/ourstory">
                  Our Story
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple
                  component={Link}
                  to="/gallery">
                  Gallery
                  </MenuItem>
                  <MenuItem onClick={handleClose} disableRipple
                  component={Link}
                  to="/aboutus">
                  About Us
                  </MenuItem>
                </StyledMenu>
              <Button
                color="inherit"
                component={Link}
                to="/rsvp"
                sx={{
                  color: 'black',
                  fontSize: '1.5rem',
                  fontStyle: 'italic',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: theme.palette.primary.main, // Highlight on hover
                  },
                }}
              >
                RSVP
              </Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Content */}
        <Paper elevation={3} sx={{m: 3, p: 2}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/rsvp" element={<Rsvp />} />
            <Route path="/faq" element={<FAQ />} />s
          </Routes>
        </Paper>
      </Box>
    </Router>
  );
};

export default App;
