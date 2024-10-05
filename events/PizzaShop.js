import EventEmitter from "node:events";

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  order() {
    this.orderNumber++;
    this.emit("order", this.orderNumber);
  }

  displayOrder() {
    console.log(`Current order number is ${this.orderNumber}`);
  }
}

export default PizzaShop;
