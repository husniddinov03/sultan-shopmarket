import React, { useState } from 'react'
import "./GoodsStyle/Goods.scss"
import data from "./data"
import Commodity from './Commodity/Commodity'

const Goods = () => {   
    return (
        <div className='goods container'>
            <div className="commodity">
                <br /><br />
                <div className="commodity-boxs" >
                    {
                        data?.length < 0 ? <h2 className='no-commodity'>The goods are not yet available!</h2> : data.map(data => {
                            return (
                                < Commodity key={data.id}  datas={data} />
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default Goods