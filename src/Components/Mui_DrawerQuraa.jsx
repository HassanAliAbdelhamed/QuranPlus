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
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import SpatialAudioIcon from '@mui/icons-material/SpatialAudio';
import Quraa from './Quraa';
import { Link } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@mui/material';
import SegmentIcon from '@mui/icons-material/Segment';


const drawerWidth = 340;

function Mui_DrawerQuraa(props) {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const drawer = (
    <div style={{ margin: "5px", background: "#3e3e42", borderRadius: "10px", color: "white" }}>
      <Toolbar >
        <SpatialAudioIcon />
        <Typography variant="h6" noWrap component="div">
          قراء +
        </Typography>
      </Toolbar>

      <Divider />

      <ListItemButton>
        <Link to={'/'} style={{color:'white' , textDecoration:"none" , display:"flex" , width:"100%"}}>
        <ListItemIcon sx={{ color: "white" }}><HomeIcon /></ListItemIcon>
        <ListItemText sx={{ textAlign: 'right' }}>الرئسيه</ListItemText>
        </Link>

      </ListItemButton>
      <ListItemButton>
        <Link to={'/search'} style={{color:'white' , textDecoration:"none" , display:"flex" , width:"100%"}}>
          <ListItemIcon sx={{ color: "white" }}><SearchIcon /></ListItemIcon>
          <ListItemText sx={{ textAlign: 'right' }}>بحث</ListItemText>
        </Link>
      </ListItemButton>
      
      <ListItemButton>
        <Link to={'/favorite'} style={{color:'white' , textDecoration:"none" , display:"flex" , width:"100%"}}>
          <ListItemIcon sx={{ color: "white" }}><FavoriteIcon /></ListItemIcon>
          <ListItemText sx={{ textAlign: 'right' }}>المفضله</ListItemText>
        </Link>
      </ListItemButton>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          mr: { lg: `${drawerWidth}px` },
          background: "#222222",
          display: { xs: "block", lg: "none" }
        }}
      >
        <Toolbar sx={{display:'flex' , justifyContent:"space-between" , alignItems:'center' , msFlexDirection:'row'}} >
          <div style={{display:"flex"}}>
          <SpatialAudioIcon />
            <Typography variant="h6" noWrap component="h6">
            قراء +
            </Typography>
          </div>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <SegmentIcon/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <Link style={{textDecoration:"none" , color:'black'}} to='/'><MenuItem onClick={handleClose}>الرئسيه</MenuItem></Link>
                <Link style={{textDecoration:"none" , color:'black'}} to='/search'><MenuItem onClick={handleClose}>بحث</MenuItem></Link>
                <Link style={{textDecoration:"none" , color:'black'}} to='/favorite'><MenuItem onClick={handleClose}>المفضله</MenuItem></Link>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>

      <AppBar
        position="fixed"
        sx={{
          width: { lg: `calc(100% - ${drawerWidth}px)` },
          mr: { lg: `${drawerWidth}px` },
          background: "#222222",
          display: { xs: "none", lg: "block" }
        }}
      >
        <Toolbar >
          <Typography variant="h6" noWrap component="div">
            مشاهير القراء.. أصوات من السماء
          </Typography>
        </Toolbar>
      </AppBar>


      <Box
        component="nav"
        sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          anchor="right"
          sx={{
            display: { xs: 'none', lg: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            ".MuiPaper-elevation": { background: "#1e1e1e" }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
            component="main"
            sx={{ width: { xs: '100%', lg: `calc(100% - ${drawerWidth}px)` }, padding: "100px 30px", background: "#222222", minHeight: "100vh" }}
        >
            <Typography variant="h6" noWrap component="h6" color="white" sx={{ textAlign: "right", display: { xs: "block", lg: "none" } }}>
                مشاهير القراء.. أصوات من السماء
            </Typography>
        <Quraa/>
      </Box>
    </Box>
  );
}

Mui_DrawerQuraa.propTypes = {
  window: PropTypes.func,
};

export default Mui_DrawerQuraa;