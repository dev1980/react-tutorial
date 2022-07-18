import React, {useEffect} from 'react'
import ProductCard from './ProductCard';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions';
import { useSelector, useDispatch } from 'react-redux';
const ProductList = () => {
const dispatch = useDispatch()
    const fetchProduct = async()=> {
        const response = await axios.get('https://fakestoreapi.com/products').catch((error)=>{
            console.log("display error: ", error)
        })
        dispatch(setProducts(response))
    }
   
    useEffect(()=>{
        fetchProduct()
    }, [])

  return (
    <>
    <ProductCard />
    </>
  )
}

export default ProductList