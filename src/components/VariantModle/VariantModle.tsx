import { Box,Icon, FormControl, InputLabel, Modal,Button, Select,MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import useGetData from '../../hooks/useGetData';
import Loader from '../Loader/Loader';

export default function VariantModle({formik,open,handleOpen}:any) {

  let {isLoading,data} = useGetData("products/variants/attribute")

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:"40%",
    bgcolor: 'background.paper',
     boxShadow: 24,
    p: 4,
  };

  if(isLoading){
    return <Loader/>
  }
  return (
    <>
       <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
            <Icon sx={{position:"absolute",right:0 ,mx:5,cursor:"pointer"}}><i className='fa fa-solid fa-close' onClick={handleOpen}></i></Icon>
        <Typography variant='h6' component={"h6"}>Create Variant</Typography>
        <FormControl fullWidth >
          <Box sx={{display:"flex",justifyContent:"space-around",alignItems:"center",my:2}}>
          <FormControl sx={{width:"50%"}}>
            <InputLabel  id="demo-simple-select-label"></InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="attr"
              name='attr'
              value={formik.values.attr}
              label="Category"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {data?.data?.results.map((selected:any)=> <MenuItem key={selected?.id} value={selected?.id}>{selected?.name}</MenuItem>)}
            </Select>
      </FormControl>

    <TextField
         id="attrValue"
        name="attrValue"
          variant="outlined"
        label="Product Description"
        value={formik.values.attrValue}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.attrValue && Boolean(formik.errors.attrValue)}
        helperText={formik.touched.attrValue && formik.errors.attrValue}
      />
      
          </Box>
          <TextField
         id="price"
         sx={{my:1}}
        name="price"
        variant="outlined"
        label="Price"
        type='tel'
        value={formik.values.price}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.price && Boolean(formik.errors.price)}
        helperText={formik.touched.price && formik.errors.price}
      />

       <TextField
         id="discount"
         sx={{my:1}}
        name="disc"
        variant="outlined"
        label="Discount"
        type='tel'
        value={formik.values.disc}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.disc && Boolean(formik.errors.disc)}
        helperText={formik.touched.disc && formik.errors.disc}
      />

<TextField
         id="quant"
         sx={{my:1}}
        name="quant"
        variant="outlined"
        label="Quantity"
        type='tel'
        value={formik.values.quant}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.quant && Boolean(formik.errors.quant)}
        helperText={formik.touched.quant && formik.errors.quant}
      />
        <Button component={"button"} variant='contained' onClick={handleOpen} color='success' fullWidth > Save </Button>
        </FormControl>
        </Box>
          
      </Modal>
    </>
  )
}
