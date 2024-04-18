import { Mail } from "./mail";
import { ITransport } from "./transport.interface";

export abstract class Post {
  public deliver(mail: Mail) {
    this.getTransport().deliver(mail);
  }

  protected abstract getTransport(): ITransport;
}
