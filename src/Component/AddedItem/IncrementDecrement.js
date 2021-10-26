import React, { useState } from 'react';
import './AddedItem.css'
import Button from '../Button/Button'

const IncrementDecrement = (props)=>{

    const {item, incrementAndDecrement} = props;
    console.log(item.quantity, "addedItem");
    return(
         <div className="set-quantity">
            <Button className="plus-minus-button" onClick={incrementAndDecrement} type="decrement" text="-" data={item}/>
            <span>{item.quantity}</span> 
            <Button className="plus-minus-button" onClick={incrementAndDecrement} type="increment" text="+" data={item}/>
        </div>
    )
}

export default IncrementDecrement;