import React, { useState } from 'react'
import { useCoinContext } from '../../Context/CoinContext'
import visSortIconG from './BasketImg/fa-solid_box-open.png'
import visSortIconMG from './BasketImg/whh_bottle.png'
import './BasketStyle/Basket.scss'
import delBasket from "./BasketImg/basketDelImg.png"

const Basket = () => {
  const { shop, setShop, setBasketCoin, basketCoin } = useCoinContext()


  const addCoinToBasket = (coin) => {
    setBasketCoin((prevCoin) => prevCoin + coin);
  };

  const decreaseQuantity = (id) => {
    const updatedShop = shop?.map((item) => {
      if (item.id === id) {

        if (item.quantity > 1) {
          const newQuantity = item.quantity - 1;
          const newCoin = item.coin * (newQuantity / item.quantity);
          addCoinToBasket(newCoin)
          return { ...item, quantity: newQuantity, coin: Math.round(newCoin) };
        }
      }
      return item;
    });
    setShop(updatedShop);
  };

  const increaseQuantity = (id) => {
    const updatedShop = shop?.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity + 1;
        const newCoin = item.coin * (newQuantity / item.quantity);
        addCoinToBasket(newCoin)
        return { ...item, quantity: newQuantity, coin: Math.round(newCoin) };
      }
      return item;
    });
    setShop(updatedShop);
  };



  // console.log(basketCoin);
  const delGoods = (id) => {
    let deleteItem = shop?.filter(item => item.id !== id)
    const shopDelCoin = shop.map(item => {
      return console.log(basketCoin - (item.coin * item.quantity));
    })
    setShop(deleteItem)

  }

  return (
    <div className='comBask container' style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {shop?.length > 0 ? shop?.map((datas, i) => (

        <div className="commodity-box-basket" key={datas.code}>
          <div className="commodity-img-basket">
            <img src={datas.img} alt="No image" />
          </div>
          <div className="commodity-weight-basket">
            <h2 className='com-basket-h1'>{datas.title}</h2>
            <img src={datas.vissSort === "г" ? visSortIconG : visSortIconMG} alt="No image" />
            <i>{datas.viss}</i>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nullam interdum ut justo, vestibulum sagittis iaculis
              iaculis. Quis mattis vulputate  feugiat massa vestibulum duis. </p>
          </div>

          <div className="addComBasket">
            <button onClick={() => decreaseQuantity(datas.id)}>-</button>
            <span>{datas.quantity}</span>
            <button onClick={() => increaseQuantity(datas.id)}>+</button>                    </div>
          <div className="commodity-bottom-basket">
            <strong>{Number(Math.round(datas.coin)) + " ₸"}</strong>
            <button onClick={() => delGoods(datas.id)}><img src={delBasket} alt="No image" /></button>
          </div>

        </div>
      ))

        : <h1 style={{ width: "100%", padding: "300px 0", textAlign: "center", color: "red", letterSpacing: "2px" }}>There are no products in the cart yet... <br /><br />
          If you want to add a product, go to the home page
        </h1>}

      {shop?.length > 0 ?
        <div className='com-basket-bottom'>
          <button>Оформить заказ</button>
          <h1 className='com-basket-h1' >{basketCoin} ₸</h1>
        </div>
        : <></>}
    </div>
  )

}

export default Basket