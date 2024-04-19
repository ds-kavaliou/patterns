import { IPizza } from "./pizza.interface";

export abstract class Store {
  public order(type: string) {
    const pizza = this.create(type);
    pizza.prepare();
    return pizza;
  }

  protected abstract create(type: string): IPizza;
}
