import { Dialog } from "./dialog.base";
import { IButton } from "./button.interface";
import { ButtonWindows } from "./button.windows";

export class DialogWindows extends Dialog {
  protected createTrigger(): IButton {
    return new ButtonWindows();
  }
}
