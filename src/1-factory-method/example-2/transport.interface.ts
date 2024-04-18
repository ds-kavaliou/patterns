import { Mail } from "./mail";

export interface ITransport {
  deliver(mail: Mail): void;
}
