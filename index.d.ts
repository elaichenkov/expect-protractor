declare namespace jasmine {
    interface Matchers {
        toBeDisplayed(): Promise<void>;
    }
  }