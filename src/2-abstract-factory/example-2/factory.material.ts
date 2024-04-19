import { IButton, IModal, ISwitch, IInput } from "./component.interface";
import { IFactory } from "./factory.interface";

export class MaterialFactory implements IFactory {
  createButton(): IButton {
    return new MaterialButton();
  }
  createModal(): IModal {
    return new MaterialModal();
  }
  createSwitch(): ISwitch {
    return new MaterialSwitch();
  }
  createInput(): IInput {
    return new MaterialInput();
  }
}

class MaterialButton implements IButton {}
class MaterialModal implements IModal {}
class MaterialSwitch implements ISwitch {}
class MaterialInput implements IInput {}
