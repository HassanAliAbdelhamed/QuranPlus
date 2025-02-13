import { Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import '../App.css'
import RadioCard from "./Radio_Card"

function Radio() {
    return (
        <>
        <Typography sx={{textAlign:'start', color:'white' , marginBottom:'20px'   }} variant="h6" noWrap component="h6">
        إذاعات القرآن الكريم...
        </Typography>
            <Grid container sx={{ width: "100%", position: 'relative' }}>
                <Grid item xs={6} sm={3} xl={2} gap={1}  >
                    <Link  onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`1`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/1.jpg' title=" أبو بكر الشاطري" /></Link>
                </Grid>
                
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`2`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/3.jpg' title=" أحمد خضر الطرابلسي" /></Link>
                </Grid>

                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`3`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/10.jpg' title=" إبراهيم الأخضر" /></Link>
                </Grid>

                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`4`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/29.jpg' title=" خالد الجليل" /></Link>
                </Grid>

                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`5`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/r1.jpg' title="صلاح الهاشم" /></Link>
                </Grid>

                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`6`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/41.jpg' title="صلاح بو خاطر" /></Link>
                </Grid> 

                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`7`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/50.jpg' title="عبدالباسط عبدالصمد" /></Link>
                </Grid>
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`8`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/r2.jpg' title="عبد العزيز سحيم" /></Link>
                </Grid>
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`9`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/71.jpg' title="فارس عباد" /></Link>
                </Grid>

                <Grid item xs={6} sm={3} xl={2} gap={1} >
                        <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`10`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/72.jpg' title="ماهر المعيقلي" /></Link>
                </Grid>
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                        <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`11`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/82.jpg' title="محمد صديق المنشاوي" /></Link>
                </Grid> 

                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`12`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/89.jpg' title="محمود خليل الحصري" /></Link>
                </Grid>
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`13`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/90.jpg' title="محمود علي البنا" /></Link>
                </Grid>

                <Grid item xs={6} sm={3} xl={2} gap={1} >
                        <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`14`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/91.jpg' title="مشاري العفاسي" /></Link>
                </Grid>
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                        <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`15`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/98.jpg' title="ناصر القطامي" /></Link>
                </Grid> 


                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`16`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/99.jpg' title="نبيل الرفاعي" /></Link>
                </Grid>
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`17`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/r3.jpg' title="هيثم الجدعاني" /></Link>
                </Grid>
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                        <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`18`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/104.jpg' title="ياسر الدوسري" /></Link>
                </Grid>
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                        <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`19`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/r4.png' title="القرأن الكريم القاهرة" /></Link>
                </Grid> 

                <Grid item xs={6} sm={3} xl={2} gap={1} >
                        <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`20`}><RadioCard imgSource='https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/r5.jpg' title="تلاوات خاشعة" /></Link>
                </Grid> 
            </Grid>
        </>
    )
}   
export default Radio