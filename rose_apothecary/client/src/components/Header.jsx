import React from 'react'
import banner from '../imgs/store.png';

const Header = () => {
    return (
        <>
            <div className="nav-container">
                <img src={banner} alt="storefront" className='banner'/>
            </div>
        </>
    )
}

export default Header