import { PigeonTransport, AirplaneTransport } from "./air.transport";
import { Post } from "./post.base";
import { ITransport } from "./transport.interface";

export class AirPost extends Post {
  constructor(private type?: string) {
    super();
  }

  protected getTransport(): ITransport {
    switch (this.type) {
      case "pigeon":
        return new PigeonTransport();
      default:
        return new AirplaneTransport();
    }
  }
}
