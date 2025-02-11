import React, { useEffect, useState } from 'react';
import Quraa from './Quraa';
import { Typography } from '@mui/material';
import Loading from 'react-loading';
import AutoCompleteReader from './AutoCompleteReader';



function Mui_DrawerSearch() {
  const [loading, setLoading] = useState(true);

  // Function to preload images
  const preloadImages = async () => {
    const imageUrls = Array.from({ length: 107 }, (_, index) =>
      `https://hassanaliabdelhamed.github.io/Quran-Picture/${index + 1}.jpg`
    );
    const imagePromises = imageUrls.map((url) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = resolve; // In case an image fails to load
      });
    });
    await Promise.all(imagePromises);
    setLoading(false); // Set loading to false when all images are ready
  };

  useEffect(() => {
    preloadImages();
  }, []);
  return (
    <>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <Loading type="spin" color="rgb(99, 156, 109)" height={50} width={50} />
        </div>
      ) : (
        <>
          <Typography sx={{ textAlign: 'start', color: 'white', marginBottom: '40px' }} variant="h6" noWrap component="h6">
            أبحث عن الشيخ الذي تريدة ...
          </Typography>
          <AutoCompleteReader/>
          <Quraa />
        </>
      )}
    </>

  )
}



export default Mui_DrawerSearch;