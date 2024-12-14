import React, { useState } from 'react';
import './navbar.css';
import { AppBar, Box, Toolbar, Typography, Button, InputBase, IconButton, Paper, useMediaQuery, useTheme, Menu, MenuItem } from '@mui/material';
import logo from '../assist/logo (1).svg'; // Replace with your logo path
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MenuIcon from '@mui/icons-material/Menu';
import Cartlist from './Cartlist';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#4db6ff', boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          {isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
              <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
                <MenuIcon onClick={toggleDrawer(true)}/>
              </IconButton>
              <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                <img src={logo} alt="Logo" style={{ height: '25px' }} />
              </Typography>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose}>Home</MenuItem>
                <MenuItem onClick={handleMenuClose}>About</MenuItem>
                <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
              </Menu>
              <Paper component="form" sx={{ mx: '4px', p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%' }}>
                <InputBase sx={{ ml: 1, flex: 1, fontSize: '18px' }} placeholder="Search..." />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                  <KeyboardVoiceIcon className="text-sky-400" />
                </IconButton>
              </Paper>
            </Box>
          ) : (
            <>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
                  <MenuIcon sx={{ marginLeft: '10px' }} onClick={toggleDrawer(true)}/>
                </IconButton>

                <Typography variant="h4" component="div" sx={{ display: 'flex', alignItems: 'center' }}>
                  <img src={logo} alt="Logo" style={{ height: '40px' }} />
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Paper component="form" sx={{ mx: '4px', p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                  <InputBase sx={{ ml: 1, flex: 1, fontSize: '16px' }} placeholder="Search..." />
                  <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <KeyboardVoiceIcon className="text-sky-400" />
                  </IconButton>
                </Paper>
              </Box>
              <Box sx={{ display: 'flex', gap: '8px' }}>
                <Button variant="outlined" sx={{ color: '#4db6ff', backgroundColor: '#ffffff', borderColor: '#4db6ff', borderRadius: '8px', fontWeight: 'bold', padding: '10px 20px' }}>
                  Log in
                </Button>
                <Button variant="outlined" sx={{ color: '#ffffff', backgroundColor: '#4db6ff', borderColor: '#ffffff', borderRadius: '8px', fontWeight: 'bold', padding: '8px 16px' }}>
                  Register
                </Button>
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Cartlist open={open} toggleDrawer={toggleDrawer}/>
    </Box>
  );
};
export default Navbar;
