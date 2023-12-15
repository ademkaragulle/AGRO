import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import image from '../images/product.jpg';
import Slider from '../slider/Slider';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

function ProductDetail() {
    const { slug } = useParams("slug");
    const [product, setProduct] = useState("")
    const [countValue, setCountValue] = useState(1)


    useEffect(() => {
        logMovies()
    }, [slug])



    async function logMovies() {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();

        const data1 = await data.find(x => x.slug == slug)

        setProduct(data1)
    }

    const dispatch = useDispatch()
    const addProduct = (item) => {
        dispatch(addToCart(item))
    }


    return (
        <>
            <Slider />
            <main role="main">
                <link rel="stylesheet" href="css/style.min.css" type="text/css" />
                <section className="section">

                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-12">
                                <div className="product-single">
                                    <div className="row">
                                        <div className="col-12 col-lg-7">
                                            <div className="__product-img">
                                                <img width={330}
                                                    src={image}
                                                    alt="demo" />
                                                <span className="product-label product-label--new">New</span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-5">
                                            <div className="content-container">
                                                <h3 className="__name">{product.productName}</h3>
                                                <div className="__categories">
                                                    Category:
                                                    <span>Vegetables</span>
                                                </div>
                                                <div className="product-price">
                                                    <span className="product-price__item product-price__item--new">{product.price} $</span>
                                                </div>
                                                <div className="rating">
                                                    <span className="rating__item rating__item--active"><i
                                                        className="fontello-star" /></span>
                                                    <span className="rating__item rating__item--active"><i
                                                        className="fontello-star" /></span>
                                                    <span className="rating__item rating__item--active"><i
                                                        className="fontello-star" /></span>
                                                    <span className="rating__item rating__item--active"><i
                                                        className="fontello-star" /></span>
                                                    <span className="rating__item"><i
                                                        className="fontello-star" /></span>
                                                </div>
                                                <p>{product.desc}</p>
                                                <div className="__add-to-cart" >
                                                    <div className="quantity-counter js-quantity-counter">
                                                        <span onClick={() => setCountValue(countValue != 1 ? countValue - 1 : countValue)} className="__btn __btn--minus" />
                                                        <input className="__q-input" type="text" value={countValue} />
                                                        <span onClick={() => setCountValue(countValue + 1)} className="__btn __btn--plus" />
                                                    </div>
                                                    <button
                                                        onClick={() => addProduct(product)}
                                                        className="custom-btn custom-btn--medium custom-btn--style-1"
                                                    ><i
                                                            className="fontello-shopping-bag" />Add to Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="spacer py-5 py-md-9" />
                                            <div className="tab-container">
                                                <nav className="tab-nav">
                                                    <a>Description</a>
                                                </nav>
                                                <div className="tab-content">
                                                    <div className="tab-content__item is-visible">
                                                        <p>
                                                            The generated Lorem Ipsum is therefore always free from
                                                            repetition injected humour, or non-characteristic words
                                                            etc. Susp endisse ultricies nisi vel quam suscipit
                                                        </p>
                                                        <p>
                                                            Sabertooth peacock flounder; chain pickerel hatchetfish,
                                                            pencilfish snailfish filefish Antarctic icefish goldeye
                                                            aholehole trumpetfish pilot fish airbreathing catfish,
                                                            electric ray sweeper.
                                                        </p>
                                                        <div className="description-table"
                                                            style={{ maxWidth: '370px' }}>
                                                            <table>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>Weight</td>
                                                                        <td>1 kg</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Country of Origin</td>
                                                                        <td>Agro Farm</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Quality</td>
                                                                        <td>Organic</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Сheck</td>
                                                                        <td>Healthy</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <td>Min Weight</td>
                                                                        <td>250 Kg</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="spacer py-5 py-md-9" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>

            </main>
        </>
    )
}

export default ProductDetail