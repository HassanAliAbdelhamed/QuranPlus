import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import quraa from '../quraa';
import '../css/style.css';
import { useEffect, useState } from 'react';
import AllSwar from '../AllSwar';
import { MenuOpen } from '@mui/icons-material';
import { IconButton, Menu, MenuItem } from '@mui/material';
import SwarDrawer from './SwarDrawer';
import SoundImage from '../Imgs/SoundImage.png'
import QareImage from '../Imgs/QareImage.png'
function Player() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedSurah, setSelectedSurah] = useState('');

  function convertToThreeDigitString(number) {
    let numberString = number.toString();
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    return numberString;
}

  // Open and close the menu
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSurahSelect = (surah) => {
    setSelectedSurah(surah);
    handleMenuClose();
  };


  let swar= AllSwar;
  let par = useParams();
  let swara = par.swara;
  let id = par.id;
  let swara1 = swar[parseInt(swara) - 1];
  let swaraTitle = swara1.title;
  let swaraId = swara1.id  
  let urlAudio = quraa[id].Audiosource + swara + ".mp3";
  useEffect(() => {
    return () => {
      swara = par.swara;
      swara1 = swar[parseInt(swara) - 1];
      swaraTitle = swara1.title;
      urlAudio = `${quraa[id].Audiosource}${swara}.mp3`;
  
    };
  },  [id, par.swara, swar, quraa]); // Clean up dependencies
  
  let navigate = useNavigate();
 

  return (
    <div style={{minHeight:"calc(100vh - 200px)"}}>
      <div style={{position:"relative",left:"0",top:"20px",color:"white",textAlign:'left',marginTop:"-20px"}}>
       
      </div>
      <div className="imageContainer">
        <img src={SoundImage} style={{position:"absolute" , transform: 'translate(-50%, -50%)', top: "50%", left: "48.5%",maxWidth: '60%', width: '60%', height: 'auto' }} alt="" srcset="" />
        <div style={{ position: "absolute", transform: 'translate(-50%, -50%)', top: "54%", left: "50%" }}>
        <img
          className='img'
          src={QareImage}
          style={{ borderRadius: '50%', maxWidth: '90%', width: '90%', height: '90%' }}
          alt=""
        />
      </div>
      </div>
      <AudioPlayer
        style={{ direction: "ltr", background: '#27292f', borderRadius: '14px', position: 'absolute', bottom: '5px', left: '0' }}
        autoPlay
        loop
        showJumpControls
        src={urlAudio}
      />
      <div className='mainCard'>
        <div className="card" style={{cursor:"pointer"}} onClick={()=>{navigate(`/${+id+1}`)}}><h2>{quraa[id].title}</h2></div>
        
        <div className="card2" style={{cursor:"pointer",display:"flex" , flexDirection:"row"}} >
          <h2 onClick={()=>{navigate(`/swar/${swaraId}`)}}>{swaraTitle} </h2>
          <IconButton  onClick={handleMenuClick} >
              {/* <MenuOpen sx={{color:"white"}}/> */}
              <SwarDrawer Reader={id}/>
          </IconButton>
        </div>
      </div>

    </div>



  );
}

export default Player;
