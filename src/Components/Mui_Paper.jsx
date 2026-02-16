import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import headImage from '../Imgs/head.png'

export default function ActionAreaCard(props) {
  const [isHovered, setIsHovered] = React.useState(false);

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
      <CardActionArea 
        sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center", position: "relative" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <CardMedia
            component="img"
            sx={{ borderRadius: "10%", width: 145, height: 170 ,border:"2px solid green" }}
            image={props.imgSource}
            alt={props.title}
          />
          {props.category && (
            <div style={{
              position: "absolute",
              top: "8px",
              left: "8px",
              background: isHovered 
                ? "linear-gradient(90deg,rgba(195, 34, 34, 0.49) 0%, rgba(45, 253, 52, 0.39) 100%)"
                : "linear-gradient(90deg,rgba(195, 34, 34, 0.49) 0%, rgba(45, 253, 52, 0.39) 100%)",
              color: "white" ,
              padding: "5px",
              borderRadius: "8px",
              fontSize: "8px",
              fontWeight: "700",
              letterSpacing: "0.5px",
              boxShadow: isHovered
                ? "0 6px 20px rgba(99, 156, 109, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
                : "0 4px 16px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(99, 156, 109, 0.3)",
              maxWidth: "125px",
              textAlign: "center",
              lineHeight: "1.3",
              zIndex: 20,
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              textTransform: "capitalize",
              whiteSpace: "normal",
              wordWrap: "break-word",
              backdropFilter: "blur(10px)",
              cursor: "pointer"
            }}>
             {props.category}
            </div>
          )}
        </div>
        <CardContent>
          <Typography gutterBottom variant="h7" color="white" component="div">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
