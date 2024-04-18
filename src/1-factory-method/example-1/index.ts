import { DialogMacOs } from "./dialog.macos";
import { DialogWindows } from "./dialog.windows";

const mac = new DialogMacOs();
const win = new DialogWindows();

mac.render();
win.render();
