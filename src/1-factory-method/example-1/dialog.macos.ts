import { Dialog } from "./dialog.base";
import { IButton } from "./button.interface";
import { ButtonMacOs } from "./button.macos";

export class DialogMacOs extends Dialog {
  protected createTrigger(): IButton {
    return new ButtonMacOs();
  }
}
