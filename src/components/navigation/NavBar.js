import {Box, Typography, AppBar, Toolbar, Button, Menu, MenuItem, Drawer, List, ListItemText } from '@mui/material';
import {IconButton, ListItem, ListItemButton, Divider, useTheme} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {ChevronRight, Menu as MenuIcon} from '@mui/icons-material';
import { BrowserRouter as Router, Route, Routes, Link, useParams} from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import { StyledMenu, DrawerHeader, MenuButtonLarge, SmallMenuIcon } from './NavUtils';

const mainMenuArr = ["Home", "Details", "About Us", "RSVP"];
const aboutusMenuArr = ["Our Story", "Gallery", "About Us"];

  
  // **SECTION** small menu appears on phones 
function SmallMenu(theme, openMenu, setOpenMenu, withToken) {
  const handleDrawerClose = () => setOpenMenu(false);

  return (
    <Drawer /* ... */>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRight />
        </IconButton>
      </DrawerHeader>
      <Divider />

      <List disablePadding>
        {/* Home */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleDrawerClose}
            component={Link}
            to={withToken('')}
          >
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <Divider />

        {/* Schedule */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleDrawerClose}
            component={Link}
            to={withToken('schedule')}
          >
            <ListItemText primary="Schedule" />
          </ListItemButton>
        </ListItem>
        <Divider />

        {/* About Us submenu */}
        <Accordion /* ... */>
          <AccordionSummary /* ... */>
            <Typography sx={{ fontStyle: 'italic' }}>About Us</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {aboutusMenuArr.map((text) => (
              <Button
                key={text}
                component={Link}
                onClick={handleDrawerClose}
                to={withToken(text.replace(/\s/g, '').toLowerCase())}
              >
                {text}
              </Button>
            ))}
          </AccordionDetails>
        </Accordion>
        <Divider />

        {/* RSVP */}
        <ListItem disablePadding>
          <ListItemButton
            component={Link}
            onClick={handleDrawerClose}
            to={withToken('rsvp')}
          >
            <ListItemText primary="RSVP" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
}


  // **SECTION** large menu appears on large screens such as laptops, iPads
function LargeMenu(theme, withToken) {
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (e) => setAnchorEl2(e.currentTarget);
  const handleClose2 = () => setAnchorEl2(null);

  return (
    <Box>
      {/* Home */}
      <MenuButtonLarge component={Link} to={withToken('')}>
        Home
      </MenuButtonLarge>

      {/* Schedule */}
      <MenuButtonLarge component={Link} to={withToken('schedule')}>
        Schedule
      </MenuButtonLarge>

      {/* About Us */}
      <MenuButtonLarge
        endIcon={<ArrowDropDownIcon />}
        onClick={handleClick2}
      >
        About Us
      </MenuButtonLarge>
      <StyledMenu
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
      >
        {aboutusMenuArr.map((text) => (
          <MenuItem
            key={text}
            onClick={handleClose2}
            component={Link}
            to={withToken(text.replace(/\s/g, '').toLowerCase())}
          >
            {text}
          </MenuItem>
        ))}
      </StyledMenu>

      {/* RSVP */}
      <MenuButtonLarge component={Link} to={withToken('rsvp')}>
        RSVP
      </MenuButtonLarge>
    </Box>
  );
}

const NavBar = ({ Link }) => {
  const theme = useTheme();
  const [openMenu, setOpenMenu] = React.useState(false);

  const withToken = (path) => path; // no token prefix here; LinkWithToken adds it

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <AppBar position="sticky" color="black" sx={{ boxShadow: 'none', opacity: '100%', bgcolor: theme.palette.background.default }}>
      <Toolbar sx={{ justifyContent: 'space-between', m: '1em 0' }}>
        <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
          D & I
        </Typography>

        {isMobile
          ? SmallMenu(theme, openMenu, setOpenMenu, withToken, Link)
          : LargeMenu(theme, withToken, Link)}
      </Toolbar>

      {isMobile && SmallMenu(theme, openMenu, setOpenMenu, withToken, Link)}
    </AppBar>
  );
};

export default NavBar;