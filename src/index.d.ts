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
    toContainClass(expectedClassName: string): Promise<void>;
    toHaveCssValue(expectedClassName: string, expectedCss: { property: string; value: string }): Promise<void>;
    toContainCssValue(expectedClassName: string, expectedCss: { property: string; value: string }): Promise<void>;
    toHaveLink(expectedLink: string): Promise<void>;
    toContainLink(expectedLink: string): Promise<void>;
    toBeClickable(): Promise<void>;
    toBeSelected(): Promise<void>;
    toBeDisabled(): Promise<void>;
    toHaveTitle(expectedTitle: string): Promise<void>;
    toContainTitle(expectedTitle: string): Promise<void>;
    toHaveUrl(expectedUrl: string): Promise<void>;
    toContainUrl(expectedUrl: string): Promise<void>;
    toHaveWindowsCount(expectedCount: number): Promise<void>;
    toHaveWindowsCountMoreThan(expectedCount: number): Promise<void>;
    toHaveWindowsCountLessThan(expectedCount: number): Promise<void>;
  }
}
