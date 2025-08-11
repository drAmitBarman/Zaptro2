import React, { useContext, useEffect } from 'react'
import { DataContext, DataProvider } from '../contex/DataContex'

const Carousel = () => {
    const {data,fetchAllProducts}= useContext(DataContext)
     console.log(data)
     useEffect(()=>{
       fetchAllProducts();
     },[])
  return (
    <div>
      Carousel

    </div>
  )
}

export default Carousel
