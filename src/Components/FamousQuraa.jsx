import { Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import ActionAreaCard from "./Mui_Paper"
import '../App.css'

function FamousQuraa() {
    return (
        <>
        <Typography sx={{textAlign:'start', color:'white' , marginBottom:'20px'   }} variant="h6" noWrap component="h6">
            مشاهير القراء.. القراء الراحلين...
        </Typography>
            <Grid container sx={{ width: "100%", position: 'relative' }}>
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/82`}><ActionAreaCard imgSource='https://hassanaliabdelhamed.github.io/Quran-Picture/82.jpg' title="محمد صديق المنشاوي" /></Link>
                </Grid>
                
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/50`}><ActionAreaCard imgSource='https://hassanaliabdelhamed.github.io/Quran-Picture/50.jpg' title="عبدالباسط عبدالصمد" /></Link>
                </Grid>


                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/89`}><ActionAreaCard imgSource='https://hassanaliabdelhamed.github.io/Quran-Picture/89.jpg' title="محمود خليل الحصري" /></Link>
                </Grid>

                
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/86`}><ActionAreaCard imgSource='https://hassanaliabdelhamed.github.io/Quran-Picture/86.jpg' title="محمد الطبلاوي" /></Link>
                </Grid>
            </Grid>

        <Typography sx={{textAlign:'start', color:'white',  marginBottom:'20px' , marginTop:"60px" }} variant="h6" noWrap component="h6">
        قراء المسجد الحرام...
        </Typography>
            <Grid container sx={{ width: "100%", position: 'relative' }}>
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/104`}><ActionAreaCard imgSource='https://hassanaliabdelhamed.github.io/Quran-Picture/104.jpg' title="ياسر الدوسري" /></Link>
                </Grid>
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/98`}><ActionAreaCard imgSource='https://hassanaliabdelhamed.github.io/Quran-Picture/98.jpg' title="ناصر القطامي" /></Link>
                </Grid> 
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/72`}><ActionAreaCard imgSource='https://hassanaliabdelhamed.github.io/Quran-Picture/72.jpg' title="ماهر المعيقلي" /></Link>
                </Grid>
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/51`}><ActionAreaCard imgSource='https://hassanaliabdelhamed.github.io/Quran-Picture/51.jpg' title="عبد الرحمن السديس" /></Link>
                </Grid>
                <Grid item xs={6} sm={3} xl={2} gap={1} >
                    <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/67`}><ActionAreaCard imgSource='https://hassanaliabdelhamed.github.io/Quran-Picture/67.jpg' title="علي جابر" /></Link>
                </Grid>
            </Grid>

        <Typography sx={{textAlign:'start', color:'white', marginBottom:'20px' , marginTop:"60px" , padding:'14px' }} variant="h6" noWrap component="h6">
        أشهر القراء في الوطن العربي...
        </Typography>
                <Grid container sx={{ width: "100%", position: 'relative' }}>
                    <Grid item xs={6} sm={3} xl={2} gap={1} >
                        <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/91`}><ActionAreaCard imgSource='https://hassanaliabdelhamed.github.io/Quran-Picture/91.jpg' title="مشاري بن راشد العفاسي" /></Link>
                    </Grid>
                    <Grid item xs={6} sm={3} xl={2} gap={1} >
                        <Link onClick={()=>{window.scrollTo(0,0)}} style={{ textDecoration: "none", color: 'white' }} to={`/84`}><ActionAreaCard imgSource='https://hassanaliabdelhamed.github.io/Quran-Picture/84.jpg' title=" محمد نورين صديق" /></Link>
                    </Grid> 
                </Grid>
        </>
    )
}   
export default FamousQuraa