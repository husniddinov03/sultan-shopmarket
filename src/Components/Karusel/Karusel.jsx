import React from 'react'
import "./KaruselStyle/Karusel.scss"
import caruselImg from "./KaruselStyle/KaruselImg/KaruselImg.png"

import Slider from "react-slick";


export default class SimpleSlider extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className='karusel container'>
        <Slider {...settings} className='karusel-head'>
          <div className='carusel-box'>
            {/* <img src={caruselImg} alt="No image" /> */}
            <div className="carusel-bg-img">

              {/* <p className='karusel-p-1'>*Акция действует до 04/09/22</p><br />
              <h1>Название <span>Акции</span></h1><br /><br />
              <p className='karusel-p-2'>Условия акции в пару строк, Условия акции
                в пару строк, Условия акции в пару строк</p>
              <br /><br />
              <button className='button-usual'>ПРИНЯТЬ УЧАСТИЕ</button> */}
            </div>


          </div>

          <div className='carusel-box'>
            <div className="carusel-bg-img">
              <p className='karusel-p-1'>*Акция действует до 04/09/22</p><br />
              <h1>Название <span>Акции</span></h1><br /><br />
              <p className='karusel-p-2'>Условия акции в пару строк, Условия акции
                в пару строк, Условия акции в пару строк</p>
              <br /><br />
              <button className='button-usual'>ПРИНЯТЬ УЧАСТИЕ</button>
            </div>
            {/* <img src={caruselImg} alt="No image" /> */}
          </div>

          <div className='carusel-box'>
            <div className="carusel-bg-img">
              <p className='karusel-p-1'>*Акция действует до 04/09/22</p><br />
              <h1>Название <span>Акции</span></h1><br /><br />
              <p className='karusel-p-2'>Условия акции в пару строк, Условия акции
                в пару строк, Условия акции в пару строк</p>
              <br /><br />
              <button className='button-usual'>ПРИНЯТЬ УЧАСТИЕ</button>
            </div>
            {/* <img src={caruselImg} alt="No image" /> */}

          </div>
        </Slider>
      </div>
    );
  }
}



{/* <p className='karusel-p-1'>*Акция действует до 04/09/22</p><br />
<h1>Название <span>Акции</span></h1><br /><br />
<p className='karusel-p-2'>Условия акции в пару строк, Условия акции
  в пару строк, Условия акции в пару строк</p>
<br /><br />
<button className='button-usual'>ПРИНЯТЬ УЧАСТИЕ</button> */}