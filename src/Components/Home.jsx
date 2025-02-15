import * as React from 'react';
import {  Grid } from '@mui/material';
import '../css/home.css';
import CardOfSwar from './CardOfSwar';
import AutoCompleteSwarRead from './AutoCompleteSwar';
import AutoCompleteReader from './AutoCompleteReader';
import AllSwar from '../AllSwar';
export default function Home() {
    const swar = AllSwar;
    return (        
            <>
            <h1 style={{color:"white" ,fontSize:"40px"}}>قرآن +</h1>
            <Grid container spacing={2} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Grid sx={{ color: "white" }} item xs={4} >
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