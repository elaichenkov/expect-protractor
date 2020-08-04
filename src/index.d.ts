declare namespace jasmine {
  interface Matchers<T> {
    toBeDisplayed(): Promise<void>;
    toBePresent(): Promise<void>;
    toHaveText(expectedText: string): Promise<void>;
    toContainText(expectedText: string): Promise<void>;
    toHaveValue(expectedValue: string): Promise<void>;
    toContainValue(expectedValue: string): Promise<void>;
    toHaveCount(expectedCount: number): Promise<void>;
    toHaveAttribute(expectedAttribute: string): Promise<void>;
  }
}
