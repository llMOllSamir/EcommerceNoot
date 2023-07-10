import React, { ReactElement, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppBar,Box, Toolbar, Typography,  IconButton, Drawer, List, ListItem, ListItemText , Grid , Container  } from '@mui/material';
import Icon from '@mui/material/Icon';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';


export default function NavBar() : ReactElement {
  const [handleDrawer,setHandleDrawer] = useState<boolean>(false)
  const theme = useTheme()
  let navigate = ( url:string) :void =>{
    window.open(url)
  }

  let navegator = useNavigate()

  let handleNavDeawer = () : void=>{
    setHandleDrawer(!handleDrawer)
  }
  
  return (
    <>
    <AppBar color='transparent' >
      <Container maxWidth= {false} >
        <Grid container justifyContent={"center"} columnSpacing={25} p={"5px 10px"} sx={{bgcolor:"#9c5bf5"}}  >
          <Grid item lg={6}  alignItems={"center"}  >
            <Icon  sx={{color:"white",fontSize:"20px",cursor:"pointer" }}>
              <i className='fa fa-brands fa-facebook-f' onClick={()=>{navigate("https://www.facebook.com/profile.php?id=100082859111033")}}>
                </i></Icon>
                <Icon  sx={{color:"white",fontSize:"20px",cursor:"pointer" , mx:"10px" }}>
              <i className='fa fa-brands fa-github' onClick={()=>{navigate("https://github.com/llMOllSamir")}}>
                </i></Icon>
                <Icon   sx={{color:"white",fontSize:"20px",cursor:"pointer" }}>
              <i className='fa fa-brands fa-linkedin-in' onClick={()=>{navigate("https://www.linkedin.com/in/mohamed-samir-a7693b274/")}}>
                </i></Icon>
          </Grid>
          <Grid item lg={6}   display={"flex"} justifyContent={"center"} >

              <Box display={"flex"} alignItems={"center"} gap={1} mx={2} sx={{color:"white",fontSize:"16px",cursor:"pointer" }}>
                <Icon  >
              <i className='fa-brands fa-whatsapp'></i></Icon> +2-01280025507  </Box>
              <Box display={"flex"} alignItems={"center"} gap={1} mx={2} sx={{color:"white",fontSize:"16px",cursor:"pointer",textDecoration:"underline" }}>
              <Icon >
              <i className='fa-brands fa-google'></i></Icon> mohamedsamirelshami@gmail.com  </Box>
          </Grid>
        </Grid>
        <Toolbar>
          <Grid container  textAlign={"center"} mx={"auto"} >
            <Grid item xs={6}  md={4} sm={6}    lg={4}>
            <Typography variant="h5" component="div" >
            E-Commerce
          </Typography>
            </Grid>

             <Grid component={"nav"} md={8} sm={6} sx={{[theme.breakpoints.down('sm')]: { display: 'none'}}} item display={"flex"} justifyContent={'center'} alignItems={"center"} lg={8}>
             
                 <NavLink className={"navLink"} to={"/"}>Home</NavLink>
                 <NavLink className={"navLink"} to={"/products"}>Products</NavLink>
                 <NavLink className={"navLink"} to={"/blog"}>Blog</NavLink>
                 <NavLink className={"navLink"} to={"/Contact"}>Contact</NavLink>
                 <NavLink className={"navLink"} to={"/shop"}>Shop</NavLink>
                
            </Grid>
            
             <Grid item  sx={{[theme.breakpoints.up('sm')]: { display: 'none'}}} xs={6} textAlign={"right"}>
            <IconButton  edge="start"   color="inherit" onClick={handleNavDeawer} >
            <MenuIcon  />
            </IconButton>
            </Grid>
          </Grid>          
         </Toolbar>
      </Container>
    </AppBar>
       <Drawer anchor="top" open={handleDrawer} onClose={handleNavDeawer}>
        <List>
          <ListItem button onClick={handleNavDeawer}>
            <ListItemText primary="Home" onClick={()=>{navegator("/")}} />
          </ListItem>
          <ListItem button onClick={handleNavDeawer}>
            <ListItemText primary="Products" onClick={()=>{navegator("/products")}} />
          </ListItem>
          <ListItem button onClick={handleNavDeawer}>
            <ListItemText primary="Blog" onClick={()=>{navegator("/blog")}} />
          </ListItem>
          <ListItem button onClick={handleNavDeawer}>
            <ListItemText primary="Contact" onClick={()=>{navegator("/Contact")}} />
          </ListItem>
          <ListItem button onClick={handleNavDeawer}>
            <ListItemText primary="Shop" onClick={()=>{navegator("/Shop")}} />
          </ListItem>
        </List>
      </Drawer>
    </>
  )
}
