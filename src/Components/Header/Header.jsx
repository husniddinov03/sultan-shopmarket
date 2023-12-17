import React, { useState } from 'react'
// import Button from '@mui/material/Button';

import "./HeaderStyle/Header.scss"
import "./HeaderStyle/HeaderResponsive/HeaderResponsive.scss"
import { Link } from 'react-router-dom'
import navLocation from "./HeaderStyle/HeaderImg/akar-icons_location.png"
// import 'bootstrap/dist/css/bootstrap.min.css'
import navSms from "./HeaderStyle/HeaderImg/fluent_mail-24-regular.png"
import siteLogo from "./HeaderStyle/HeaderImg/3.1 Лого Султан RGB.png"
import katalogIcon from "./HeaderStyle/HeaderImg/Frame 125.png"
import botPhoto from "./HeaderStyle/HeaderImg/Group 100.png"
import basketLogo from "./HeaderStyle/HeaderImg/Vector.png"
import colorBasketIcon from "./HeaderStyle/HeaderImg/basketIconColor.png"
import downIcon from "./HeaderStyle/HeaderImg/bx_bxs-download.png"
import { CloseButton } from 'react-bootstrap'
import { useCoinContext } from '../../Context/CoinContext';

const Header = () => {
  const [editBasketIcon, setEditBasketIcon] = useState(true)
  const [closeButton, setCloseButton] = useState(false)

  const { activeCatalog, data, setActiveCatalog,
    setBasketCoin, setShop, basketCoin, shop } = useCoinContext()

  return (
    <nav>
      <div className="nav-top">
        <div className="container">
          <div className="nav-box">
            <button className='resBtnHeader'>=</button>

            <div className="NI1 nav-item ">
              <img src={navLocation} alt="" />
              <h1>
                г. Кокчетав, ул. Ж. Ташенова 129Б
                <p>(Рынок Восточный)</p>
              </h1>

            </div>
            <div className="NI2 nav-item">

              <img src={navSms} alt="" />
              <h1>
                opt.sultan@mail.ru
                <p>На связи в любое время</p>
              </h1>
            </div>
          </div>

          <ul className='nav-box'>
            <li>О компании</li>
            <li>Доставка и оплата</li>
            <li>Возврат</li>
            <li>Контакты</li>
          </ul>
        </div>
      </div>
      <div className="nav-bottom container">
        <div className="nav-bottom-item">
          <Link to="/">
            <img src={siteLogo} alt="No image" className='site-logo' />
          </Link>

          <button onClick={() => setActiveCatalog(!activeCatalog)} className='button-usual'>
            <p>Каталог</p>
          </button>
          <input type="search" placeholder='Поиск...' />
        </div>
        <div className="nav-bottom-item">
          <div className="nav-bottom-i-b">
            <div className="nav-bottom-i-text">
              <b>+7 (777) 490-00-91</b>
              <p>время работы: 9:00-20:00</p>
              <a href="">Заказать звонок</a>
            </div>
            <img src={botPhoto} alt="No image" />
          </div>
          <button className='button-usual button-pray-list'>
            <p>Прайс-лист</p>
            <img src={downIcon} alt="" />
          </button>
          <div className="nav-basket-box">
            <Link to='/basket'>
              <button onMouseOver={() => setEditBasketIcon(false)} onMouseOut={() => setEditBasketIcon(true)} >
                <img src={editBasketIcon ? basketLogo : colorBasketIcon} alt="No Icon" />
              </button>
            </Link>
            <span className='flex'>{shop.length}</span>
            <div className="nav-basket-coin">
              <p>Корзина</p>
              <b>{Math.round(basketCoin === 0 ? 0 : basketCoin)} ₸</b>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header