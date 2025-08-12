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
    <div className='bg-[#101829]'>
        <div className='max-w-7xl mx-auto flex gap-4 items-center justify-around py-7 px-4'>
            {
                CatagoryOnlyData.map((item,index)=>{
                    return <div key={index}>
                        <button className='uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer'>{item}</button>
                    </div>
                })
            }
        </div>      
    </div>
  )
}

export default Catagory
