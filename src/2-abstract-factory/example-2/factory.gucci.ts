import { IButton, IModal, ISwitch, IInput } from "./component.interface";
import { IFactory } from "./factory.interface";

export class GucciFactory implements IFactory {
  createButton(): IButton {
    return new GucciButton();
  }
  createModal(): IModal {
    return new GucciModal();
  }
  createSwitch(): ISwitch {
    return new GucciSwitch();
  }
  createInput(): IInput {
    return new GucciInput();
  }
}

class GucciButton implements IButton {}
class GucciModal implements IModal {}
class GucciSwitch implements ISwitch {}
class GucciInput implements IInput {}
