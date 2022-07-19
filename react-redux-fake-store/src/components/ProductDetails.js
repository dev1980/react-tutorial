import React, {useEffect} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProduct } from '../redux/actions/productActions';

const ProductDetails = () => {
    const dispatch = useDispatch();
    const product = useSelector((state) =>state.product)
    const {image, title, price, category, description} = product
    console.log(description)
const {productId} = useParams();
console.log(productId)
    const fetchProductDetails = async(id) => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((error)=> {console.log("error is", error )
    });
    console.log(response)
    dispatch(selectedProduct(response.data))
    };

    useEffect(()=>{
        if(productId && productId !== "") {
            fetchProductDetails(productId)
        }
    }, [productId])

  return (
    <div className='cardDetails container'>
        <div className='image'><img src={image} alt={title} /></div>
        <div className='card__text'>
            <h3>{title}</h3>
            <p>${price}</p>
            <p>{category}</p>
            <p>{description}</p>
        </div>
        
    </div>
  )
}

export default ProductDetails