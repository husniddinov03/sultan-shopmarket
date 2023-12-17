import React from 'react'
import "./CategoriaComStyle/CategoriaCom.scss"
import CatComImgOne from "./CategoriaComStyle/CategoriaComImg/Group 64_1.png"
import CatComImgTwo from "./CategoriaComStyle/CategoriaComImg/mylo-gel-mochalka-gel-dlya_adobespark_2.png"
import CatComImgThree from "./CategoriaComStyle/CategoriaComImg/mylo-gel_3.png"
import CatComImgFour from "./CategoriaComStyle/CategoriaComImg/mylo-gel-mochalka-gel_4.png"
import CatComImgFive from "./CategoriaComStyle/CategoriaComImg/mylo-gel-mochalka-gel-dlya_adobespark_5.png"

const CategoriaCom = () => {
    return (
        <div className='CatCom container'>
            <h1>категории <span>товаров</span></h1>
            <p>10 000+ ходовых позиций по спецмальным ценам</p>
            <div className="cat-com-box">
                <div className="cat-com-item">
                    <div className="cat-com-image">
                        <img src={CatComImgOne} alt="No image" />
                    </div>
                    <b>Бытовая химия</b>
                </div>
                <div className="cat-com-item">
                    <div className="cat-com-image">
                        <img src={CatComImgTwo} alt="No image" />
                    </div>
                    <b>Косметика и гигиена</b>
                </div>
                <div className="cat-com-item">
                    <div className="cat-com-image">
                        <img src={CatComImgThree} alt="No image" />
                    </div>
                    <b>Товары для дома</b>
                </div>
                <div className="cat-com-item">
                    <div className="cat-com-image">
                        <img src={CatComImgFour} alt="No image" />
                    </div>
                    <b>Товары для детей и мам</b>
                </div>
                <div className="cat-com-item">
                    <div className="cat-com-image">
                        <img src={CatComImgFive} alt="No image" />
                    </div>
                    <b>Посуда</b>
                </div>
            </div>
        </div>
    )
}

export default CategoriaCom