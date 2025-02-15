import React from "react";
import {Box } from "@mui/material";
import 'react-h5-audio-player/lib/styles.css';
import quraa from '../quraa';
import { Link, useParams } from "react-router-dom";
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import '../css/style.css';
import AutoCompleteReader from "./AutoCompleteReader";
import AllSwar from "../AllSwar";
function Swar() {
    let { id } = useParams();
    id = id - 1;
    const swar = AllSwar;
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
                <h4 id="swara" style={{ color: 'white', padding: '22px',fontSize:"23px" }}> سورة {swar[id].title}</h4>
            </Box>
            <AutoCompleteReader Dir={id +1}/>
            <menu>
                <ol>
                    {quraa.map(qare => (
                        <div style={{ color: 'white', padding: '20px 0' ,textAlign:'start' }} key={qare.id}>
                            <li ><Link id={qare.id} onClick={()=>{window.scrollTo(0,0)}} to={`/${qare.id -1}/${convertToThreeDigitString(swar[id].id)}` } style={{ textDecoration:"none" , color:"white",padding:'10px ',borderRadius:'14px' , cursor:'pointer', background:"rgb(39, 41, 47)" ,display:'flex',justifyContent:'space-between',alignItems:'center'}}>{qare.title} <HeadsetMicIcon style={{color:"white", borderRadius:'10px ',background:'#1f2125' , padding:'3px'}}/></Link></li>
                        </div>
                    ))}
                </ol>
            </menu>
        </>
    );
}

export default Swar;
