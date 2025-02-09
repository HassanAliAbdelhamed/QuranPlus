import {  Grid } from '@mui/material';
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import quranTitles from '../quranTitles';
import "../css/style.css";
import Loading from 'react-loading';
import AutoCompleteSwarRead from './AutoCompleteSwarRead';
import ReadSound from './ReadSound';

// Material ui 
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

// Quran Swar 
import quranSuar from '../Quran Api Json/Suars/quran.json'

// Quran Tafaseer 
import Muasr from '../Quran Api Json/Tafseer/ar_muyassar.json'
// Dialog 
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
export default function Swararead() {
    // Params 
    const params = useParams();
    const oldId = parseInt(params.id);
    const id = oldId;


    // Dialog 
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // Audio 
    const [audio, setAudio] = React.useState();

    // Suars and Tafseer
    const Swarainformations = quranTitles[id - 1];
    const SwaraTitle = Swarainformations?.surahNameArabicLong;
    const AyatNumber = Swarainformations?.totalAyah;
    const [ayatData, setAyatData] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [tafseerText, setTafseerText] = React.useState();
    const [ayaId, setAyaId] = React.useState();
    const [knowFuction, setKnowFuction] = React.useState(1);
    const [focusedAyahIndex, setFocusedAyahIndex] = React.useState(null);
    let navigate=useNavigate();

    // Tafseer Fun
    function FilterTafseer(suraId, ayaId) {
        return Muasr.filter(item => item.sura === suraId && item.aya === ayaId);
    }
    // Click in Aya 

    function AyaClick(ayahId) {
        console.log(ayahId)
        console.log(id)

        setFocusedAyahIndex(ayahId); // Update the focused Ayah id
        if (knowFuction === 1) {
            setAudio({ 1: `https://quranaudio.pages.dev/1/${id}_${ayahId}.mp3`, 2: `https://quranaudio.pages.dev/3/${id}_${ayahId}.mp3`, 3: `https://quranaudio.pages.dev/3/${id}_${ayahId}.mp3` })
        }
        else if (knowFuction === 2) {
            handleClickOpen()
            setTafseerText(FilterTafseer(id, ayahId)[0].text)
        }
        setAyaId(id)
    }


    // Fetch ayat of suars 
    React.useEffect(() => {
        const fetchAyatData = async () => {
            try {
                setAyatData(quranSuar[id - 1].verses);
            }
            finally {
                setLoading(false);
            }
        };


        if (ayaId)
            setTafseerText(FilterTafseer(id, +ayaId)[0].text)
        console.log(knowFuction);
        fetchAyatData();

    }, [AyatNumber]);


    // loading untill images load
    if (loading) return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Loading type="spin" color="rgb(99, 156, 109)" height={50} width={50} />
        </div>
    );


    const dynamicSplitPages = (ayatData) => {
        const pages = [];
        let currentPage = [];
        let currentHeight = 0;

        const pushAyahsToPages = () => {
            ayatData.forEach((ayah, id) => {
                currentPage.push(ayah);
                currentHeight += 58; // Approximate height of each Ayah, adjust as needed

                // Check if the page height exceeds 100vh (you can adjust this based on your content size)
                if (currentHeight >= window.innerHeight) {
                    pages.push(currentPage);
                    currentPage = []; //
                    //  Reset current page
                    currentHeight = 0; // Reset height for the new page
                }
            });

            // Push any remaining Ayahs to the last page
            if (currentPage.length > 0) {
                pages.push(currentPage);
            }
        };

        pushAyahsToPages(); // Call the function to divide the content into pages

        return pages;
    };
    // Pages will be generated dynamically based on the Ayah data
    const pages = dynamicSplitPages(ayatData);

    return (
        <>
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Grid item xs={12} sm={10} lg={8} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <Grid sx={{ color: "white" }} item xs={5}>
                                <AutoCompleteSwarRead />
                            </Grid>
                            <Grid sx={{ color: "white" ,marginTop:"20px" ,textAlign:"left" }} item xs={5} >
                                <p className='tasmee3' style={{color:"white" , fontFamily:"cairoPlay"}} onClick={()=>{navigate(`/tasmee3/${id}`)}}>تسميع</p>
                            </Grid>
            
                            </Grid>
                            </Grid>
            
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid sx={{ color: "white" }} item xs={12} sm={10} lg={8}>
                    <div style={{ marginBottom: "60px" }}>
                        <h1 id="swara" style={{ fontSize: "40px", borderLeft: "6px solid rgb(99, 156, 109)", borderRight: "6px solid rgb(99, 156, 109)", boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "20px", padding: "25px" }}>{SwaraTitle}</h1>
                        {id !== 9 && id !== 1 && <h3 id='swara' style={{ lineBreak: "4" }}>بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</h3>}
                    </div>
                    <div>
                        <div id="quran">
                            {/* Render the Ayahs for each page, one after another */}
                            {pages.map((page, pageIndex) => (
                                <div key={pageIndex} style={{
                                    borderBottom: "4px solid #639c6d",
                                    borderTop: "4px solid #639c6d",
                                    marginBottom: "20px",
                                    padding: "20px",
                                    borderRadius: "15px",
                                    backgroundColor: "#1f2125",
                                    color: "white",
                                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                                    textAlign: "justify",
                                }}>
                                    {page.map((ayah,index) => (
                                        <div
                                            key={ayah.id}
                                            id="ayaa"
                                            onClick={() => AyaClick(ayah.id)} // Pass both pageIndex and localIndex
                                            style={{
                                                color: focusedAyahIndex === ayah.id ? 'rgb(99, 156, 109)' : 'white', // Conditional styling based on focus
                                            }}
                                        >
                                            {ayah.text}
                                            <span> </span>
                                            <img
                                                src={`https://hassanaliabdelhamed.github.io/Ayat_Nunmbers/a_${ayah.id}.png`}
                                                alt="Ayah Number"
                                                style={{
                                                    height: '38px',
                                                    background: 'transparent',
                                                    borderRadius: '50%',
                                                    display: 'inline',
                                                    marginBottom: '-5px',
                                                    transform:"scale(1.1)"
                                                }}
                                            />
                                            <span> </span>
                                        </div>
                                        
                                    ))}
                                <p style={{textAlign:"center",fontSize:"15px" ,color:"#777"}}>{pageIndex+1}</p>
                                </div>
                            
                            ))}

                        </div>
                    </div>
                    <ReadSound Sound={audio} knowFuction={setKnowFuction} />
                </Grid>
            </Grid>




            {/* Dialog  */}
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    التفاسير
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={(theme) => ({
                        position: 'absolute',
                        left: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <h2>التفسير الميسر</h2>
                    <Typography gutterBottom>
                        <div dangerouslySetInnerHTML={{ __html: tafseerText }} />
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        اغلاق
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </>
    );
}
