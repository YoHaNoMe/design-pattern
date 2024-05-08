import { DarkThemeFactory, LightThemeFactory } from "./AbstractFactory";

class ThemeFactory {
  createLightTheme() {
    return new LightThemeFactory();
  }

  createDarkTheme() {
    return new DarkThemeFactory();
  }
}

const theme = new ThemeFactory().createLightTheme();

console.log(theme);
