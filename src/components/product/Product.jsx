import React, { useEffect, useState } from 'react';
import image from '../images/product.jpg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

function Product() {
    const [products, setProducts] = useState([])

    const { categoryID } = useSelector((store) => {
        return {
            categoryID: store.cart.categoryID
        }
    })

    useEffect(() => {
        logMovies()
    }, [])

    useEffect(() => {
        logMovies()
    }, [categoryID])


    async function logMovies() {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        console.log(categoryID)
        const filterData = data.filter(x => x.categoryId == (categoryID ? categoryID : x.categoryId))

        setProducts(filterData)
    }

    const dispatch = useDispatch()
    const addToBasket = (product) => {
        console.log(product)
        dispatch(addToCart(product))
    }


    return (
        <div className="goods goods--style-1">
            <div className="__inner">
                <div className="row">


                    {
                        products.map((product, index) => (
                            <div key={index} className="col-12 col-sm-6 col-lg-4">
                                <div className="__item">
                                    <figure className="__image">
                                        <img width="188" src={image}
                                            data-src={image} alt="demo" />
                                    </figure>

                                    <div className="__content">
                                        <h4 className="h6 __title"><Link to={`/product/${product.slug}`} >{product.productName}</Link>
                                        </h4>

                                        <div className="__category"><a href="#">{product.categoryName}</a></div>

                                        <div className="product-price">
                                            <span
                                                className="product-price__item product-price__item--new">{product.price}
                                                $</span>
                                        </div>

                                        <div onClick={() => addToBasket(product)} className="custom-btn custom-btn--medium custom-btn--style-1"
                                        ><i className="fontello-shopping-bag"></i>Add to
                                            cart</div>
                                    </div>

                                    <span className="product-label product-label--sale">Sale</span>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </div >

    );
}

export default Product;
