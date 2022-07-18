import React, {useEffect} from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';
import  {useDispatch} from 'react-redux';
import { setProducts } from '../redux/actions/productActions';

const ProductList = () => {
const dispatch = useDispatch();

    const fetchProducts = async()=>{
        const response = await axios.get('https://fakestoreapi.com/products').catch((error)=>{
            console.log("Error is: ", error);
        })

       dispatch(setProducts(response.data))
    }

    useEffect(() => {
     fetchProducts();
    }, [])
    
  return (
    <div className='productList'> 
        <ProductCard />
    </div>
  )
}

export default ProductList