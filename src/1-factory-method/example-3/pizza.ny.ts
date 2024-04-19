import { IPizza } from "./pizza.interface";

export class NYStyleCheesePizza implements IPizza {
  prepare(): void {
    console.log("Preparing NY Cheese Pizza");
  }
}

export class NYStylePepperoniPizza implements IPizza {
  prepare(): void {
    console.log("Preparing NY Pepperoni Pizza");
  }
}
