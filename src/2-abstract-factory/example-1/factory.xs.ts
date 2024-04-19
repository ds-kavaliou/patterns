import { IFactory } from "./factory.interface";
import { IProductA, IProductB, IProductC } from "./product.interface";

export class FactoryXS implements IFactory {
  public createProductA(): IProductA {
    return new ProductA();
  }
  public createProductB(): IProductB {
    return new ProductB();
  }
  public createProductC(): IProductC {
    return new ProductC();
  }
}

class ProductA implements IProductA {
  constructor() {
    console.log("XS Product A");
  }
}
class ProductB implements IProductB {
  constructor() {
    console.log("XS Product B");
  }
}
class ProductC implements IProductC {
  constructor() {
    console.log("XS Product C");
  }
}
