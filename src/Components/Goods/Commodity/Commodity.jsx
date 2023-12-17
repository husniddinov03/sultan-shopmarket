import React, { useState } from 'react'
import "./CommodityStyle/Commodity.scss"
import data from "../data"
import visSortIconG from "../GoodsStyle/GoodsImg/fa-solid_box-open.png"
import visSortIconMG from "../GoodsStyle/GoodsImg/whh_bottle.png"
import basketLogo from "../GoodsStyle/GoodsImg/Vector.png"
import { Link } from 'react-router-dom'
import { CgEye } from "react-icons/cg";
import { useCoinContext } from '../../../Context/CoinContext'

const Commodity = ({ datas }) => {
  const { setBasketCoin, setShop, basketCoin, shop, setComDataId, comDataId, setAddCard, addCard } = useCoinContext()

  const comDataIdSave = (id) => {
    const saveData = data?.find(item => item.id === id);
    setAddCard([ saveData]);
  };
  

  const addCart = (id) => {
    const selectedData = data?.find(item => item.id === id);

    if (selectedData) {
      const isAlreadyInShop = shop?.some(item => item.id === id);
      let newBasketCoin

      if (isAlreadyInShop) {
        const selectedShop = shop?.find(item => item.id === id)
        const addQuantityShop = () => {
          const newQuantityCom = selectedShop.quantity += 1
          const newCoinCom = selectedShop.coin * (newQuantityCom / selectedShop.quantity)
          return { ...selectedShop, quantity: newQuantityCom, coin: Math.round(newCoinCom) }
        }
        addQuantityShop()
        newBasketCoin = Math.round(selectedShop.quantity * selectedData.coin);
      } else {
        setShop([...shop, selectedData]);
        newBasketCoin = Math.round(basketCoin + selectedData.coin);
        console.log(shop);
      };  

      setBasketCoin(newBasketCoin)
    };
  };

  return (
    <div className="commodity-box">
      <div className={datas.popular ? "popular" : "d-none"}>ПОПУЛЯРНОЕ</div>
      <div className="commodity-img">
        <img src={datas.img} alt="No image" />
        <div className="commodity-weight">
          <img src={datas.vissSort == "г" ? visSortIconG : visSortIconMG} alt="No image" />
          <i>{datas.viss}</i>
        </div>
      </div>
      <h2><b>{datas.commodityName}</b>{datas.title}</h2>
      <br />
      <p>Штрихкод:<b>{datas.code}</b></p>
      <p>Производитель:<b>{datas.Manufacturer}</b></p>
      <p>Бренд:<b>{datas.brend}</b></p>
      <div className="commodity-bottom">
        <strong>{Number(datas.coin) + " ₸"}</strong>
        <button onClick={() => addCart(datas.id)} className='commodity-button button-usual flex'>В КОРЗИНУ
          <img src={basketLogo} alt="No image" />
        </button>
      </div>
      {/* onClick={()=> comDataIdSave(datas, datas.id)} */}
      <div className="com-link-box">
        <button onClick={() => comDataIdSave(datas.id)} style={{ background: "transparent", border: "none" }}>
          <Link className='com-link' to={`/commodityId/${datas.id}`}><CgEye /></Link>
        </button>
      </div>
    </div>
  )
}

export default Commodity