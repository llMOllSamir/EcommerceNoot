import axios from 'axios'
import React  from 'react'
import {useQuery} from 'react-query'



export default function useGetData(data:string):any {
    
    let headers:object = {
        Authorization :"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NjYxOTc3LCJpYXQiOjE2ODgxMjU5NzcsImp0aSI6IjJhNTgzYzBlMmE5YjQ2ODM4NTBkODgyY2M3ZTE2ZGE0IiwidXNlcl9pZCI6MSwic2NoZW1hX25hbWUiOiJzY2hlbWFfcmJocWVrd2tweXluZXJuZmlrYnl0bmdpIn0.RnKzZHszMi9XbphRn86FKNxYGOssWl-XcKC0Bw4E7yE"
    }
     let baseUrl :string = "https://acad-ecommerce.noot.ae/"

 const fetchData  = ():any=>{
    return axios.get(`${baseUrl}/${data}?limit=1000`,headers)
 } 

 return useQuery(`${data}`,fetchData)

}
