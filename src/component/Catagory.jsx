import React from 'react'
import {  getData } from '../contex/DataContex'

const Catagory = () => {
    const {data}=getData()

    const getUniqueCategory =(data, property) =>{
            let newAl =data?.map((curElem) =>{
                return curElem[property]
            })
    }
  const CatagoryOnlyData=getUniqueCategory(data,"category")
  return (
    <div>
      
    </div>
  )
}

export default Catagory
