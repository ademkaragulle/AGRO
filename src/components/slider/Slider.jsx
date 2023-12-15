import React from 'react'
import image from '../../assets/img/intro_img/12.jpg';
function Slider() {
    return (
        <div>
            <div>
                <div
                    id="hero"
                    className="jarallax"
                    data-speed="0.7"
                    data-img-position="50% 80%"
                    style={{ backgroundImage: `url(${image})`, color: '#fff' }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-7">
                                <h1 className="title">
                                    <span>Agro Shop</span> Catalog
                                </h1>
                                <p>
                                    The point of using is that it has a more-or-less normal distribution of letters,
                                    as opposed to using Content here content here making it look
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider