import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getCategory } from '../store/slices/cartSlice'

function Aside() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        logMovies()
    }, [])

    const dispatch = useDispatch()

    async function logMovies() {
        const response = await fetch("http://localhost:3000/categories");
        const data = await response.json();
        setCategories(data)
    }


    const getProduct = (product) => {
        dispatch(getCategory(product.id))
    }


    return (
        <div>
            <aside className="sidebar goods-filter">
                <span className="goods-filter-btn-close js-toggle-filter">
                    <i className="fontello-cancel" />
                </span>
                <div className="goods-filter__inner">
                    {/* start widget */}
                    <div className="widget widget--search">
                        <form className="form--horizontal" action="#" method="get">
                            <div className="input-wrp">
                                <input
                                    className="textfield"
                                    name="s"
                                    type="text"
                                    placeholder="Search"
                                />
                            </div>
                            <button
                                className="custom-btn custom-btn--tiny custom-btn--style-1"
                                type="submit"
                                role="button"
                            >
                                Find
                            </button>
                        </form>
                    </div>

                    <div className="widget widget--categories">
                        <h4 className="h6 widget-title">CAtegories</h4>
                        <ul className="list">


                            {
                                categories.map((item, index) => (
                                    <li key={index} className="list__item">
                                        <div style={{ cursor: "pointer" }} onClick={() => getProduct(item)} className="list__item__link" href="#">
                                            {item.categoryName}
                                        </div>
                                        <span>({item.id})</span>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>

                </div>
            </aside>

        </div>
    )
}

export default Aside