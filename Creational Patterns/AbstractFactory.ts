// Abstract Factory
interface UIFactory {
  createButton(): AbstractButton;

  createText(): AbstractText;
}

// Concrete Factory
class LightThemeFactory implements UIFactory {
  createButton(): AbstractButton {
    return new LightButton();
  }

  createText(): AbstractText {
    return new LightText();
  }
}

// Concrete Factory
class DarkThemeFactory implements UIFactory {
  createButton(): AbstractButton {
    return new DarkButton();
  }

  createText(): AbstractText {
    return new DarkText();
  }
}

// Abstract Product
class AbstractButton {}

// Abstract Product
class AbstractText {}

// Concrete Product
class LightButton extends AbstractButton {
  constructor() {
    super();
    console.log("Light button created");
  }
}

// Concrete Product
class LightText extends AbstractText {
  constructor() {
    super();
    console.log("Light text created");
  }
}

// Concrete Product
class DarkButton extends AbstractButton {
  constructor() {
    super();
    console.log("Dark button created");
  }
}

// Concrete Product
class DarkText extends AbstractText {
  constructor() {
    super();
    console.log("Dark text created");
  }
}

// the abstraction is useful here, since i can change the theme
// from Light to Dark without changing the method calls
// const theme = new LightThemeFactory();

// theme.createButton();
// theme.createText();

// const darkTheme = new DarkThemeFactory();

// darkTheme.createButton();
// darkTheme.createText();

export { DarkThemeFactory, LightThemeFactory };
