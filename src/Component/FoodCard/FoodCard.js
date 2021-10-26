import React, {useState} from 'react';
import Button from '../Button/Button';
import IncrementDecrement from '../AddedItem/IncrementDecrement';
import './FoodCard.css';


const FoodCard = (props) =>{

    const {data: { itemName, quantity, originalPrice}, data, addToCart, incrementAndDecrement } = props;
    console.log(quantity, "abc")
    return(            
        <div className="foodCard">
            <div className="">{itemName}</div>
            <div className='price'>
                Price(Rs): <span >{originalPrice}</span>
            </div>
            {quantity >= 1 ? <IncrementDecrement className="increment-decrement" incrementAndDecrement={incrementAndDecrement} item={data}/> : <Button className="add-button" text="Add" onClick={addToCart} data={data} />}
        </div>            
    )    
}

export default FoodCard;
