import React, {useState} from 'react'
import './Header.css'

const Header = (props)=> {

    return(
        <div className="header">
            <img src="./images.png" alt="test"/>
            <div className="header-heading">
                Zoop<span>Taste</span><sup>"The taste of india"</sup>
            </div>
        </div>
    )
}

export default Header;