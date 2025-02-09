import * as React from 'react';
import '../css/home.css';
import LibraryBooksIcon from '@mui/icons-material/AutoStories';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { ListItemButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
export default function CardOfSwar(props) {
    let navigate = useNavigate();
    return (
        <>
            <div className='container'>
            <div className='QuranCard' style={{display:"flex" , border:"1px solid white",borderRadius:"15px" , padding:"15px", margin:"15px" , justifyContent:"space-between" ,alignItems:"center" ,color:"white"}}>
                <div id='swara' style={{fontSize:"20px"}}>
                    {props.title}
                </div>
                <div style={{color:"white" ,display:"flex"}} >

                    <ListItemButton className='icon' sx={{ background:"#27292f",borderRadius:"10px",padding:"5px" , marginLeft:"8px"}}onClick={()=>{navigate(`/read/${props.Id}`) ; window.scrollTo(0,0)}}>
                        <LibraryBooksIcon />
                    </ListItemButton>
                    <ListItemButton className='icon' sx={{ background:"#27292f",borderRadius:"10px",padding:"5px" , marginLeft:"8px"}}onClick={()=>{navigate(`/tasmee3/${props.Id}`) ; window.scrollTo(0,0)}}>
                        <BorderColorIcon />
                    </ListItemButton>
                    <ListItemButton className='icon' sx={{ background:"#27292f",borderRadius:"10px",padding:"5px"}}onClick={()=>{navigate(`/swar/${props.Id}`) ; window.scrollTo(0,0)}}>
                        <HeadsetMicIcon />
                    </ListItemButton>
                    
                </div>
            </div>
            </div>
        </>
    );
}