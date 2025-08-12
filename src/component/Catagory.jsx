import React, { useEffect } from 'react'
import {  getData } from '../contex/DataContex'

const Catagory = () => {
    const {data,fetchAllProducts}=getData()

    const getUniqueCategory =(data, property) =>{
            let newVAl =data?.map((curElem) =>{
                return curElem[property]
            })
            return newVAl= [...new Set(newVAl)]
    }

  const CatagoryOnlyData=getUniqueCategory(data,"category")
  console.log(CatagoryOnlyData)

  useEffect(()=>{
    fetchAllProducts()
  },[])
  return (
    <div>
      
    </div>
  )
}

export default Catagory
