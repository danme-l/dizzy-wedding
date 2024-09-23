import { Fab, Box, Typography, AppBar, Toolbar, Button, Paper } from '@mui/material';
import { Home as HomeIcon, Info as DetailsIcon, Photo as GalleryIcon, EventAvailable as RsvpIcon } from '@mui/icons-material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import Gallery from './components/Gallery';
import Rsvp from './components/Rsvp';
import { useTheme } from '@mui/material/styles';

const App = () => {
  const theme = useTheme();

  return (
    <Router>
      <Box>

        {/* floating circular buttons as navigation ????*/}
        {/* <Box
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
        </Box> */}

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
                color="inherit"
                component={Link}
                to="/details"
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
              <Button
                color="inherit"
                component={Link}
                to="/gallery"
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
                Gallery
              </Button>
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
            <Route path="/rsvp" element={<Rsvp />} />
          </Routes>
        </Paper>
      </Box>
    </Router>
  );
};

export default App;
