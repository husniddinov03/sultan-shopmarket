import React from 'react'
import "./Map.css"
import locationIcon from "./MapImg/akar-icons_location.png"
import fileIcon from "./MapImg/FileIcon.png"

const Map = () => {
    return (
        <div className='map container'>
            <div className="map-box">
                <div className="map-item">
                    <h1>Контакты</h1>
                    <p>Оптовый поставщик «Султан»</p>
                </div>
                <div className="map-item">
                    <div className="map-rek-box">
                        <div className="map-rek">
                            <b>Адрес:</b>
                            <div className="map-icon">
                                <img src={locationIcon} alt="No Icon" />
                                <p>г. Кокчетав, ул. Ж. Ташенова 129Б  
                                    <em>(Рынок Восточный)</em></p>
                            </div>
                        </div>

                        <div className="map-rek mapRekTwo">
                            <b>Отдел продаж:</b>
                            <div className="map-icon">
                                <p>+7 (777) 490-00-91 <br /> <em>opt.sultan@mail.ru</em></p>
                            </div>
                        </div>
                        <div className="map-rek">
                            <b>Данные налогоплательщика:</b>
                            <div className="map-icon">
                                <img src={fileIcon} alt="No Icon" />
                                <p>ИП Катран Д.С.  <br />
                                    <em>ИИН: 860113450858</em></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map