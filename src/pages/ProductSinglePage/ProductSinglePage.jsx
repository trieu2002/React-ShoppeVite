import React,{useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {fetchAsyncProductSingle} from '../../stores/productSlice';

const ProductSinglePage = () => {
    const {id}=useParams();
    console.log(id);
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(fetchAsyncProductSingle(id))
    },[id])
    const data=useSelector(data=> data);
    console.log(data);
    return (
        <div>ProductSinglePage</div>
    )
}

export default ProductSinglePage