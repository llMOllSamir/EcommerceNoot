import React, { ReactElement, ReactNode } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';


export default function Footer():ReactElement {
   function Copyright() :ReactElement {
    return (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" className="nav-link" to={"/"} >
          Ecommerce Task
        </Link>   
        {new Date().getFullYear()}
      </Typography>
    );
  }
  const defaultTheme = createTheme();

  return (
     <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width:"100%"
        }}
      >
 
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mx:"0",
            mt: 'auto',
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[800],
          }}
        >
          <Container maxWidth="sm" sx={{display:"flex",flexDirection:"column",textAlign:"center"}}>
            <Typography variant="body1">
                Make it Easy and Shopping Online 
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}
