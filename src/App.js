import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MuiDrawerSearch from './Components/Mui_DrawerSearch'
import Player from './Components/Sound'
import './App.css'
import { Box } from '@mui/material'
import MuiDrawer from './Components/Drawer'
import Qaraa from './Components/Qara'
import Radio from './Components/Radio'
import RadioSound from './Components/RadioSound'
import Swar from './Components/Swara'
import Home from './Components/Home'
import Swararead from './Components/Swararead'
import Tasmee3 from './Components/Tasmee3'
function App() {
  const drawerWidth = 240;

  return (
  <BrowserRouter>
      <div className="App">
        <MuiDrawer />
        <Box
          component="main"
          sx={{
            minHeight: { xs: 'calc(100%)', md: `100%` },
            width: { xs: '100%', md: `calc(100% - ${drawerWidth}px)` },
            padding: { xs: "100px 30px", md: '50px 30px' },
            background: "#1f2125",
            position: 'absolute',
            left: '0',
            top: "0"
          }}
        >
            <Routes>
              <Route path='/' element={<Home Route="home" />} />
              <Route path='search' element={<MuiDrawerSearch Route="search" />} />
              <Route path='/:id' element={<Qaraa Route="search" />} />
              <Route path='/swar/:id' element={<Swar Route="swar" />} />
              <Route path='/:id/:swara' element={<Player Route="search" />} />
              <Route path='radio' element={<Radio Route="radio" />} />
              <Route path='radio/:id' element={<RadioSound Route="radio" />} />
              <Route path='read/:id' element={<Swararead Route="Swararead" />} />
              <Route path='tasmee3/:id' element={<Tasmee3 Route="Tasmee3" />} />
            </Routes>
          
        </Box>
      </div>
    </BrowserRouter>
  )}
export default App;
