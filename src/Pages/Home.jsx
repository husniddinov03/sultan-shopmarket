import React, { useState } from 'react'
import Banner from '../Components/Banner/Banner'
import Goods from '../Components/Goods/Goods'
import CategoriaCom from '../Components/CategoriaCom/CategoriaCom'
import Karusel from '../Components/Karusel/Karusel'
import Brends from '../Components/Brends/Brends'
import Map from '../Components/Map/Map'
import Catalog from '../Components/Catalog/Catalog'
import CommodityId from '../Components/Goods/CommodityId/CommodityId'

const Home = () => {



  return (
    <div className='home'>
      <main>
        <Catalog />

        <Banner />

        <Goods />

        {/* <CommodityId /> */}

        <CategoriaCom />

        <Karusel />

        <Brends />

        <Map />
      </main>

    </div>
  )
}

export default Home