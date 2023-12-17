import React from 'react'
import "./BannerStyle/Banner.scss"

const Banner = () => {
    return (
        <div className="banner-head">

        <div className='banner'>
            <div className="container">
                <div className="banner-shadow"></div>
                <div className="banner-box">
                    <div className="banner-box-text">
                        <h1>Бытовая химия,
                            косметика
                            и хозтовары
                        </h1>
                        <h3>оптом по кокчетаву и области</h3><br /><br />
                        <button className='button-usual'>В КАТАЛОГ</button>
                    </div>

                    <div className="banner-items">
                        
                        <div className="banner-item ban-i1">
                            <button>+</button>
                            <h3>Только самые <br />
                                выгодные предложения</h3>
                        </div>

                        <div className="banner-item ban-i2">
                            <button>+</button>
                            <h3>Бесплатная доставка <br />
                                по <b>Кокчетаву от 10 тыс ₸</b></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        </div>

    )
}

export default Banner