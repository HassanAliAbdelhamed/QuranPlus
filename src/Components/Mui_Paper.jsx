import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import headImage from '../Imgs/head.png'

export default function ActionAreaCard(props) {
  return (
    <Card sx={{
      '&::before': {
      content: '""',
      zIndex:'10',
      position: "absolute",
      top: "70%",
      left: "75%",
      transform: "translate(-50%, -50%)",
      fontSize: "24px",
      color: "rgba(0, 0, 0, 0.7)",
      width: "100px",
      height: "100px",
      backgroundImage: `url(${headImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: 0,
      transition: "opacity 0.3s",
    },
    '&:hover': {
      backgroundColor: "rgb(39, 41, 47)",
      transform: "scale(1.07)",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
      '&::before': {
        opacity: 1,
      },
    }, width: 165, backgroundColor: "#373535", borderRadius: "14px", transition: ".25s", height: 210, marginTop: "15px", background: "transparent", cursor: "pointer", position: "relative"
    }}>
      <CardActionArea sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center" }}>
        <CardMedia
          component="img"
          sx={{ borderRadius: "10%", width: 145, height: 170 }}
          image={props.imgSource}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" color="white" component="div">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
