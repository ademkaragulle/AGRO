import React from 'react'
import Product from '../product/Product'
import Aside from '../aside/Aside'
import Slider from '../slider/Slider'

function Body() {
    return (
        <div className='container-fluid'>
            <Slider />
            <div className="container">
                <div style={{ marginTop: "100px" }} className="row">
                    <div className="col-3">
                        <Aside />

                    </div>
                    <div className="col-9">
                        <Product />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body