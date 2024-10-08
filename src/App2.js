import { Box, Typography, AppBar, Toolbar, Button, Paper, Menu, MenuItem, Drawer, List, ListItemText } from '@mui/material';
import {IconButton, ListItem, ListItemButton, Divider} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { styled, alpha } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Home as HomeIcon, Info as DetailsIcon, Photo as GalleryIcon, EventAvailable as RsvpIcon, ChevronLeft, ChevronRight, Menu as MenuIcon} from '@mui/icons-material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
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

const mainMenuArr = ["Home", "Details", "About Us", "RSVP"];
const detailsMenuArr = ["Details", "Schedule", "FAQ"];
const aboutusMenuArr = ["Our Story", "Gallery", "About Us"];


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

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function SmallMenuIcon2(openMenu, setOpenMenu){
  //const [openMenu, setState] = React.useState(false);
  const handleDrawerClose = () => {
    setOpenMenu(false);
  };
  const handleDrawerOpen = () => {
    setOpenMenu(true);
  };
  
  return (
    <IconButton
            //color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 0,
              },
              //state && { display: 'none' },
            ]}
          >
            <MenuIcon />
          </IconButton>
  );
};

function SmallMenu2(theme, openMenu, setOpenMenu) {
  const handleDrawerClose = () => {
    setOpenMenu(false);
  };
  const handleDrawerOpen = () => {
    setOpenMenu(true);
  };

  return (
    <Drawer
      sx={{
        flexShrink: 0,
        //width: '100',
        '& .MuiDrawer-paper': {
          //width: '100',
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="right"
      open={openMenu}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRight />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
          <ListItem key='Home' disablePadding>
            <ListItemButton
              component={Link}
              to="/"
              sx={{
                fontSize: '1.5rem',
                fontStyle: 'italic',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: theme.palette.primary.main, // Highlight on hover
                },
              }}>
              <ListItemText primary={'Home'} />
              
            </ListItemButton>
          </ListItem>
      </List>
      <Divider/>
      <List>
          <ListItem key='Details' disablePadding>
            <ListItemButton
              component={Link}
              to="/details"
              sx={{
                fontSize: '1.5rem',
                fontStyle: 'italic',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: theme.palette.primary.main, // Highlight on hover
                },
              }}>
              <ListItemText primary={'Details'} />
              <ChevronRight/>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider/>
      <List>
          <ListItem key='AboutUs' disablePadding>
            <ListItemButton
            component={Link}
            to="/aboutus"
            sx={{
              fontSize: '1.5rem',
              fontStyle: 'italic',
              textTransform: 'none',
              '&:hover': {
                backgroundColor: theme.palette.primary.main, // Highlight on hover
              },
            }}>
              <ListItemText primary={'About Us'} />
              <ChevronRight/>
            </ListItemButton>
          </ListItem>
      </List>
      <Divider/>
      <List>
          <ListItem key='RSVP' disablePadding>
            <ListItemButton 
              component={Link}
              to="/rsvp"
              sx={{
                backgroundColor: theme.palette.background.default,
                fontSize: '1.5rem',
                fontStyle: 'italic',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: theme.palette.primary.main, // Highlight on hover
                },
              }}>
              <ListItemText primary={'RSVP'} />
            </ListItemButton>
          </ListItem>
      </List>
    </Drawer>
  );
};

function SmallMenu(theme){
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        aria-controls={open ? 'main-menu' : undefined}
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
        <MenuIcon />
      </Button>
      <StyledMenu
        id="main-menu"
        MenuListProps={{ 'aria-labelledby': 'main-button',}}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
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
      <Accordion style={{m: 0, boxShadow: "none",}} square={true} disableGutters={true}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{m: '0',}}
        >
          <Typography
        disableElevation
        color="inherit"
        sx={{
          color: 'black',
          fontSize: '1.5rem',
          fontStyle: 'italic',
          textTransform: 'none',
          m: '0',
        }}
      >
      Details
      </Typography>
        </AccordionSummary>
        <AccordionDetails>
        {detailsMenuArr.map((text, index) => (
          <Button key={text} disableRipple
          component={Link}
          to={'/' + text.replace(/\s/g, '').toLowerCase()}>
          {text}
        </Button>
        ))}
        </AccordionDetails>
      </Accordion>
      <Accordion style={{m:0, boxShadow: "none",}} square={true} disableGutters={true}>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
        disableElevation
        color="inherit"
        sx={{
          color: 'black',
          fontSize: '1.5rem',
          fontStyle: 'italic',
          textTransform: 'none',
        }}
        >
        About Us
      </Typography>
        </AccordionSummary>
        <AccordionDetails>
        {aboutusMenuArr.map((text, index) => (
          <Button key={text} disableRipple
            component={Link}
            to={'/' + text.replace(/\s/g, '').toLowerCase()}>
            {text}
          </Button>
        ))}
        </AccordionDetails>
      </Accordion>
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
        }}>
        RSVP
      </Button>
      </StyledMenu>
    </Box>
  );
};

function LargeMenu(theme) {
  //const theme = useTheme();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event2) => {
    setAnchorEl2(event2.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
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
      <Button
        aria-controls={open2 ? 'about-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        disableElevation
        onClick={handleClick2}
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
      <StyledMenu id="details-menu"
        MenuListProps={{ 'aria-labelledby': 'details-button',}}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}>
        {detailsMenuArr.map((text, index) => (
          <MenuItem key={text} onClick={handleClose} disableRipple
          component={Link}
          to={'/' + text.replace(/\s/g, '').toLowerCase()}>
          {text}
        </MenuItem>
        ))}
      </StyledMenu>
      <StyledMenu id="about-menu"
        MenuListProps={{ 'aria-labelledby': 'about-button',}}
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}>
        {aboutusMenuArr.map((text, index) => (
          <MenuItem key={text} onClick={handleClose2} disableRipple
            component={Link}
            to={'/' + text.replace(/\s/g, '').toLowerCase()}>
            {text}
          </MenuItem>
        ))}
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
        }}>
        RSVP
      </Button>
    </Box>
  );
};

const App = () => {
  const theme = useTheme();
  const [openMenu, setOpenMenu] = React.useState(false);


  return (
    <Router>
      <Box>

        {/* SECTION Nav bar */}
        <AppBar
          position="sticky"
          sx={{
            backgroundColor: 'transparent',
            boxShadow: 'none', 
            [theme.breakpoints.down("sm")]: {
              fontSize: "2rem",
              m: '0',
            },
          }}
        >
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Typography
              variant="h1"
              sx={{ fontWeight: 'bold', }}
            >
              D & I
            </Typography>
            {/* Links on the right */}
            {/*Use media query to determine if this should show up */}
            {useMediaQuery(theme.breakpoints.down('md')) ? 
              SmallMenu(theme) : LargeMenu(theme)}
            
          </Toolbar>
        </AppBar>
        {/* add drawer for small menu here*/}
        {/*useMediaQuery(theme.breakpoints.down('md')) && 
          SmallMenu(theme, openMenu, setOpenMenu)*/}

        {/* SECTION Content */}
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
