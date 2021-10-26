import React, { useState } from 'react';
import './AddedItem.css';
import Button from '../Button/Button';
import IncrementDecrement from './IncrementDecrement';

const AddedItem = (props) =>{
    const {item, incrementAndDecrement, updatedItem} = props;
    console.log(incrementAndDecrement)
    const cancelItem=(type, data)=> {
        updatedItem(data);
    }
 
    
    return(
        <div className="added-item">
            <div className="item-detail">{item.itemName}<div>  Price:{item.price}</div></div>
            <IncrementDecrement incrementAndDecrement={incrementAndDecrement} item={item}/>
            <Button className="cancel-button" text="x" onClick={cancelItem} data={item}/>                
        </div>
    )
}

export default AddedItem;