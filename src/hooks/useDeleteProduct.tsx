import axios from 'axios'
import React  from 'react'
import { toast } from 'react-hot-toast'
import {useMutation} from 'react-query'
import { useNavigate } from 'react-router-dom'



export default function useDeleteProduct():any {
    let navigate = useNavigate()
    let onSuccess= ()=>{
        toast.success("Product Deleted")
        navigate("/products")
        }
    let headers:object = {
        Authorization :"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NjYxOTc3LCJpYXQiOjE2ODgxMjU5NzcsImp0aSI6IjJhNTgzYzBlMmE5YjQ2ODM4NTBkODgyY2M3ZTE2ZGE0IiwidXNlcl9pZCI6MSwic2NoZW1hX25hbWUiOiJzY2hlbWFfcmJocWVrd2tweXluZXJuZmlrYnl0bmdpIn0.RnKzZHszMi9XbphRn86FKNxYGOssWl-XcKC0Bw4E7yE"
    }
     let baseUrl :string = `https://acad-ecommerce.noot.ae/products/change/`

 const fetchData  = (id:number):any=>{
    return axios.delete(`${baseUrl}/${id}`,{headers})
 } 

 return useMutation(fetchData,{
    onSuccess
 })

}
