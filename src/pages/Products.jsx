import React, { useEffect } from 'react'
import { getData } from '../contex/DataContex'
import ProductsCart from '../component/ProductsCart'

const Products = () => {
   const {data,fetchAllProducts}= getData()
  
   useEffect(()=>{
    fetchAllProducts()
   })

  return (
    <div >
      <div className='max-w-6xl mx-auto px-4 mb-10'>
         {
           data?.length >0 ?(
            <div>
              <div className='grid grid-cols-4 gap-7 mt-10'>
                {
                  data?.map((product,index)=>{
                    return <ProductsCart key={index} product={product}/>
                  })
                }
              </div>
            </div>
           ) :(
            <div>

            </div>
           )
         }
      </div>
    </div>
  )
}

export default Products
