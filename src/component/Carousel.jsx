import React, { useContext, useEffect } from 'react'
import { DataContext, DataProvider } from '../contex/DataContex'

const Carousel = () => {
    const {fetchAllProducts}= useContext(DataContext)
    useEffect(()=>{
        fetchAllProducts()
    },[])
  return (
    <div>
      Carousel

    </div>
  )
}

export default Carousel
