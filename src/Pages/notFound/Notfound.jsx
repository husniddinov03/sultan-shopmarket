import React from 'react'
import "./notFound.css"
import { Link } from 'react-router-dom'


// import Home from '../Home/Home'


const Notfound = () => {
    return (
        <div className='notFound'>
            <h1 className='notFound-h1'>N☹️t <br /><span className='notFound-span'>Found</span></h1>
            <Link to="/"> <button className='notFound-btn'>Back to Home</button></Link>
        </div>
    )
}

export default Notfound