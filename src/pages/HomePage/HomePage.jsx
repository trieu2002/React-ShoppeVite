import React from 'react'
import HeaderSlider from '../../components/slider/HeaderSlider';
import "./HomePage.scss";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductList from '../../components/ProductList/ProductList';
import { fetchAsyncProduct } from '../../stores/productSlice';
import { STATUS } from '../../utils/status';
const HomePage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncProduct(50))
    }, [])
    const { products } = useSelector(data => data.product.product);
    console.log(products);
    return (
        <main>
            <div className="slider-wrapper py-3">
                <HeaderSlider />
            </div>
            <div className="main-centent bg-whitesmoke">
                <div className="container">
                    <div className="categories py-5">
                        <div className="categories-item">
                            <div className="title-md">
                                <h3>See Our Products</h3>

                            </div>
                            <ProductList products={products} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage
    