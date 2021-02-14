import React, { useState, useEffect } from "react";
import classes from "./admin.module.css";

const Admin = (props) => {
  const [Pizzas, setPizzas] = useState([]);
  const [Toppings, setToppings] = useState([]);
  const [pizzaName, setPizzaName] = useState("");
  const [pizzaPrice, setPizzaPrice] = useState("");
  const [toppingName, setToppingName] = useState("");
  const [toppingPrice, setToppingPrice] = useState("");

  useEffect(() => {
    setPizzas((prvState) => {
      let localPizzas = JSON.parse(localStorage.getItem("Pizzas"));
      return [...prvState,...localPizzas];
    });

    setToppings((prvState) => {
      let localToppings = JSON.parse(localStorage.getItem("Toppings"));
      return [...prvState,...localToppings];
    });
  }, []);

  const addPizzaHandler = () => {
    let localPizzas = JSON.parse(localStorage.getItem("Pizzas"));
    let updatedPizzas = [
      ...localPizzas,
      { name: pizzaName, basePrice: pizzaPrice },
    ];
    localStorage.setItem("Pizzas", JSON.stringify(updatedPizzas));
    setPizzas(updatedPizzas)
  };

  const adddToppingsHandler = () => {
    let localToppings = JSON.parse(localStorage.getItem("Toppings"));
    let updatedToppings = [
      ...localToppings,
      { name: toppingName, price: toppingPrice },
    ];
    localStorage.setItem("Toppings", JSON.stringify(updatedToppings));
    setToppings(updatedToppings)
  };

  const pizzaNameInputChangeHandler = (ev) => {
    setPizzaName(ev.target.value);
  };

  const pizzaPriceInputChangeHandler = (ev) => {
    setPizzaPrice(ev.target.value);
  };

  const toppingNameInputChangeHandler = (ev) => {
    let input = ev.target.value;
    setToppingName(input);
  };

  const toppingPriceInputChangeHandler = (ev) => {
    let input = ev.target.value;
    setToppingPrice(input);
  };

  return (
    <div className={classes.Admin}>
      <div className={classes.PizzaAndAddPizza}>
        <div className={classes.Pizza}>
          <p>Available Pizzas</p>
          {Pizzas.map((el) => {
            return <button key={el.name}>{el.name}</button>;
          })}
        </div>
        <div className={classes.AddPizza}>
          <p>New Pizza</p>
          <input
            type="text"
            placeholder="Enter Pizza Name"
            onChange={(ev) => pizzaNameInputChangeHandler(ev)}
          />
          <input
            type="number"
            placeholder="Add Price"
            onChange={(ev) => pizzaPriceInputChangeHandler(ev)}
          />
          <button onClick={addPizzaHandler}>Add to list</button>
        </div>
      </div>
      <div className={classes.ToppingsAndAddToppings}>
        <div className={classes.Toppings}>
          <p>Available Toppings</p>
          {Toppings.map((el) => {
            return <button key={el.name}>{el.name}</button>;
          })}
        </div>
        <div className={classes.AddToppings}>
          <p>New Toppings</p>
          <input
            type="text"
            placeholder="Enter topping Name"
            onChange={(ev) => toppingNameInputChangeHandler(ev)}
          />
          <input
            type="number"
            placeholder="Add Price"
            onChange={(ev) => toppingPriceInputChangeHandler(ev)}
          />
          <button onClick={adddToppingsHandler}>Add to list</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
