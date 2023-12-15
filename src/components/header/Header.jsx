import React from 'react'
import imLogo from '../../assets/img/site_logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header id="top-bar" className="top-bar top-bar--style-2">
                <div
                    className="top-bar__bg"
                    style={{
                        backgroundColor: "#FFF",
                        backgroundImage: "url(img/top_bar_bg-2.png)",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center bottom"
                    }}
                ></div>
                <div className="container position-relative">
                    <div className="row justify-content-between no-gutters">
                        <Link to="/" className="top-bar__logo site-logo" href="index_4.html">
                            <img className="img-fluid" src={imLogo} alt="demo" />
                        </Link>
                        <a
                            id="top-bar__navigation-toggler"
                            className="top-bar__navigation-toggler top-bar__navigation-toggler--dark"
                            href="javascript:void(0);"
                        >
                            <span />
                        </a>
                        <div id="top-bar__inner" className="top-bar__inner text-lg-right">
                            <div>
                                <div className="d-lg-flex flex-lg-column-reverse align-items-lg-end">
                                    <nav
                                        id="top-bar__navigation"
                                        className="top-bar__navigation navigation"
                                        role="navigation"
                                    >
                                        <ul>
                                            <li className="has-submenu">
                                                <a href="javascript:void(0);">Home</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="index.html">Home 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="index_2.html">Home 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="index_3.html">Home 3</a>
                                                    </li>
                                                    <li>
                                                        <a href="index_4.html">Home Shop</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="about.html">About</a>
                                            </li>
                                            <li className="has-submenu">
                                                <a href="javascript:void(0);">Pages</a>
                                                <ul className="submenu">
                                                    <li>
                                                        <a href="services.html">Services</a>
                                                    </li>
                                                    <li>
                                                        <a href="products.html">Products</a>
                                                    </li>
                                                    <li>
                                                        <a href="products_details.html">Product Details</a>
                                                    </li>
                                                    <li>
                                                        <a href="gallery_1.html">Gallery 1</a>
                                                    </li>
                                                    <li>
                                                        <a href="gallery_2.html">Gallery 2</a>
                                                    </li>
                                                    <li>
                                                        <a href="typography.html">Typography</a>
                                                    </li>
                                                    <li>
                                                        <a href="404.html">404 page</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-submenu active">
                                                <a href="javascript:void(0);">Shop</a>
                                                <ul className="submenu">
                                                    <li className="active">
                                                        <a href="shop_catalog.html">Shop Catalog</a>
                                                    </li>
                                                    <li>
                                                        <a href="single_product.html">Single Product</a>
                                                    </li>
                                                    <li>
                                                        <Link to={"/cart"} >Cart</Link>
                                                    </li>
                                                    <li>
                                                        <a href="checkout.html">Checkout</a>
                                                    </li>
                                                    <li>
                                                        <a href="sign_in.html">Sign In/Up</a>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="blog.html">Blog</a>
                                            </li>
                                            <li>
                                                <a href="contacts.html">Contacts</a>
                                            </li>
                                            <li className="li-profile">
                                                <a href="#">
                                                    <i className="fontello-profile" />
                                                </a>
                                            </li>
                                            <li className="li-cart">
                                                <a href="#">
                                                    <i className="fontello-shopping-bag" />
                                                    <span className="total">0</span>
                                                </a>
                                            </li>
                                            <li className="li-btn">
                                                <a
                                                    className="custom-btn custom-btn--small custom-btn--style-2"
                                                    href="#"
                                                >
                                                    Get in Touch
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                    <div className="top-bar__contacts">
                                        <span>523 Sylvan Ave, 5th Floor Mountain View, CA 940 USA</span>
                                        <span>
                                            <a href="#">+1 (234) 56789</a>,&nbsp;&nbsp;
                                            <a href="#">+1 987 654 3210</a>
                                        </span>
                                        <span>
                                            <a href="mailto:support@agrocompany.com">
                                                support@agrocompany.com
                                            </a>
                                        </span>
                                        <div className="social-btns">
                                            <a className="fontello-twitter" href="#" />
                                            <a className="fontello-facebook" href="#" />
                                            <a className="fontello-linkedin-squared" href="#" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}

export default Header