import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../css/style.css';
import React from 'react';
import { Avatar, FormControl, MenuItem, Select } from '@mui/material';
import Sound1Img from "../Imgs/1.jpg"
import Sound2Img from "../Imgs/2.jpg"
import ToggleButtons from './ToglleOptions';

function ReadSound(props) {
    const [value, setValue] = React.useState(1);    
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    let Sound1
    let Sound2
    if(props.Sound)
    {
        Sound1=props.Sound["1"]
        Sound2=props.Sound['2']
    }
    return (
        <>
            
            <div style={{ position: "sticky", bottom: "5px" }}>
            <ToggleButtons knowFuction={props.knowFuction}/>
                <div style={{ position: "absolute", left: "-4px", bottom: "5px" ,marginTop:"15px" }}>
                <FormControl fullWidth>
                <Select
                    value={value}
                    onChange={handleChange}
                    displayEmpty
                    inputProps={{
                        name: 'age',
                        id: 'controlled-select',
                    }}
                >
                    <MenuItem value={1}>
                        <Avatar alt="Sound 1" src={Sound1Img} style={{ marginRight: '10px' }} />
                    </MenuItem>
                    <MenuItem value={2}>
                        <Avatar alt="Sound 2" src={Sound2Img} style={{ marginRight: '10px' }} />
                    </MenuItem>
                </Select>
            </FormControl>  
                </div>

                <AudioPlayer
                    style={{ direction: "ltr", background: '#27292f', borderRadius: '14px', bottom: '5px', left: '0' }}
                    loop={true}
                    showJumpControls
                    src={value===1? Sound1  :Sound2}

                />
            </div>
        </>
    )
}
export default ReadSound;