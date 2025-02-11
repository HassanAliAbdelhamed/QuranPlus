import * as React from 'react';
import {  Grid } from '@mui/material';
import '../css/home.css';
import CardOfSwar from './CardOfSwar';
import AutoCompleteSwarRead from './AutoCompleteSwar';
import AutoCompleteReader from './AutoCompleteReader';
export default function Home() {


    const swar = [
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
        { id: 38, title: 'سورة ص' },
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
        { id: 50, title: 'سورة ق' },
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





    return (        
            <>
            <h1 style={{color:"white" ,fontSize:"40px"}}>قرآن +</h1>
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid sx={{ color: "white" }} item xs={4}>
                    <AutoCompleteSwarRead Dir="read" Label="قراءة"/>
                </Grid>
                <Grid sx={{ color: "white" }} item xs={4}>
                    <AutoCompleteSwarRead Dir="tasmee3" Label="تسميع"/>
                </Grid>
                <Grid sx={{ color: "white" }} item xs={4} >
                    <AutoCompleteReader/>
                </Grid>

            </Grid>
            
            <Grid container sx={{ width: "100%", position: 'relative',marginTop:"20px" }}>
                {swar.map(qara => (
                    <Grid item xs={12} sm={4} xl={3} gap={1} key={qara.id}>
                       <CardOfSwar  title={qara.title} Id={qara.id} />
                    </Grid>
                ))}
            </Grid>
            </>

        );
}