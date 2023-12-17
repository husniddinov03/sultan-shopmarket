import { createContext, useContext, useState } from "react";
import data from "../Components/Goods/data"

export const CoinContext = createContext()

export const useCoinContext = () => useContext(CoinContext)

export const CoinProvider = ({ children }) => {

    const [activeCatalog, setActiveCatalog] = useState(false)
    const [basketCoin, setBasketCoin] = useState([])
    const [shop, setShop] = useState([])
    const [addQuentity, setAddQuentity] = useState(false)
    const [comDataId, setComDataId] = useState(null)
    const [addCard, setAddCard] = useState([])
    
    const value = {
        activeCatalog, setActiveCatalog, data, basketCoin, setBasketCoin, shop, setShop,
        addQuentity, setAddQuentity, setComDataId, comDataId, addCard, setAddCard
    }

    return (
        <CoinContext.Provider value={value}>
            {children}
        </CoinContext.Provider>
    )
}