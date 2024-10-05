import PizzaShop from "./PizzaShop.js";

var veggieDelight = new PizzaShop();

veggieDelight.on("order", (number) => {
  console.log("Item Ordered" + number);
});

veggieDelight.order();
