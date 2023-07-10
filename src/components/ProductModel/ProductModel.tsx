import React ,{useState} from 'react'
import {Card,Button, Container, TextField ,FormControl,Typography,MenuItem ,SelectChangeEvent ,Icon , InputLabel, Select} from '@mui/material'
import useAddProduct from '../../hooks/useAddProduct'
import { useFormik } from 'formik'
import useGetData from '../../hooks/useGetData'
import Loader from '../Loader/Loader'
import VariantModle from '../VariantModle/VariantModle'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export default function ProductModel({handelModle}:{handelModle:()=> void}) {
  let navigate = useNavigate()
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(!open);

  let {mutate , isLoading , data , error ,isError} = useAddProduct()

  let {isLoading:selectorLoder, data:selectorData}= useGetData("category")
  
  if(data){
    navigate(`/product/${data?.data.id}`)
  }
  
 

  let formik = useFormik({
    initialValues:{
      desc:"",
      attr:"",
      attrValue:"",
      disc:"",
      price:"",
      quant:"",
      category:"",
      name:""
      },
       onSubmit:(values)=>{mutate(values)}
  })

  if(selectorLoder){
    return <Loader/>
  }
   
  return (
    < > 
     <Container maxWidth={"md"} sx={{mt:"130px"}}>
          <form onSubmit={formik.handleSubmit}>
        <Card raised  sx={{p:"20px",position:"relative"}}>
        <Icon sx={{position:"absolute",right:0 ,mx:5,cursor:"pointer"}}><i className='fa fa-solid fa-close' onClick={handelModle}></i></Icon>
            <Typography variant='h5' my={5} color={"gray"} component="h3" >Create New Product :</Typography>
          <FormControl fullWidth>
          <TextField
        id="name"
        name="name"
        sx={{my:3}}
        label="Product Title"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />
       <TextField
         id="desc"
        name="desc"
        sx={{my:2,height:"100px"}}
        rows={4}
        variant="outlined"
        label="Product Description"
        value={formik.values.desc}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.desc && Boolean(formik.errors.desc)}
        helperText={formik.touched.desc && formik.errors.desc}
      />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel  id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="category"
              value={formik.values.category}
              name='category'
              label="Category"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.category && Boolean(formik.errors.category)}
            >
              {selectorData?.data?.results.map((selected:any)=> <MenuItem key={selected?.id} value={selected?.id}>{selected?.name}</MenuItem>)}
            </Select>
      </FormControl>
        </Card>
        <Card raised  sx={{p:"20px",my:3,display:"flex",justifyContent:"space-between"}}>
          <Typography component={"h3"} variant='h5'>Variants</Typography>
          <VariantModle formik = {formik} open={open} handleOpen={handleOpen} />
          <Button size="small"component={"button"} color='primary' onClick={handleOpen}  variant='contained' >Add Variant</Button>
        </Card>
        <Button disabled={!formik.dirty} sx={{my:5, width:"100%",mx:"auto"}} variant='contained' component={"button"} color='secondary' type="submit">{isLoading? <><div className="spinner"></div></> :"Create Product"}</Button>
          </form>
      </Container> 
    </>
  )
}
