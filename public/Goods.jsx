import React from 'react'
import "./GoodsStyle/Goods.scss"
import data from "./data"
import visSortIconG from "./GoodsStyle/GoodsImg/fa-solid_box-open.png"
import visSortIconMG from "./GoodsStyle/GoodsImg/whh_bottle.png"
import tovarOne from "./GoodsStyle/GoodsImg/img1.png"
import tovarTwo from "./GoodsStyle/GoodsImg/img2.png"
import tovarThree from "./GoodsStyle/GoodsImg/img3.png"
import tovarFour from "./GoodsStyle/GoodsImg/img4.png"
import basketLogo from "./GoodsStyle/GoodsImg/Vector.png"

const Goods = () => {
    console.log(data);

    //     var str = "123";
    // var num = Number(str);
    // console.log(num);

    return (
        <div className='goods container'>
            <div className="commodity">
                <h1>Акционные <span>товары </span></h1>
                <br /><br />
                {
                    data.map(data => (
                        
                        
                        <div className="commodity-box">
                            
                            <div className={data.popular ? "popular": "d-none"}>ПОПУЛЯРНОЕ</div>
                            <div className="commodity-img">
                                <img src={data.url} alt="No image" />
                                <div className="commodity-weight">
                                    <img src={data.vissSort == "г" ? visSortIconG : visSortIconMG} alt="No image" />
                                    <i>{data.vissSort}</i>
                                </div>
                            </div>
                            <h2><b>{data.commodityName}</b>{data.title}</h2>
                            <br />
                            <p>Штрихкод:<b>{data.code}</b></p>
                            <p>Производитель:<b>{data.Manufacturer}</b></p>
                            <p>Бренд:<b>{data.brend}</b></p>
                            <div className="commodity-bottom">
                                <strong>{Number(data.coin) + ` ₸`}</strong>
                                <button className='commodity-button button-usual flex'>В КОРЗИНУ
                                    <img src={basketLogo} alt="No image" />
                                </button>
                            </div>
                        </div>

                    ))
                }

            </div>
        </div >
    )
}

export default Goods