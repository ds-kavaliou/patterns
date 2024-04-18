import { AirPost } from "./air.post";
import { Mail } from "./mail";

const airPost = new AirPost();

airPost.deliver(new Mail("hello from AIR POST"));
