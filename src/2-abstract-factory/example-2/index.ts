import { GucciFactory } from "./factory.gucci";
import { IFactory } from "./factory.interface";
import { MaterialFactory } from "./factory.material";

class Theme {
  private componentsFactory?: IFactory = new MaterialFactory();

  get components() {
    return this.componentsFactory;
  }

  setTheme(theme: string) {
    if (theme === "gucci") {
      this.componentsFactory = new GucciFactory();
    } else {
      this.componentsFactory = new MaterialFactory();
    }
  }
}

const theme = new Theme();

theme.setTheme("gucchi");

theme.components?.createButton();
