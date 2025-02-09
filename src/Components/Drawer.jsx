import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ListItemButton from '@mui/material/ListItemButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

// Icons 
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import RadioIcon from '@mui/icons-material/Radio';

const drawerWidth = 240;
function Mui_Drawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
 
  const drawer = (
    <div style={{ background: "#27292f", height: '100vh', color: "white" }}>
      <Toolbar sx={{ display: { xs: 'none', md: "flex" } }} on >
        <Link to={'/'} style={{ color: 'white', textDecoration: "none", display: "flex", width: "100%" }}>
          <Typography variant="h6" noWrap component="h6">
          قرآن +
          </Typography>
        </Link>
      </Toolbar>
      <Divider />
      <ListItemButton onClick={handleDrawerClose} sx={{padding:'0px'}}>
        <Link to={'/'} style={{ backgroundColor: 'transparent', padding:"6px 18px",color: 'white', textDecoration: "none", borderRadius:"50px 0 0 50px", display: "flex", width: "100%" }}>
          <ListItemIcon sx={{ color: "white" }}><HomeIcon /></ListItemIcon>
          <ListItemText sx={{ textAlign: 'right' }}>الرئيسية</ListItemText>
        </Link>
      </ListItemButton>
      <ListItemButton onClick={handleDrawerClose} sx={{padding:'0px'}}>
        <Link to={'/search'} style={{backgroundColor:  'transparent',  color: 'white', textDecoration: "none", borderRadius:"50px 0 0 50px", padding:"6px 18px",display: "flex", width: "100%" } } >
          <ListItemIcon sx={{ color: "white" }}><SearchIcon /></ListItemIcon>
          <ListItemText sx={{ textAlign: 'right' }}>بحث</ListItemText>
        </Link>
      </ListItemButton>
      <ListItemButton onClick={handleDrawerClose} sx={{padding:'0px'}}>
        <Link to={'/radio'} style={{ backgroundColor: 'transparent', color: 'white', textDecoration: "none", borderRadius:"50px 0 0 50px",display: "flex",  padding:"6px 18px",width: "100%" }} >
          <ListItemIcon sx={{ color: "white" }}><RadioIcon /></ListItemIcon>
          <ListItemText sx={{ textAlign: 'right' }}>الإذاعة </ListItemText>
        </Link>
      </ListItemButton>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    
    <Box sx={{ display: 'flex', ".css-18sg6k4-MuiPaper-root-MuiDrawer-paper":{borderLeft:"0px solid #639c6d"}}}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mr: { md: `${drawerWidth}px` },
          background: "#27292f",
          display: { xs: "block", md: "none" }
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
          <Link to={'/'} style={{ color: 'white', textDecoration: "none", display: "flex", alignItems: "center" }}>
            <Typography variant="h6" noWrap component="h6">
            قرآن +
            </Typography>
          </Link>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          anchor='right'
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          anchor='right'
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Mui_Drawer.propTypes = {
  window: PropTypes.func,
};

export default Mui_Drawer;
