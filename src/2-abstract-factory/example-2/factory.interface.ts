import { IButton, IInput, IModal, ISwitch } from "./component.interface";

export interface IFactory {
  createButton(): IButton;
  createModal(): IModal;
  createSwitch(): ISwitch;
  createInput(): IInput;
}
