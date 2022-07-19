import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom"

const ProductCard = () => {
  const products = useSelector((state) =>state.allProducts.products)

 let renderList =  products.map((product)=>{
    const {id, title, image, price, category} = product;
    
    return (
      <Link to={`/product/${id}`}>
      <div className='card' key={id}>
      <img src={image} alt={title} />
      <h4>{title}</h4>
      <p>{category}</p>
      <p>${price}</p>
      </div>
      </Link>
    )
  })
  
  return (
    <>
   
      {renderList}
    
    </>
  )
}

export default ProductCard;