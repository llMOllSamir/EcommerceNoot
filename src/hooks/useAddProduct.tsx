import axios from 'axios'
import React  from 'react'
import { toast } from 'react-hot-toast'
import {useMutation} from 'react-query'
import { Navigate, useNavigate } from 'react-router-dom'

interface valuesProps {
    desc: string
    attr:number |string
    attrValue:string
    disc:number |string
    price:number |string
    quant:number |string
    category : number |string
    name : string
}

let addValues = (obj:valuesProps):object=>{
  let  {desc,attr,attrValue,disc,price,quant,category , name} = obj
 return    {
        description: [
            {
                is_ltr: "true",
                text: desc,
                lang: "en"
            }
        ],
        items: [
            {
                sku_set: [
                    {
                        attribute:Number(attr),
                        attribute_value: attrValue
                    }
                ],
                discount:Number(disc) ,
                price: Number(price),
                quantity:Number(quant) 
            }
        ],
        category: category,
        name: [
            {
                is_ltr: "true",
                text: name,
                lang: "en"
            }
        ]
    }
}

export default function useAddProduct( ):any {
     let onSuccess= ()=>{
        toast.success("Product successfuly Add")
        }
    let headers:object = {
        Authorization :"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NjYxOTc3LCJpYXQiOjE2ODgxMjU5NzcsImp0aSI6IjJhNTgzYzBlMmE5YjQ2ODM4NTBkODgyY2M3ZTE2ZGE0IiwidXNlcl9pZCI6MSwic2NoZW1hX25hbWUiOiJzY2hlbWFfcmJocWVrd2tweXluZXJuZmlrYnl0bmdpIn0.RnKzZHszMi9XbphRn86FKNxYGOssWl-XcKC0Bw4E7yE"
    }
     let baseUrl :string = "https://acad-ecommerce.noot.ae/products/create/"

 const fetchData  = (obj:valuesProps):any=>{
    let values : object = addValues(obj)
    return axios.post(`${baseUrl}`,values,{headers})
 } 

 return useMutation( fetchData ,{
    onSuccess ,
   }
  )

}
