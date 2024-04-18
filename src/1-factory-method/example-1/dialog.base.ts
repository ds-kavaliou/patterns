import { IButton } from "./button.interface";

export abstract class Dialog {
  private trigger: IButton = this.createTrigger();

  protected abstract createTrigger(): IButton;

  public render() {
    this.trigger.click();
  }
}
