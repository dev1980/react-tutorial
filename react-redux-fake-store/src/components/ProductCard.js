import React from 'react'
import { useSelector } from 'react-redux';

const ProductCard = () => {
  const products = useSelector((state) =>state.allProducts.products)
  console.log(products)
 let renderList =  products.map((product)=>{
    const {id, title, image, price, category} = product;
    return (
      <div className='card' key={id}>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{category}</p>
      <p>${price}</p>
      </div>
    )
  })
  return (
    <>
   
      {renderList}
    
    </>
  )
}

export default ProductCard;