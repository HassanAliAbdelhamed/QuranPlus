import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { useNavigate, useParams } from 'react-router-dom';
import '../css/style.css'
import { useState } from 'react';

function RadioSound() {
  let par = useParams();
  let navigate = useNavigate();
  let id = par.id;

  let [animationPlayState , setAnimationPlayState] = useState('paused');
  const quraaNames={
    1:" أبو بكر الشاطري",
    2:" أحمد خضر الطرابلسي",
    3:" إبراهيم الأخضر",
    4:" خالد الجليل",
    5:"صلاح الهاشم",
    6:"صلاح بو خاطر" ,
    7:"عبدالباسط عبدالصمد",
    8:"عبد العزيز سحيم",
    9:"فارس عباد",
    10:"ماهر المعيقلي",
    11:"محمد صديق المنشاوي",
    12:"محمود خليل الحصري",
    13:"محمود علي البنا",
    14:"مشاري العفاسي",
    15:"ناصر القطامي",
    16:"نبيل الرفاعي",
    17:"هيثم الجدعاني",
    18:"ياسر الدوسري",
    19:"القرأن الكريم القاهرة",
    20:"تلاوات خاشعة"
  }
  const radioDic={
    1:"https://backup.qurango.net/radio/shaik_abu_bakr_al_shatri",
    2:"https://backup.qurango.net/radio/ahmad_khader_altarabulsi",
    3:"https://backup.qurango.net/radio/ibrahim_alakdar",
    4:"https://backup.qurango.net/radio/khalid_aljileel",
    5:"https://backup.qurango.net/radio/salah_alhashim",
    6:"https://backup.qurango.net/radio/slaah_bukhatir",
    7:"https://backup.qurango.net/radio/abdulbasit_abdulsamad_mojawwad",
    8:"https://backup.qurango.net/radio/a_sheim",
    9:"https://backup.qurango.net/radio/fares_abbad",
    10:"https://backup.qurango.net/radio/maher",
    11:"https://backup.qurango.net/radio/mohammed_siddiq_alminshawi_mojawwad",
    12:"https://backup.qurango.net/radio/mahmoud_khalil_alhussary_mojawwad",
    13:"https://backup.qurango.net/radio/mahmoud_ali__albanna_mojawwad",
    14:"https://backup.qurango.net/radio/mishary_alafasi",
    15:"https://backup.qurango.net/radio/nasser_alqatami",
    16:"https://backup.qurango.net/radio/nabil_al_rifay",
    17:"https://backup.qurango.net/radio/hitham_aljadani",
    18:"https://backup.qurango.net/radio/yasser_aldosari",
    19:"https://n0e.radiojar.com/8s5u5tpdtwzuv?rj-ttl=5&rj-tok=AAABjW7yROAA0TUU8cXhXIAi6g",
    20:"https://backup.qurango.net/radio/salma",
    21:"https://backup.qurango.net/radio/eid"
  }
  return (
    <>
      <div className='live-badge'>مباشر</div>

      <div style={{position:"absolute" , transform: 'translate(-50% , -50%)' , top:"50%" , left:"50%"}}>

        <img  className='img' src="https://hassanaliabdelhamed.github.io/Quraa-Picture/0.jpg" style={{ background:"white",borderRadius:'50%' , maxWidth:'70%' , width:'70%' , height:'70%' , animationPlayState:animationPlayState}} alt="" />
      </div>      
      <AudioPlayer
        onPause={()=>{setAnimationPlayState('paused');}}
        onPlay={()=>{setAnimationPlayState('running');}}
        
        style={{direction:"ltr", background:'#27292f',borderRadius:'14px',position:'absolute',bottom:'5px',left:'0'}}
        autoPlay
        loop={true}
        showJumpControls
        src={radioDic[id]}
      />
    <div className='mainCard'>
        <div className="card" style={{cursor:"pointer"}} onClick={()=>{navigate(`/radio/${id}`)}}><h2>{quraaNames[id]}</h2></div>
      </div>
    </>
  )
}
export default RadioSound;