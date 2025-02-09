import React from "react";
import { Avatar, Box } from "@mui/material";
import 'react-h5-audio-player/lib/styles.css';
import quraa from '../quraa';
import { Link, useParams } from "react-router-dom";
import AutoCompSwar from "./AutoCompSwar";
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import '../css/style.css';
export  const swar = [
    { id: 1, title: "الفاتحة" },
    { id: 2, title: "البقرة" },
    { id: 3, title: 'آل عمران' },
    { id: 4, title: 'النساء' },
    { id: 5, title: "المائدة" },
    { id: 6, title: 'الأنعام' },
    { id: 7, title: 'الأعراف' },
    { id: 8, title: "الأنفال" },
    { id: 9, title: "التوبة" },
    { id: 10, title: 'يونس' },
    { id: 11, title: 'هود' },
    { id: 12, title: "يوسف" },
    { id: 13, title: 'الرعد' },
    { id: 14, title: 'إبراهيم' },
    { id: 15, title: 'الحجر' },
    { id: 16, title: "النحل" },
    { id: 17, title: 'الإسراء' },
    { id: 18, title: 'الكهف' },
    { id: 19, title: "مريم" },
    { id: 20, title: "طه" },
    { id: 21, title: 'الأنبياء' },
    { id: 22, title: 'الحج' },
    { id: 23, title: "المؤمنون" },
    { id: 24, title: 'النور' },
    { id: 25, title: 'الفرقان' },
    { id: 26, title: 'الشعراء' },
    { id: 27, title: 'النمل' },
    { id: 28, title: "القصص" },
    { id: 29, title: 'العنكبوت' },
    { id: 30, title: 'الروم' },
    { id: 31, title: 'لقمان' },
    { id: 32, title: "السجدة" },
    { id: 33, title: 'الأحزاب' },
    { id: 34, title: 'سبأ' },
    { id: 35, title: "فاطر" },
    { id: 36, title: "يس" },
    { id: 37, title: 'الصافات' },
    { id: 38, title: ' ص' },
    { id: 39, title: "الزمر" },
    { id: 40, title: 'غافر' },
    { id: 41, title: 'فصلت' },
    { id: 42, title: 'الشورى' },
    { id: 43, title: "الزخرف" },
    { id: 44, title: 'الدخان' },
    { id: 45, title: 'الجاثية' },
    { id: 46, title: 'الأحقاف' },
    { id: 47, title: 'محمد' },
    { id: 48, title: "الفتح" },
    { id: 49, title: 'الحجرات' },
    { id: 50, title: ' ق' },
    { id: 51, title: 'الذاريات' },
    { id: 52, title: "الطور" },
    { id: 53, title: 'النجم' },
    { id: 54, title: 'القمر' },
    { id: 55, title: "الرحمن" },
    { id: 56, title: "الواقعة" },
    { id: 57, title: 'الحديد' },
    { id: 58, title: 'المجادلة' },
    { id: 59, title: "الحشر" },
    { id: 60, title: 'الممتحنة' },
    { id: 61, title: 'الصف' },
    { id: 62, title: "الجمعة" },
    { id: 63, title: "المنافقون" },
    { id: 64, title: 'التغابن' },
    { id: 65, title: 'الطلاق' },
    { id: 66, title: "التحريم" },
    { id: 67, title: 'الملك' },
    { id: 68, title: 'القلم' },
    { id: 69, title: "الحاقة" },
    { id: 70, title: "المعارج" },
    { id: 71, title: 'نوح' },
    { id: 72, title: 'الجن' },
    { id: 73, title: "المزمل" },
    { id: 74, title: 'المدثر' },
    { id: 75, title: 'القيامة' },
    { id: 76, title: 'الإنسان' },
    { id: 77, title: "المرسلات" },
    { id: 78, title: 'النبأ' },
    { id: 79, title: 'النازعات' },
    { id: 80, title: "عبس" },
    { id: 81, title: "التكوير" },
    { id: 82, title: 'الإنفطار' },
    { id: 83, title: 'المطففين' },
    { id: 84, title: "الانشقاق" },
    { id: 85, title: 'البروج' },
    { id: 86, title: 'الطارق' },
    { id: 87, title: 'الأعلى' },
    { id: 88, title: 'الغاشية' },
    { id: 89, title: "الفجر" },
    { id: 90, title: 'البلد' },
    { id: 91, title: 'الشمس' },
    { id: 92, title: 'الليل' },
    { id: 93, title: "الضحى" },
    { id: 94, title: 'الشرح' },
    { id: 95, title: 'التين' },
    { id: 96, title: "العلق" },
    { id: 97, title: "القدر" },
    { id: 98, title: 'البينة' },
    { id: 99, title: 'الزلزلة' },
    { id: 100, title: "العاديات" },
    { id: 101, title: 'القارعة' },
    { id: 102, title: 'التكاثر' },
    { id: 103, title: 'العصر' },
    { id: 104, title: "الهمزة" },
    { id: 105, title: 'الفيل' },
    { id: 106, title: 'قريش' },
    { id: 107, title: 'الماعون' },
    { id: 108, title: 'الكوثر' },
    { id: 109, title: "الكافرون" },
    { id: 110, title: 'النصر' },
    { id: 111, title: 'المسد' },
    { id: 112, title: 'الإخلاص' },
    { id: 113, title: "الفلق" },
    { id: 114, title: 'الناس' },
];
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
            <AutoCompSwar/>
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