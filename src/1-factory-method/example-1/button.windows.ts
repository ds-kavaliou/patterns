import { IButton } from "./button.interface";

export class ButtonWindows implements IButton {
  click(): void {
    console.log("windows click");
  }
}
