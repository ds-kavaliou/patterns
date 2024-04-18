import { Mail } from "./mail";
import { ITransport } from "./transport.interface";

export class AirplaneTransport implements ITransport {
  deliver(mail: Mail): void {
    console.log("Delivered by Airplain", mail.message);
  }
}

export class PigeonTransport implements ITransport {
  deliver(mail: Mail): void {
    console.log("Delivered by Pigeon", mail.message);
  }
}
