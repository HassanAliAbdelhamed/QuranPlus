import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import quraa from '../quraa';
import '../css/style.css';
import { swar } from './Qara';
import { useEffect, useState } from 'react';
function Player() {
  
  //convertToThreeDigitString
  function convertToThreeDigitString(number) {
    if(number === 115){
      number=1
    }
    let numberString = number.toString();
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    return numberString;
}

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

  let [animationPlayState, setAnimationPlayState] = useState('paused');

  const handleAudioEnd = (e) => {
    let Swaranumber = convertToThreeDigitString(++swara)
    navigate(`/${id}/${Swaranumber}`)
  };

  return (
    <div style={{minHeight:"calc(100vh - 200px)"}}>
      <div style={{ position: "absolute", transform: 'translate(-50%, -50%)', top: "50%", left: "50%" }}>
        <img
          className='img'
          src="https://hassanaliabdelhamed.github.io/Quraa-Picture/0.jpg"
          style={{ background: "white", borderRadius: '50%', maxWidth: '70%', width: '70%', height: '70%', animationPlayState: animationPlayState }}
          alt=""
        />
      </div>
      <AudioPlayer
        onPause={() => { setAnimationPlayState('paused');}}
        onPlay={() => { setAnimationPlayState('running');}}
        onEnded={handleAudioEnd}
        style={{ direction: "ltr", background: '#27292f', borderRadius: '14px', position: 'absolute', bottom: '5px', left: '0' }}
        autoPlay
        showJumpControls
        src={urlAudio}
      />
      <div className='mainCard'>
        <div className="card" style={{cursor:"pointer"}} onClick={()=>{navigate(`/${+id+1}`)}}><h2>{quraa[id].title}</h2></div>
        <div className="card2" style={{cursor:"pointer"}} onClick={()=>{navigate(`/swar/${swaraId}`)}}><h2>{swaraTitle} </h2></div>
      </div>
    </div>
  );
}

export default Player;
