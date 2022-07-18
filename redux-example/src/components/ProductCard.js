import React from 'react'
import { useSelector } from 'react-redux'
const ProductCard = () => {
    const products = useSelector((state) => state.allProducts.products)
    console.log(products)
  return (
    <>
    <div className='card'>
       {
       
       }
    </div>
    </>
  )
}

export default ProductCard