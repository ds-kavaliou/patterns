import { IPizza } from "./pizza.interface";
import { NYStyleCheesePizza, NYStylePepperoniPizza } from "./pizza.ny";
import { Store } from "./store.base";

export class NYStyleStore extends Store {
  protected create(type: string): IPizza {
    switch (type) {
      case "cheese":
        return new NYStyleCheesePizza();
      case "pepperoni":
        return new NYStylePepperoniPizza();
      default:
        return new NYStyleCheesePizza();
    }
  }
}
