import React, { useState } from 'react'
import Header from './Component/Header/Header'
import FoodCard from './Component/FoodCard/FoodCard'
import AddedItem from './Component/AddedItem/AddedItem'
import Button from './Component/Button/Button'
import {FoodList} from './data.json'
import './App.css'

const App = (props) =>{
  const [foodList, setFoodList] = useState([]);
  const [addedItemList, setAddedItemList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  // state can never be let type it always will be const type
  
  const upDatePrice= () => {
    setTotalPrice(addedItemList.map(item => item.price).reduce((prev, next) => prev + next , 0))
  }

  const addToCart=(type, data)=> {
    data.quantity = 1;
    setAddedItemList([...addedItemList, data]);
    upDatePrice();
  }
      
  const changeQuantity = (data) => {
    let updatedQuantity = data.quantity;
    let index = addedItemList.findIndex(foodData => foodData.id === data.data.id);
    addedItemList[index].quantity = updatedQuantity;
    addedItemList[index].price = data.data.originalPrice*updatedQuantity;
    addedItemList.splice(index, 1, addedItemList[index]);
    if(addedItemList[index].quantity === 0) {
      addedItemList.splice(index, 1); // to remove complete data on that perticular index
    }
    const newData = addedItemList;
    setAddedItemList(newData);
    upDatePrice();
  }

  const incrementAndDecrement=(type, data)=>{
    let isDataExist = addedItemList.some(foodData => foodData.id === data.id);
    if (type==="increment" && isDataExist){
      let quantity = data.quantity + 1;
      changeQuantity({type, data, quantity});
    }

    if(type==="decrement" && isDataExist){
      let quantity = data.quantity > 0 ? data.quantity - 1 : 0; // here we can also use if condition but above method is better 
      changeQuantity({type, data, quantity});
    }
  }

    
  const updatedItemAfterCancel=(data)=>{
    let index = addedItemList.findIndex(foodData => foodData.itemName === data.itemName);
 
    addedItemList[index].quantity = 0;
    let oldPrice = addedItemList[index].originalPrice;
    addedItemList[index].price = oldPrice;
    let newAddedItemList = addedItemList.filter(foodData => foodData.itemName !== data.itemName);    
    setAddedItemList(newAddedItemList);
    upDatePrice();
  }
    
          
 

  return (
    <div>
        <Header/>

      <div className="content">
          <div className="food-menu">
            {FoodList.map((item, idx) => <FoodCard key={idx} data={item} addToCart={addToCart} incrementAndDecrement={incrementAndDecrement}/> )}             
          </div>
          <div className="your-cart">
            <h1>Your Cart</h1>
            <div className='added-item-list'>
              {addedItemList.map((item, idx) => <AddedItem key={idx} item={item}  updatedItem={updatedItemAfterCancel} incrementAndDecrement={incrementAndDecrement}/>)}
            </div>
            <div className="total-price">Total Price:<span>{totalPrice}</span></div>
            <Button className="buyNow-button" text="Buy Now" />
          </div>               
      </div> 
    </div>
  )
}
          
  

 


export default App;

// Map, foreach, some, every, findindex, filter
