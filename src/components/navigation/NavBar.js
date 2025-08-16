import {Box, Typography, AppBar, Toolbar, Button, Menu, MenuItem, Drawer, List, ListItemText } from '@mui/material';
import {IconButton, ListItem, ListItemButton, Divider, useTheme} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { styled, alpha } from '@mui/material/styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {BorderBottomRounded, BorderBottomSharp, ChevronRight, Menu as MenuIcon} from '@mui/icons-material';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';

const mainMenuArr = ["Home", "Details", "About Us", "RSVP"];
const aboutusMenuArr = ["Gallery", "About Us"];

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
          borderTop: '0.2em solid',
          borderTopColor: theme.palette.error.main,
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
  
const MenuButtonLarge = styled((props) => (
  <Button
    color='inherit'
        sx={{
          fontSize: "1.5em",
          fontStyle: 'italic',
          textTransform: 'none',
        }}
        {...props}/>
    ))(({ theme }) => ({
      "&:hover": {
        borderBottom: 'solid',
        borderBottomColor: theme.palette.info.main,
      }
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
  
  // **SECTION** small menu appears on phones 
function SmallMenu(theme, openMenu, setOpenMenu) {
  // open, close handlers
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
        bgcolor: 'inherit',
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
      {/* drawer header, containing the close button */}
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRight />
        </IconButton>
      </DrawerHeader>
      <Divider />

      {/* navigation list */}
      <List disablePadding>

        {/* ITEM 1: Home */}
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

          {/* ITEM 2: details */}
          <ListItem key='Details' disablePadding sx={{width: "100%"}}>
          <ListItemButton
              onClick={handleDrawerClose}
              component={Link}
              to="/details"
              sx={{
                fontSize: '1.5rem',
                fontStyle: 'italic',
                textTransform: 'none',
              }}>
              <ListItemText primary={'Details'} /> 
            </ListItemButton>
          </ListItem>
          <Divider/>

          {/* ITEM 3: about us */}
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

              {/* submenu, iterating over the details and creating links */}
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

          {/* ITEM 4: rsvp */}
          <ListItem key='RSVP' disablePadding>
            <ListItemButton 
              component={Link}
              onClick={handleDrawerClose}
              to="/rsvp"
              sx={{
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
  
  // **SECTION** large menu appears on large screens such as laptops, iPads
function LargeMenu(theme) {
  //const theme = useTheme();

  // state, handlers for the details dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // state, handlers for the about us dropdown
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);

  const handleClick2 = (event2) => {
    setAnchorEl2(event2.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    // Container for the nav buttons 
    <Box>

      {/* SECTION Home */}
      <MenuButtonLarge
        component={Link}
        to="/">
        Home
      </MenuButtonLarge>
      {/*Maybe do a hover brings on the menu as well?*/}

      {/* SECTION details button, including dropdown */}
      <MenuButtonLarge
        component={Link}
        to="/details">
        Details
      </MenuButtonLarge>

      {/* SECTION about us button, including dropdown */}
      <MenuButtonLarge
        aria-controls={open2 ? 'about-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open2 ? 'true' : undefined}
        disableElevation
        endIcon={<ArrowDropDownIcon />}
        onClick={handleClick2}
        >
        About Us
      </MenuButtonLarge>

      {/* SECTION about us menu */}
      <StyledMenu id="about-menu"
        MenuListProps={{ 'aria-labelledby': 'about-button',}}
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}>
        {/* iterate over the about us menu to create menu items */}
        {aboutusMenuArr.map((text, index) => (
          <MenuItem key={text} onClick={handleClose2}
            component={Link}
            to={'/' + text.replace(/\s/g, '').toLowerCase()}>
            {text}
          </MenuItem>
        ))}
      </StyledMenu>

      {/* SECTION rsvp button */}
      <MenuButtonLarge
        component={Link}
        to="/rsvp">
        RSVP
      </MenuButtonLarge>
    </Box>
  );
};

const NavBar = () => {
    const theme = useTheme();
    const [openMenu, setOpenMenu] = React.useState(false);
    
    // Call useMediaQuery unconditionally
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    // Ensure that the component always returns a valid JSX structure
    return (
        <AppBar
            position="sticky"
            color="black"
            sx={{
                boxShadow: 'none',
                opacity: '100%',
                bgcolor: theme.palette.background.default,
            }}
        >
            <Toolbar sx={{ justifyContent: 'space-between', m: '1em 0' }}>
                <Typography
                    variant="h1"
                    sx={{ fontWeight: 'bold' }}
                >
                    D & I
                </Typography>

                {/* Render menu based on screen size */}
                {isSmallScreen ? 
                    SmallMenuIcon(openMenu, setOpenMenu) : 
                    LargeMenu(theme)}
            </Toolbar>

            {/* Add drawer for small menu here */}
            {isSmallScreen && 
                SmallMenu(theme, openMenu, setOpenMenu)}
        </AppBar>
    );
};

export default NavBar;