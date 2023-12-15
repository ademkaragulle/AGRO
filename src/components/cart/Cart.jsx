import React from 'react'
import image from '../images/product.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../store/slices/cartSlice';
function Cart() {


    const { cart } = useSelector((store) => {
        return {
            cart: store.cart.items
        }
    })

    const dispatch = useDispatch()
    const deleteProduct = (product) => {
        console.log('dsaşdmas')
        dispatch(removeFromCart(product.id))
    }
    console.log(cart)

    const decrease = (product) => {
        dispatch(decreaseQuantity(product.id))
        console.log(product.quantity)
    }

    const increase = (product) => {
        dispatch(increaseQuantity(product.id))
        console.log(product.quantity)

    }


    const totalCost = () => {
        console.log('diaislşödasi')
        let total = 0
        cart.forEach(element => {
            total += element.price * element.quantity
        });
        return total
    }



    return (
        <div>
            <main role="main">
                <link rel="stylesheet" href="css/style.min.css" type="text/css" />
                <section className="section">

                    <div className="container">
                        <div className="row">

                            <div className="col-12">
                                <div className="cart">
                                    <form className="cart__form" action="/">
                                        <div className="cart__table">
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <td width="10%">&nbsp;</td>
                                                        <td width="35%">added products</td>
                                                        <td width="15%">Price</td>
                                                        <td width="20%">Quantity</td>
                                                        <td width="15%">Total</td>
                                                        <td width="5%">&nbsp;</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        cart.map((item) => (
                                                            <tr>
                                                                <td>
                                                                    <figure className="__image">
                                                                        <a href="/">
                                                                            <img src={image}
                                                                                data-src={image} alt="demo" />
                                                                        </a>
                                                                    </figure>
                                                                </td>
                                                                <td>
                                                                    <a href="/" className="__name">{item.productName}</a>
                                                                </td>
                                                                <td>
                                                                    <span className="__price">{item.price} $</span>
                                                                </td>
                                                                <td>
                                                                    <div className="quantity-counter js-quantity-counter">
                                                                        <span
                                                                            onClick={() => decrease(item)}
                                                                            className="__btn __btn--minus" />
                                                                        <input className="__q-input" type="text"
                                                                            value={item.quantity} />
                                                                        <span
                                                                            onClick={() => increase(item)}
                                                                            className="__btn __btn--plus" />
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <span className="__total">{item.quantity * item.price} $</span>
                                                                </td>
                                                                <td>
                                                                    <div
                                                                        style={{ cursor: "pointer" }}
                                                                        onClick={() => deleteProduct(item)}
                                                                        className="__remove" href="/"
                                                                        aria-label="Remove this item">
                                                                        <i className="fontello-cancel" />
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="py-5" />
                                        <div className="row justify-content-md-between">
                                            <div className="col-12 col-md-6">
                                                <div className="cart__coupon form--horizontal">
                                                    <div className="input-wrp">
                                                        <input className="textfield" type="text"
                                                            placeholder="Coupon code" />
                                                    </div>
                                                    <button
                                                        className="custom-btn custom-btn--medium custom-btn--style-1"
                                                        type="submit">Apply Coupon
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-5 col-xl-4">
                                                <div className="spacer py-5 d-md-none" />
                                                <div className="cart__total">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <td colSpan={2}><h3>CART <span>TOTALS</span></h3></td>
                                                            </tr>
                                                        </thead>
                                                        <tfoot>
                                                            <tr>
                                                                <td colSpan={2}>
                                                                    <a className="custom-btn custom-btn--medium custom-btn--style-1"
                                                                        href="/">Proceed to checkout</a>
                                                                </td>
                                                            </tr>
                                                        </tfoot>
                                                        <tbody>
                                                            <tr>
                                                                <td>Subtotal:</td>
                                                                <td>${totalCost()}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Shipping</td>
                                                                <td>Flat rate: $3.00 <br />Shipping to Turkey.</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Total</td>
                                                                <td>${totalCost() + 3}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="section section--no-pt section--no-pb section--gutter">
                    <div className="container-fluid px-md-0">
                        <div className="simple-banner simple-banner--style-2" data-aos="fade" data-aos-offset={50}>
                            <div className="d-none d-lg-block">
                                <img className="img-logo img-fluid  lazy" src="img/blank.gif"
                                    data-src="img/site_logo.png" alt="demo" />
                            </div>
                            <div className="row no-gutters">
                                <div className="col-12 col-lg-6">
                                    <a href="/"><img className="img-fluid w-100  lazy" src="img/blank.gif"
                                        data-src="img/banner_bg_3.jpg" alt="demo" /></a>
                                </div>
                                <div className="col-12 col-lg-6">
                                    <a href="/"><img className="img-fluid w-100  lazy" src="img/blank.gif"
                                        data-src="img/banner_bg_4.jpg" alt="demo" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default Cart