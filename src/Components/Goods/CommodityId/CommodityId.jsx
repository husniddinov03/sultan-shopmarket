import React, { useState } from 'react'
import "./CommodityIdStyle/CommodityId.scss"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import basketLogo from './ComCardImg/simple-line-icons_basket.png'
import shareLogo from './ComCardImg/ci_share.png'
import prTable from './ComCardImg/bx_bxs-download.png'
import image from "../GoodsStyle/GoodsImg/fa-solid_box-open.png"
import { useCoinContext } from '../../../Context/CoinContext';

const CommodityId = () => {

  const { addCard, setAddCard, shop, setShop } = useCoinContext()
  const [activeAddedShop, setActiveAddedShop]=useState(false)
  console.log(addCard);

    if (activeAddedShop) {
      
    }

  return (

    addCard?.length === 0 ? <h1>Hali tovarlar mavjud emas!</h1> : addCard.map(item => (
      <div className='commodity-id container'>
        <div className="com-card-img flex">
          <img src={item.img} alt="No image" />
        </div>

        <div className="com-card-text">
          <p>В наличии</p>
          <h3><span>{item.brend}</span> {item.title}</h3>
          <div className="com-card-weight">
            <img src={image} alt="No image" />
            <i>90 г</i>
          </div>

          <div className="com-card-price">
            <h2>48,76 ₸</h2>
            <div className="com-card-count flex">
              <button>-</button>
              <b>1</b>
              <button>+</button>
            </div>
            <button className='button-usual'>В корзину <img src={basketLogo} alt="No Icon" /></button>
          </div>

          <div className="com-card-actions">
            <button className='flex' style={{ width: "77px" }}><img src={shareLogo} alt="No icon" /></button>
            <button className='flex' style={{ width: "316px" }}><p>При покупке от <span>10 000 ₸</span> бесплатная <br /> доставка по Кокчетаву и области</p></button>
            <button className='flex' style={{ width: "186px" }}><b>Прайс-лист</b> <img src={prTable} alt="No icon" /></button>
          </div>

          <div className="com-card-list">
            <p>Производитель: <b>{item.Manufacturer}</b></p>
            <p>Бренд: <b>{item.brend}</b></p>
            <p>Артикул: <b>{item.SellerCode}</b></p>
            <p>Кол-во в коробке: <b>{item.quantityPerBox}</b></p>
            <p>Штрихкод: <b>{item.code}</b></p>
            <p>Размеры коробки: <b>{item.DimensionBox}</b></p>
            <p>Вес коробки: <b>{item.viss}</b></p>
          </div>

          <div style={{width: "60%", color: "black"}}>
            <Accordion >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id="panel1a-header">
                <Typography style={{color: "black"}}>Описание</Typography>
              </AccordionSummary>
              <AccordionDetails >
                <Typography style={{color: "black"}}>
                  {item.Description}
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
              >
                <Typography style={{color: "black"}}>Характеристики</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography style={{color: "black"}}>
                  {item.Characteristics}
                </Typography>
              </AccordionDetails>
            </Accordion>

          </div>
        </div>

      </div>
    ))

  )
}

export default CommodityId