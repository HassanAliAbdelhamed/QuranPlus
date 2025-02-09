import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons(props) {
  const [alignment, setAlignment] = React.useState('left');
  console.log();
  
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      sx={{color:"white" , background:"rgb(39, 41, 47)", borderRadius:"25px 25px 0px 0px", height:"50px" ,'.css-ueukts-MuiButtonBase-root-MuiToggleButton-root.Mui-selected':{background:"#00000045" , borderRadius:"25px 25px 0px 0px"}}}
    >
      <ToggleButton value="left" aria-label="left aligned" onClick={()=>{props.knowFuction(1)}}>
        <h4 style={{color:"white"}}>أستماع</h4>
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered" onClick={()=>{props.knowFuction(2)}}>
      <h4 style={{color:"white"}}>تفسير</h4>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}