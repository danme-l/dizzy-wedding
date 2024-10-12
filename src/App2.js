import {Box, Typography, AppBar, Toolbar, Button, Paper, Menu, MenuItem, Drawer, List, ListItemText } from '@mui/material';
import {IconButton, ListItem, ListItemButton, Divider} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { styled, alpha } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {BorderColor, ChevronRight, Menu as MenuIcon} from '@mui/icons-material';
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
import './global.css'

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
        marginTop: theme.spacing(.5),
        borderTop: '0.2em solid #0a2749',
        minWidth: 180,
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

function SmallMenuIcon(openMenu, setOpenMenu){
  //const [openMenu, setState] = React.useState(false);
  const handleDrawerClose = () => {
    setOpenMenu(false);
  };
  const handleDrawerOpen = () => {
    setOpenMenu(true);
  };
  
  return (
    <IconButton
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge="start"
      sx={[
        {
          mr: 0,
        },
        //state && { display: 'none' },
      ]}>
      <MenuIcon />
    </IconButton>
  );
};

function SmallMenu(theme, openMenu, setOpenMenu) {
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
      <List disablePadding>
          <ListItem key='Home' disablePadding>
            <ListItemButton
              onClick={handleDrawerClose}
              component={Link}
              to="/"
              sx={{
                fontSize: '1.5rem',
                fontStyle: 'italic',
                textTransform: 'none',
              }}>
              <ListItemText primary={'Home'} />
              
            </ListItemButton>
          </ListItem>
        <Divider/>
        <ListItem key='Details' disablePadding sx={{width: "100%"}}>
          <Accordion style={{m: 0, boxShadow: "none", width: "12em"}} square={true} disableGutters={true}
            sx={{'&:before': {
              display: 'none',
            }
            }}>
            <AccordionSummary
              expandIcon={<ArrowDropDownIcon />}
              aria-controls="panel1-content"
              id="panel1-header">
              <Typography
                disableElevation
                color="inherit"
                sx={{
                  fontStyle: 'italic',
                  textTransform: 'none',
                }}>
                  Details
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
              {detailsMenuArr.map((text, index) => (
              <Button key={text}
                component={Link}
                onClick={handleDrawerClose}
                fullWidth={true}
                sx={{
                  justifyContent: 'flex-start',}}
                to={'/' + text.replace(/\s/g, '').toLowerCase()}>
                {text}
              </Button>
              ))}
            </AccordionDetails>
          </Accordion>
        </ListItem>
      <Divider/>
          <ListItem key='AboutUs' disablePadding>
            <Accordion style={{m: 0, boxShadow: "none", width: "12em"}} square={true} disableGutters={true}
              sx={{'&:before': {
                display: 'none',
              }}}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header">
                <Typography
                  disableElevation
                  color="inherit"
                  sx={{
                    fontStyle: 'italic',
                    textTransform: 'none',
                  }}>
                  About Us
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {aboutusMenuArr.map((text, index) => (
                  <Button key={text}
                    component={Link}
                    onClick={handleDrawerClose}
                    fullWidth={true}
                    sx={{
                      justifyContent: 'flex-start',}}
                    to={'/' + text.replace(/\s/g, '').toLowerCase()}>
                    {text}
                  </Button>
                ))}
              </AccordionDetails>
            </Accordion>
          </ListItem>

      <Divider/>
          <ListItem key='RSVP' disablePadding>
            <ListItemButton 
              component={Link}
              onClick={handleDrawerClose}
              to="/rsvp"
              sx={{
                backgroundColor: theme.palette.background.secondary,
                fontStyle: 'italic',
                textTransform: 'none',
              }}>
              <ListItemText primary={'RSVP'} />
            </ListItemButton>
          </ListItem>
      </List>
    </Drawer>
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
        color="inherit"
        sx={{
          fontSize: "1.5em",
          fontStyle: 'italic',
          textTransform: 'none',
        }}>
        Home
      </Button>
      {/*Maybe do a hover brings on the menu as well?*/}
      <Button
        aria-controls={open ? 'details-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        endIcon={<ArrowDropDownIcon />}
        disableElevation
        onClick={handleClick}
        color="inherit"
        sx={{
          fontSize: "1.5em",
          fontStyle: 'italic',
          textTransform: 'none',
        }}
      >
      Details
      </Button>
      <Button
        aria-controls={open2 ? 'about-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        disableElevation
        endIcon={<ArrowDropDownIcon />}
        onClick={handleClick2}
        color="inherit"
        sx={{
          fontSize: "1.5em",
          fontStyle: 'italic',
          textTransform: 'none',
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
          <MenuItem key={text} onClick={handleClose}
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
          <MenuItem key={text} onClick={handleClose2}
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
          fontSize: "1.5em",
          fontStyle: 'italic',
          textTransform: 'none',
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
          color="black"
          sx={{
            boxShadow: 'none', 
            p: '1em 0',
            backgroundImage: 'url(static/images/limewash.jpg)',

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
              SmallMenuIcon(openMenu, setOpenMenu) : LargeMenu(theme)}
            
          </Toolbar>
        </AppBar>
        {/* add drawer for small menu here*/}
        {useMediaQuery(theme.breakpoints.down('md')) && 
          SmallMenu(theme, openMenu, setOpenMenu)}
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
