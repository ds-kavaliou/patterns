import { IFactory } from "./factory.interface";
import { FactorySM } from "./factory.sm";
import { FactoryXS } from "./factory.xs";

class Store {
  constructor(private factory: IFactory) {}

  setFactory(factory: IFactory) {
    this.factory = factory;
  }

  makeJob() {
    this.factory.createProductA();
    this.factory.createProductB();
    this.factory.createProductC();
  }
}

const sm = new FactorySM();
const xs = new FactoryXS();

const store = new Store(sm);

store.makeJob();

store.setFactory(xs);

store.makeJob();
