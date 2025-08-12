import axios from "axios"
import  {createContext, useContext, useState} from "react"

export const DataContext= createContext(null)
export const DataProvider =({ children})=>{
const [data,setData]=useState()

//    fetching data from products from api
    const fetchAllProducts = async ()=>{

        try {
            const res =await axios.get('https://fakestoreapi.in/api/products?limit=150')
            console.log(res)
            const productsdata=res.data.products
            setData(productsdata)
        } catch (error) {
            
        }
    }

return <DataContext.Provider value={{data,setData,fetchAllProducts}}>
             {children}
     </DataContext.Provider>

}
export  const getData= ()=> useContext()