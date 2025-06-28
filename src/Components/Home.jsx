import * as React from "react";
import { Grid } from "@mui/material";
import "../css/home.css";
import CardOfSwar from "./CardOfSwar";
import AutoCompleteSwarRead from "./AutoCompleteSwar";
import AutoCompleteReader from "./AutoCompleteReader";
import AllSwar from "../AllSwar";
import Loading from "react-loading";
import HeadIcon from '../Imgs/homeIconImage.png'
import TopbarIcon from '../Imgs/Home (1).png'

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  // Function to preload images
  const preloadImages = async () => {
    const imageUrls = Array.from(
      { length: 107 },
      (_, index) =>
        `https://hassanaliabdelhamed.github.io/Quraa-Picture/Pictures/${
          index + 1
        }.jpg`
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

  React.useEffect(() => {
    preloadImages();
  },[]);

  const swar = AllSwar;
  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            flexDirection:"column",
            position:"relative"
          }}
        >
          <img src={HeadIcon} alt="Loading Image" style={{width:"250px" ,height:"250px"}} />
          <Loading
            type="spin"
            color="rgb(99, 156, 109)"
            height={50}
            width={50}
          />
        </div>
      ) : (
        <>
          <img src={TopbarIcon} alt="Loading Image" style={{width:"265px" ,marginBottom:"45px",}} />
          {/* <h1 style={{ color: "white", fontSize: "40px" }}>قرآن +</h1> */}
          {/* <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid sx={{ color: "white" }} item xs={4}>
              <AutoCompleteSwarRead Dir="read" Label="قراءة" />
            </Grid>
            <Grid sx={{ color: "white" }} item xs={4}>
              <AutoCompleteSwarRead Dir="tasmee3" Label="تسميع" />
            </Grid>
            <Grid sx={{ color: "white" }} item xs={4}>
              <AutoCompleteReader />
            </Grid>
          </Grid> */}

          <Grid
            container
            sx={{ width: "100%", position: "relative", marginTop: "20px" }}
          >
            {swar.map((qara) => (
              <Grid item xs={12} sm={4} xl={3} gap={1} key={qara.id}>
                <CardOfSwar title={qara.title} Id={qara.id} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </>
  );
}
