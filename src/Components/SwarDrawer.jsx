import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { KeyboardArrowDown } from '@mui/icons-material';
import AllSwar from '../AllSwar';
import { ListItemButton, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import quraa from '../quraa';
import '../css/Sound.css'


export default function SwarDrawer(props) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  
  function convertToThreeDigitString(number) {
    let numberString = number.toString();
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    return numberString;
  }
    const swar = AllSwar;
    const currentQare = quraa[props.Reader];
    const qareeSwar = currentQare.swar ? 
        swar.filter(swara => currentQare.swar.includes(swara.id)) : 
        swar; // filter if he has specific surahs

  const DrawerList = (
    <Box sx={{ width: 250,background :"rgb(39, 41, 47)",paddingTop:"20px"}} role="presentation" onClick={toggleDrawer(false)}>
      <h2 style={{color:"white",textAlign:"center"}}>أختر سورة</h2>
      <List >
        {qareeSwar.map((swara, index) => (
          <ListItemButton  sx={{padding:'0px'}}>
                  <Link to={`/${props.Reader}/${convertToThreeDigitString(swara.id)}`} style={{ backgroundColor: 'transparent', padding:"6px 18px",color: 'white', textDecoration: "none", borderRadius:"50px 0 0 50px", display: "flex", width: "100%" }}>
                    <ListItemText sx={{textAlign: 'right' ,"span":{fontFamily: "Noto Nastaliq Urdu"}}}>{swara.title}</ListItemText>
                  </Link>
          </ListItemButton>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><KeyboardArrowDown sx={{color:"white",fontSize:"35px"}}/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}