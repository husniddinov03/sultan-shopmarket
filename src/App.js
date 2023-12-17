import React from 'react';
import './AppStyle/App.scss';
import Header from './Components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Notfound from './Pages/notFound/Notfound';
import data from "./data"
import Commodity from './Components/Goods/Commodity/Commodity';
import Goods from './Components/Goods/Goods';
import CommodityId from './Components/Goods/CommodityId/CommodityId';
import Basket from './Pages/Basket/Basket';
import { useCoinContext } from './Context/CoinContext';

function App() {


  alert("Loyiha hali yakunlanmagan!")
  const { setComDataId, comDataId } = useCoinContext()
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path='/goods' element={<Goods />} />
          <Route path='/commodity' element={<Commodity />}/>
        </Route>
        <Route path='/basket' element={<Basket />} />
        <Route path='/commodityId/:id' element={<CommodityId/>} />
        <Route path="/*" element={<Notfound />} />/
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
