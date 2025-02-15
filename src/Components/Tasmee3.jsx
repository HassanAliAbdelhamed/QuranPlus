import * as React from 'react';
import { Grid } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import quranTitles from '../quranTitles';
import "../css/style.css";

// Quran Swar 
import quranSuar from '../Quran Api Json/Suars/quran.json';
import AutoCompleteSwar from './AutoCompleteSwar';

export default function Tasmee3() {
    let navigate = useNavigate();
    let { id } = useParams();
    id = +id;
    let newId = id - 1;

    // State to track the list of displayed Ayahs
    const [displayedAyahs, setDisplayedAyahs] = React.useState([]);
    const [startingAyah, setStartingAyah] = React.useState(1);  // Track the starting Ayah
    const [errorMessage, setErrorMessage] = React.useState('');  // To show error message if out of range

    // Function to handle the input change for the starting Ayah
    const handleStartingAyahChange = (event) => {
        setStartingAyah(Number(event.target.value)); // Ensure it is a number        
    };

    // Start handling function

    
    function startHandel() {
        // Get the total number of verses in the Surah
        const totalVerses = quranSuar[newId]?.verses?.length;

        // Check if the starting Ayah is within the valid range
        if (startingAyah < 1 || startingAyah > totalVerses) {
            setErrorMessage(`الآية رقم ${startingAyah} غير موجودة. الرجاء إدخال رقم آية صحيح.`);
            setDisplayedAyahs([]);  // Clear any previous displayed Ayahs
            return; // Exit the function if the number is out of range
        }

        // Reset error message if input is valid
        setErrorMessage('');

        // Add the starting Ayah to the displayed Ayahs list
        const startIndex = startingAyah - 1; // Convert to 0-based index
        setDisplayedAyahs([{
            text: quranSuar[newId].verses[startIndex].text,
            number: startingAyah,
        }]);
    }

    // Function to add a new Ayah to the list of displayed Ayahs
    function addAyah() {

        let newAyaIndex = displayedAyahs.length + startingAyah - 1;

        // Ensure that we don't exceed the number of available verses
        if (newAyaIndex < quranSuar[newId].verses.length) {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth', // Optional: Adds smooth scrolling
              });
            setDisplayedAyahs((prev) => [
                ...prev,
                {
                    text: quranSuar[newId].verses[newAyaIndex].text,
                    number: newAyaIndex + 1,
                },
            ]);
        }
    }

    const Swarainformations = quranTitles[id - 1];
    const SwaraTitle = Swarainformations?.surahNameArabicLong;

    return (
        <div style={{ position: 'relative' ,minHeight:"100vh" }}>
            <button type="button" className="incrementAyat" onClick={addAyah}>
                +
            </button>
            <Grid
                container
                spacing={2}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Grid
                    item
                    xs={12}
                    sm={10}
                    lg={8}
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                    <Grid sx={{ color: 'white' }} item xs={5}>
                                <AutoCompleteSwar Label="تسميع" Dir="tasmee3" />                    
                    </Grid>
                    <Grid sx={{ color: 'white', marginTop: '20px', textAlign: 'left' }} item xs={6}>
                        <p
                            className="tasmee3"
                            style={{ color: 'white', fontFamily: 'cairoPlay' }}
                            onClick={() => {
                                navigate(`/read/${id}`);
                            }}
                        >
                            قراءة
                        </p>
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                container
                spacing={2}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: '40px',
                }}
            >
                <Grid sx={{ color: 'white', position: 'relative' }} item xs={12} sm={10} lg={8}>
                    <Grid>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                textAlign: 'right',
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'start',
                                    alignItems: 'center',
                                    textAlign: 'right',
                                }}
                            >
                                <p style={{ marginLeft: '10px' }}>من الآية</p>
                                <input
                                    type="number"
                                    value={startingAyah}  // Bind the input value to the state
                                    onChange={handleStartingAyahChange}  // Update the starting Ayah
                                    style={{
                                        textAlign: 'center',
                                        background: 'transparent',
                                        fontSize: '14px',
                                        width: '200px',
                                        border: `1px solid rgb(99, 156, 109)`,
                                        color: 'white',
                                        borderRadius: '5px',
                                    }}
                                />
                            </div>
                            <button
                                style={{
                                    color: 'white',
                                    background: 'rgb(99, 156, 109)',
                                    border: 'none',
                                    padding: '5px 15px',
                                    borderRadius: '8px',
                                    textAlign: 'left',
                                    margin: '5px',
                                }}
                                onClick={startHandel}
                            >
                                بدأ
                            </button>
                        </div>
                    </Grid>
                    <div style={{ marginBottom: '60px' }}>
                        <h1
                            id="swara"
                            style={{
                                fontSize: '40px',
                                borderLeft: '6px solid rgb(99, 156, 109)',
                                borderRight: '6px solid rgb(99, 156, 109)',
                                boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                                borderRadius: '20px',
                                padding: '25px',
                            }}
                        >
                            {SwaraTitle}
                        </h1>
                        {id !== 9 && id !== 1 && (
                            <h3 id="swara" style={{ lineBreak: '4' }}>
                                بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ
                            </h3>
                        )}
                    </div>
                    <div
                        style={{
                            color: 'white',
                            padding: '20px',
                            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                            borderRadius: '15px',
                            borderTop: '4px solid rgb(99, 156, 109)',
                            borderBottom: '4px solid rgb(99, 156, 109)',
                            textAlign: 'justify',
                        }}
                    >
                        {/* Show error message if Ayah number is invalid */}
                        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

                        <div id="quran" style={{ color: 'white', display: 'contents', textAlign: 'right' ,lineHeight:"50px" }}>
                            {displayedAyahs.map((ayah, index) => (
                                <div key={index} style={{ display: 'contents' }}>
                                    <p id="ayaa">{ayah.text}</p>
                                    <span> </span>
                                    <img
                                        src={`https://hassanaliabdelhamed.github.io/Ayat_Nunmbers/imgs/a_${ayah.number}.png`}
                                        alt={ayah.number}
                                        style={{
                                            height: '38px',
                                            background: 'transparent',
                                            borderRadius: '50%',
                                            display: 'inline',
                                            marginBottom: '-5px',
                                            transform: 'scale(1.1)',
                                        }}
                                    />
                                    <span> </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}
