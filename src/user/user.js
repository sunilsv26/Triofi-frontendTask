import classes from "./user.module.css";
import React, {useState,useEffect } from "react";
import filePizzas from "../data/piazza";
import fileToppings from "../data/toppings";

localStorage.setItem('Pizzas',JSON.stringify(filePizzas));
localStorage.setItem('Toppings',JSON.stringify(fileToppings))

const User = (props) => {
  const[Pizzas,setPizzas] = useState([]);
  const [Toppings,setToppings]=useState([])
  const [selectedPizza, setSelectedPizza] = useState({});
  const [selectedToppings, setSelectedToppings] = useState([]);

  useEffect(()=>{
    setPizzas((prvState)=>{
      let localPizzas = JSON.parse(localStorage.getItem('Pizzas')) ;
      return [...prvState,...localPizzas]
    })
  
    setToppings((prvState)=>{
      let localToppings = JSON.parse(localStorage.getItem('Toppings'))
      return [...prvState,...localToppings]
    })
  },[])

  const pizaaSelectionHandler = (ev, el) => {
    setSelectedPizza(el);
    
  };
  
  const toppings = {};

  Toppings.map((el) => {
    toppings[el.name] = el.price;
    return el;
  });

  const toppingsSelectionHandler = (ev, el) => {
    setSelectedToppings((prvState) => {
      if (prvState.indexOf(el.name) !== -1) {
        return [...prvState];
      }
      if (prvState.indexOf(el.name) === -1) {
        return [...prvState, el.name];
      }
    });
  };
  

  const removeToppingHandler = (ev, name) => {
    setSelectedToppings((prvState) => {
      prvState = prvState.filter((el) => el !== name);
      return prvState;
    });
   
  };

  const remoePizzaHandler = () => {
    setSelectedPizza({});
    
  };

  const totalPrice=()=>{
    let cost =0;
    selectedToppings.map(top=>{
      cost = cost + toppings[top]
      return top
    })
    cost = cost + selectedPizza.basePrice
    return cost
  }
  totalPrice()

 const orderPlaced=()=>{
   alert('Order Placed')
 }
  return (
    <div className={classes.User}>
      <header>
        <h1>Welcome to Pizza World</h1>
      </header>
      <div className={classes.PizzaAndCart}>
        <div className={classes.Pizza}>
          <p>Choose Your Favourite Pizza</p>
          {Pizzas.map((el) => {
            return (
              <button
                key={el.name}
                onClick={(ev) => pizaaSelectionHandler(ev, el)}
              >
                {el.name}
              </button>
            );
          })}
        </div>
        <div className={classes.Cart}>
          <p>Cart</p>
          <div onClick={remoePizzaHandler}>{`Pizza : ${
            selectedPizza.name ? selectedPizza.name : "Select Pizza!"
          }`}</div>
          <div>Toppings Added:</div>
          <ul>
            {selectedToppings.map((el) => (
              <li key={el} onClick={(ev) => removeToppingHandler(ev, el)}>
                {<span title="Remove">{el}</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes.ToppngsAndOrder}>
        <div className={classes.Toppings}>
          <p>Add Toppings to Your Pizza</p>
          {selectedPizza.name ? (
            Toppings.map((el) => {
              return (
                <button
                  key={el.name}
                  onClick={(ev) => toppingsSelectionHandler(ev, el)}
                >
                  {el.name}
                </button>
              );
            })
          ) : (
            <p>Select Pizza First!</p>
          )}
        </div>
        <div className={classes.Order} >
          <p>Order Now</p>
          <p>
            {selectedPizza.name
              ? `Pizza : ${selectedPizza.name} -  Rs.${selectedPizza.basePrice}`
              : ""}
          </p>
          {selectedToppings
            ? selectedToppings.map((top) => (
                <div
                  key={top}
                >{`${top} -  Rs.${toppings[top]}`}</div>
              ))
            : ""}
          <p> {selectedPizza.basePrice ? `Total price : Rs. ${totalPrice()}`:''}</p>
          {selectedPizza.basePrice? <button onClick={orderPlaced}>Order</button>:null}
        </div>
      </div>
    </div>
  );
};

export default User;
