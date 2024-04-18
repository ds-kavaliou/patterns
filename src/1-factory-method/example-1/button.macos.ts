import { IButton } from "./button.interface";

export class ButtonMacOs implements IButton {
  click(): void {
    console.log("macos click");
  }
}
