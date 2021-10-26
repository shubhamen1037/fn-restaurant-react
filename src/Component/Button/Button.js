import React, {useState} from 'react'

const Button = (props) =>{

    const { text, className, onClick, type, data } = props;

    return(
         <div>
            <button className={className} onClick={()=>onClick(type, data)}>{text}</button>
         </div>
    )
}

export default Button;