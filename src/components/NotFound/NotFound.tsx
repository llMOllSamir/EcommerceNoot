import { Button, Grid , Typography } from '@mui/material'
import React ,{ReactElement} from 'react'
import { useNavigate } from 'react-router-dom'
import Svg from '../SVG/SVG'

export default function NotFound() : ReactElement {
  let navigate = useNavigate()
  return (
    <>
    <Svg/>
      <Grid container direction={"column"} sx={{height:"70vh"}} justifyContent={"center"} alignItems={"center"} >
        <Typography variant='h2' component={"h1"} >
          This page is not Found 
        </Typography>
        <Button variant='contained' size='large' sx={{mt:"48px"}} color='secondary' onClick={()=>{navigate("/")}}>Home</Button>
      </Grid>
    </>
  )
}
