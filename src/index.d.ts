declare namespace jasmine {
  interface Matchers<T> {
    toBeDisplayed(): Promise<void>;
    toBePresent(): Promise<void>;
    toHaveText(expectedText: string): Promise<void>;
    toContainText(expectedText: string): Promise<void>;
  }
}
