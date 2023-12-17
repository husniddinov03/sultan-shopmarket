import React, { useState } from 'react'
import "./CatalogStyle/Catalog.scss"
import { CgChevronUp } from "react-icons/cg";
import { useCoinContext } from '../../Context/CoinContext';
import { Box, Button, ButtonGroup } from '@mui/material';
import { } from 'react-bootstrap';

const buttons = [
    <Button key="one">Бытовая химия</Button>,
    <Button key="two">Косметика и гигиена</Button>,
    <Button key="three">Товары для дома</Button>,
    <Button key="three">Товары для детей и мам</Button>,
    <Button key="three">Посуда</Button>,
];


const Catalog = () => {

    const { activeCatalog, setActiveCatalog } = useCoinContext()

    const [activeBtnHead, setActiveBtnHead] = useState('button-1')

    const targetValue = (e) => {
        setActiveBtnHead(e.target.value);
    }

    return (
        <div className="catalog-head">

            <div className={activeCatalog ? "catalog" : "d-none"}>
                <div className="container">

                    <div className="catalog-box">
                        <div className="catalog-buttons">
                            <button onClick={() => setActiveBtnHead("button-1")} className={activeBtnHead == "button-1" ? "buttonActive" : null}>Бытовая химия</button>
                            <button onClick={() => setActiveBtnHead("button-2")} className={activeBtnHead == "button-2" ? "buttonActive" : null}>Косметика и гигиена</button>
                            <button onClick={() => setActiveBtnHead("button-3")} className={activeBtnHead == "button-3" ? "buttonActive" : null}>Товары для дома</button>
                            <button onClick={() => setActiveBtnHead("button-4")} className={activeBtnHead == "button-4" ? "buttonActive" : null}>Товары для детей и мам</button>
                            <button onClick={() => setActiveBtnHead("button-5")} className={activeBtnHead == "button-5" ? "buttonActive" : null}>Посуда</button>
                        </div>

                        {activeBtnHead == "button-1" && <div className="catalog-items ">
                        <h1>Бытовая химия</h1><br /><br />

                            <div className="catalog-item cat-item-ul1">
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Уход за ванной и туалетом</li>

                                    <li>Средства для сантехники</li>
                                    <li>Для прочистки труб</li>
                                    <li>Дезинфицирующие средства</li>
                                </ul>
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Уход за ванной и туалетом</li>

                                    <li>Средства для сантехники</li>
                                    <li>Для прочистки труб</li>
                                    <li>Дезинфицирующие средства</li>
                                </ul>
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Уход за ванной и туалетом</li>

                                    <li>Средства для сантехники</li>
                                    <li>Для прочистки труб</li>
                                    <li>Дезинфицирующие средства</li>
                                </ul>

                            </div>
                            <div className="catalog-item cat-item-ul2">
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Стирка и уход</li>

                                    <li>Порошки для стирки</li>
                                    <li>Отбеливатели, пятновыводители</li>
                                    <li>Мыло хозяйственное</li>
                                    <li>Кондиционеры, опласкиватели</li>
                                    <li>Гели для стирки</li>
                                </ul>
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Стирка и уход</li>

                                    <li>Порошки для стирки</li>
                                    <li>Отбеливатели, пятновыводители</li>
                                    <li>Мыло хозяйственное</li>
                                    <li>Кондиционеры, опласкиватели</li>
                                    <li>Гели для стирки</li>
                                </ul>
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Стирка и уход</li>

                                    <li>Порошки для стирки</li>
                                    <li>Отбеливатели, пятновыводители</li>
                                    <li>Мыло хозяйственное</li>
                                    <li>Кондиционеры, опласкиватели</li>
                                    <li>Гели для стирки</li>
                                </ul>

                            </div>
                        </div>}



                        {activeBtnHead == "button-2" && <div className="catalog-items ">
                            <h1>Косметика и гигиена</h1><br /><br />
                            <div className="catalog-item cat-item-ul1">
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                </ul>

                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                </ul>
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                </ul>

                            </div>


                            <div className="catalog-item cat-item-ul2">
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                </ul>
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                </ul>
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                </ul>

                            </div>
                        </div>}



                        {activeBtnHead == "button-3" && <div className="catalog-items ">
                            <h1>Товары для дома</h1><br /><br />
                            <div className="catalog-item cat-item-ul1">
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                </ul>

                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Товары для детей и мам</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                </ul>
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                </ul>

                            </div>


                            <div className="catalog-item cat-item-ul2">
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                </ul>
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                </ul>
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                </ul>

                            </div>
                        </div>}


                        {activeBtnHead == "button-4" && <div className="catalog-items ">
                            <h1>Посуда</h1><br /><br />
                            <div className="catalog-item cat-item-ul1">
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                </ul>

                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                </ul>
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                </ul>

                            </div>


                            <div className="catalog-item cat-item-ul2">
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                </ul>
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                </ul>
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                </ul>

                            </div>
                        </div>}


                        {activeBtnHead == "button-5" && <div className="catalog-items ">
                            <h1>Косметика и гигиена</h1><br /><br />
                            <div className="catalog-item cat-item-ul1">
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                </ul>

                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                </ul>
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                    <li>Lorem ipsum dolor sit.</li>
                                </ul>

                            </div>


                            <div className="catalog-item cat-item-ul2">
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                </ul>
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                </ul>
                                <ul className="catalog-item-ul">
                                    <li className='catalog-head-text'>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                    <li>Lorem, ipsum dolor.</li>
                                </ul>

                            </div>
                        </div>}
                    </div>
                </div>
                <div className="icon-bottom">
                    <button onClick={() => setActiveCatalog(false)}>
                        <CgChevronUp size={50} className='iconBottom' />

                    </button>

                </div>
            </div>
        </div>

    )
}

export default Catalog