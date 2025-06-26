import React from 'react';
import Quraa from './Quraa';
import { Typography } from '@mui/material';
import AutoCompleteReader from './AutoCompleteReader';



function Mui_DrawerSearch() {
  return (
    <>
          <Typography sx={{ textAlign: 'start', color: 'white', marginBottom: '40px' }} variant="h6" noWrap component="h6">
            أبحث عن الشيخ الذي تريدة ...
          </Typography>
          <AutoCompleteReader/>
          <Quraa />
    </>

  )
}



export default Mui_DrawerSearch;
