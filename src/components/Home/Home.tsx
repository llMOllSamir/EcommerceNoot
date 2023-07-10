import {   Container, Grid, Typography  } from '@mui/material';
import React, { ReactElement } from 'react';
import Svg from '../SVG/SVG';
var logo = require("../../images/home.png")

export default function Home() : ReactElement {
  return (
    <>
    <Svg/>
    <Container maxWidth="xl" className='outlet' component={"div"}>

    <Grid container columnSpacing={12} alignItems={"center"} height={"100%"} >
      <Grid item  lg={6}   >
        <Typography  variant='h1' color={"secondary"}>
          ‘ Hi ’
        </Typography>
        <Typography variant='h4' paragraph>
          Welcome to The best Online Shopping ,
        </Typography>
        <Typography variant='h5' paragraph>
        we hope that you find what you searching about.
        </Typography>
      </Grid>
      <Grid   item lg={6} >
      <img src={logo}  className='home-img' alt="hi" />
      </Grid>
    </Grid>
    
       

    </Container>
    </>
  )
}
