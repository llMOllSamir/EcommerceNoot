import React ,{useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useGetData from '../../hooks/useGetData'
import Loader from '../Loader/Loader'
import { Badge,CardActions, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography  ,Button } from '@mui/material'
import useDeleteProduct from '../../hooks/useDeleteProduct'
  
export default function ProductDetails() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(!open);
  const {id} = useParams()
  let {isLoading , data , isError , error } = useGetData(`products/${id}`)
  let {isLoading:isDelting , mutate}= useDeleteProduct()
  let navigate = useNavigate()
  if(isLoading){
    return <>
    <Loader/>
    </>}
  
    if(isError){
      return <h1 style={{margin:"200px 0 0 0 "}}>Product Not Found </h1>}

  
  return (
    < >
    <Container maxWidth={"lg"} sx={{mt:"130px"}}>
    <Card raised sx={{my:"48px"}}>
          <CardActionArea>
            <Grid container spacing={2} >
              <Grid item xs={12} md={6} lg={4} >
              <CardMedia sx={{p:"10px"}}  component={"img"} height={"400px"}   image={data?.data?.items[0]?.images_set[0]? data?.data?.items[0]?.images_set[0]:"https://www.aibl.com.bd/wp-content/themes/aiblTheme/images/feature-product-img-2-new.png"} alt="product"/>
              </Grid>
              <Grid item xs={12} md={6} lg={8}>
              <CardContent>
                <Typography variant='h5' component={"h5"}> <Badge  component='h4' sx={{my:2}} >Name</Badge> :  {data?.data?.name[0]?.text} .</Typography> 
                <Typography variant='h6' component={"h6"}> <Badge  component='h3' sx={{my:2}}  >Price</Badge> :  {data?.data?.items[0]?.price} EGP .</Typography> 
                <Typography variant='h6' component={"h6"}> <Badge  component='h3' sx={{my:2}}  >Description</Badge> :  {data?.data?.description[0]?.text} .</Typography> 
                <Typography variant='h6' component={"h6"}> <Badge  component='h3' sx={{my:2}}  >Color</Badge>
                 :  {data?.data?.items[0]?.sku_set[0]?.attribute_name ==="color" &&data?.data?.items[0]?.sku_set[0]?.attribute_value } .</Typography> 
                 <Typography variant='h6' component={"h6"}> <Badge  component='h3' sx={{my:2}}  >Size</Badge>
                 :  {data?.data?.items[0]?.sku_set[0]?.attribute_name ==="size" &&data?.data?.items[0]?.sku_set[0]?.attribute_value } .</Typography> 
              </CardContent>
              <CardActions sx={{mx:"20px",display:"flex",justifyContent:"flex-end"}}>
              <Button onClick={()=>{mutate(id)}} size="medium" variant='contained'  color="error">
              {isDelting? <><div className="spinner"></div></> :"Delete Product"}
              </Button>
              <Button onClick={handleOpen} size="medium" variant='contained' color="warning">
              Update Product
              </Button>
               <Button sx={{position:"absolute",top:"0",right:"0",m:5}} onClick={()=>{navigate("/products")}} size="small" variant='contained'  color="secondary">
                Back
              </Button>
              </CardActions>
              </Grid>
            </Grid>
          </CardActionArea>
        </Card>
    </Container>
    </>
  )
}
