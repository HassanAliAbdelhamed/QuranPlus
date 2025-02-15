import React from "react";
import { Avatar, Box } from "@mui/material";
import 'react-h5-audio-player/lib/styles.css';
import quraa from '../quraa';
import { Link, useParams } from "react-router-dom";
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import '../css/style.css';
import AutoCompleteSwarWith3Digits from "./AutoCompleteSwarWith3Digits";
import AllSwar from "../AllSwar";
const swar = AllSwar;

function Qaraa() {
    let { id } = useParams();
    id = id - 1;
    function convertToThreeDigitString(number) {
        let numberString = number.toString();
        while (numberString.length < 3) {
            numberString = "0" + numberString;
        }
        return numberString;
    }

    return (
        <>
            <Box sx={{ display: 'flex', alignItems: 'center', padding: '40px', background: 'linear-gradient(to bottom, #484e5b, #1f2125)', margin: '-80px -30px 0px' }}>
                <Avatar alt="Cindy Baker" sx={{ width: '120px', height: "120px", marginRight: "30px" }} src={quraa[id].img} />
                <h4 style={{ color: 'white', paddingRight: '30px' }}>{quraa[id].title}</h4>
            </Box>
            <AutoCompleteSwarWith3Digits/>
            <menu>
                <ol>
                    {swar.map(swara => (
                        <div style={{ color: 'white', padding: '20px 0' ,textAlign:'start' }} key={swara.id}>
                            <li ><Link id="swaraID" onClick={()=>{window.scrollTo(0,0)}} to={"/"+id+"/"+convertToThreeDigitString(swara.id)} style={{ textDecoration:"none" , color:"white",padding:'10px ',borderRadius:'14px' , cursor:'pointer', background:"#27292f " ,fontFamily: "Noto Nastaliq Urdu",display:'flex',justifyContent:'space-between',alignItems:'center'}}>{swara.title} <HeadsetMicIcon style={{color:"white", borderRadius:'10px ',background:'#222222' , padding:'3px'}}/></Link></li>
                        </div>
                    ))}
                </ol>
            </menu>
        </>
    );
}

export default Qaraa;