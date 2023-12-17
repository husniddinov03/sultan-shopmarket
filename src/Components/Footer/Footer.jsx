import React from 'react'
import "./FooterStyle/Footer.scss"
import footerIcon from "./FooterStyle/FooterImg/3.1ЛогоСултанRGB(1).png"
import telegramIcon from "./FooterStyle/FooterImg/logos_telegram.png"
import whatsappIcon from "./FooterStyle/FooterImg/Group 162.png"
import visa from "./FooterStyle/FooterImg/Visa(2).png"
import visaMC from "./FooterStyle/FooterImg/Visa(3).png"
import downIcon from "./FooterStyle/FooterImg/bx_bxs-download (1).png"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer-box">
                    <div className="footer-item fI1" style={{ width: "350px" }}>
                        <img src={footerIcon} alt="No image" /><br /><br />
                        <p>Компания «Султан» — снабжаем розничные магазины товарами
                            "под ключ" в Кокчетаве и Акмолинской области</p>

                        <br /><br />
                        <i>Подпишись на скидки и акции</i><br /><br />
                        <input type="search" placeholder='Введите ваш E-mail' />
                    </div>
                    <ul className='footer-item FI2'>
                        <li><b>Меню сайта:</b></li>
                        <li>О компании</li>
                        <li>Доставка и оплата</li>
                        <li>Возврат</li>
                        <li>Контакты</li>
                    </ul>

                    <ul className='footer-item FI3'>
                        <li><b>Категории:</b></li>
                        <li>Бытовая химия</li>
                        <li>Косметика и гигиена</li>
                        <li>Товары для дома</li>
                        <li>Товары для детей и мам</li>
                        <li>Посуда</li>
                    </ul>
                    <div className="footer-item FI4">
                        <b>Скачать прайс-лист:</b>
                        <button className='button-usual button-pray-list'>
                            <b>Прайс-лист</b>
                            <img src={downIcon} alt="No icons" />
                        </button>
                        <p>Связь в мессенджерах:</p>
                        <div className="foooter-item-o-imgs">
                            <a href="https://telegram.org/">
                                <img src={telegramIcon} alt="No icon" />
                            </a>
                            <a href="https://www.whatsapp.com/">
                                <img src={whatsappIcon} alt="No icon" />
                            </a>
                        </div>
                    </div>
                    <div className="footer-item FI5">
                        <strong>Контакты:</strong>
                        <b>+7 (777) 490-00-91</b>
                        <i>время работы: 9:00-20:00</i>
                        <a href="/home">Заказать звонок</a>
                        <br /><br />
                        <b>opt.sultan@mail.ru</b>
                        <i>На связи в любое время</i>

                        <div className="foooter-item-o-imgs">
                            <img src={visa} alt="No image" />
                            <img src={visaMC} alt="No image" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer