import React, { ReactElement , useState ,ChangeEvent} from 'react'
import useGetData from '../../hooks/useGetData'
import Loader from '../Loader/Loader'
import {  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper ,Typography,Container, TableFooter, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ProductModel from '../ProductModel/ProductModel';


export default function Products(): ReactElement {
   let {isLoading , data , isError , error } = useGetData("products")
   let [isAdding,setAdding] = useState<boolean>(false)

   let navigate = useNavigate()
    
   const handelModle = () : void=>{
    setAdding(!isAdding)
   }
  
  if(isLoading){
    return <>
    <Loader/>
    </>}
  
    if(isError){
      return <h1 style={{margin:"200px 0 0 0 "}}>  {error.message}</h1>}
 
      
  return (
    < >
    <Container maxWidth={"xl"} sx={{mt:"130px"}} >
    {isAdding ? <ProductModel handelModle = {handelModle} />:<>
      <Grid container justifyContent={"space-between"}>
      <Typography variant='h4' gutterBottom component={"h1"} >Products</Typography>
      <Button component={"button"} onClick={handelModle} size='large' variant="contained" color='secondary' >Add Product</Button>
      </Grid>
    <TableContainer sx={{my:"20px"}} component={Paper}>
      <Table component={"table"}  >
        <TableHead>
          <TableRow >
            <TableCell sx={{textAlign:"center"}}>Name</TableCell>
            <TableCell sx={{textAlign:"center"}} >Description</TableCell>
            <TableCell sx={{textAlign:"center"}} >Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.data?.results && data?.data?.results.map((product:any) => 
            <TableRow onClick={()=>{navigate(`/product/${product?.id}`)}}  sx={{cursor:"pointer" }} hover key={product?.id}>
              <TableCell sx={{textAlign:"center"}}>{product?.name[0].text}</TableCell>
              <TableCell sx={{textAlign:"center"}} >{product?.description.map((text:any)=> <span>{text.text}</span> ) }</TableCell>
              <TableCell sx={{textAlign:"center"}}><Typography variant='body1'>Puplishe on</Typography> <Typography variant='body2' color={"gray"} paragraph>{product?.created_at.split(":").splice(0,1).join("")}</Typography>  </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
       
    </TableContainer></>}
    
    </Container>
    </>
  )
} 
