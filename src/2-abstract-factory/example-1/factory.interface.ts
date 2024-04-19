import { IProductA, IProductB, IProductC } from "./product.interface";

export interface IFactory {
  createProductA(): IProductA;
  createProductB(): IProductB;
  createProductC(): IProductC;
}
